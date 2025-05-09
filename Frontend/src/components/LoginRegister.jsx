import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import './LoginRegister.css';

export default function LoginRegister() {
    const [isLogin, setIsLogin] = useState(true);
    const [form, setForm]     = useState({ email: '', password: '', confirm: '' });
    const [error, setError]   = useState('');
    const { login, register } = useAuth();
    const navigate            = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        setError('');

        if (!isLogin && form.password !== form.confirm) {
            setError('Пароли не совпадают');
            return;
        }

        try {
            if (isLogin) {
                await login({ email: form.email, password: form.password });
            } else {
                await register({
                    email: form.email,
                    password: form.password,
                    firstName: form.firstName || '',
                    lastName: form.lastName || ''
                });
            }
            navigate('/', { replace: true });
        } catch (err) {
            setError(err.response?.data?.error || err.message);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1 className="auth-title">{isLogin ? 'Welcome Back' : 'Create Account'}</h1>

                <div className="auth-toggle">
                    <button
                        onClick={() => { setIsLogin(true); setError(''); }}
                        className={isLogin ? 'active' : ''}
                    >
                        Sign In
                    </button>
                    <button
                        onClick={() => { setIsLogin(false); setError(''); }}
                        className={!isLogin ? 'active' : ''}
                    >
                        Sign Up
                    </button>
                </div>

                {error && <div className="error-message">{error}</div>}

                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <FaEnvelope className="icon" />
                        <input
                            type="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <FaLock className="icon" />
                        <input
                            type="password"
                            placeholder="Password"
                            value={form.password}
                            onChange={e => setForm({ ...form, password: e.target.value })}
                            required
                        />
                    </div>

                    {!isLogin && (
                        <div className="input-group">
                            <FaLock className="icon" />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                value={form.confirm}
                                onChange={e => setForm({ ...form, confirm: e.target.value })}
                                required
                            />
                        </div>
                    )}

                    <button type="submit" className="submit-btn">
                        {isLogin ? 'Sign In' : 'Sign Up'}
                    </button>
                </form>

                {isLogin && (
                    <button className="forgot-btn" onClick={() => alert('Реализация “забыли пароль” здесь')}>
                        Forgot password?
                    </button>
                )}
            </div>
        </div>
    );
}
