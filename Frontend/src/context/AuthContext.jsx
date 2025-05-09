import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../api';

// Контекст для авторизации
const AuthContext = createContext();

// Провайдер
export function AuthProvider({ children }) {
    const [token, setToken] = useState(() => localStorage.getItem('token'));
    const [user, setUser]   = useState(null);
    const [loading, setLoading] = useState(!!token);

    useEffect(() => {
        if (!token) {
            setLoading(false);
            return;
        }

        // ─ фиксим «мигание» — ставим загрузку до запроса
        setLoading(true);

        api.get('/user')
            .then(({ data }) => setUser(data))
            .catch(() => {
                console.warn('Токен невалиден, разлогиниваемся');
                logout();
            })
            .finally(() => setLoading(false));
    }, [token]);

    const login = async ({ email, password }) => {
        const { data } = await api.post('/auth/login', { email, password });
        localStorage.setItem('token', data.token);
        setToken(data.token);
    };

    const register = async ({ email, password, firstName, lastName }) => {
        const { data } = await api.post('/auth/register', { email, password, firstName, lastName });
        localStorage.setItem('token', data.token);
        setToken(data.token);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            login,
            register,
            logout,
            isAuthenticated: !!user
        }}>
            {children}
        </AuthContext.Provider>
    );
}

// Хук для удобного доступа
export function useAuth() {
    return useContext(AuthContext);
}
