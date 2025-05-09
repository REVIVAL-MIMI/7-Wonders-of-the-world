import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import './Profile.css';

export default function Profile() {
    const { user, logout } = useAuth();
    const [wonders, setWonders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) return;
        // Получаем чудеса текущего пользователя
        fetch(`/api/wonders?owner=${user.id}`)
            .then(res => res.json())
            .then(data => setWonders(data))
            .catch(() => setWonders([]))
            .finally(() => setLoading(false));
    }, [user]);

    if (loading) {
        return <div className="profile-loading">Загрузка...</div>;
    }

    return (
        <div className="profile-page">
            <aside className="profile-sidebar">
                <div className="profile-header">
                    <img
                        src={user.avatarUrl || '/default-avatar.png'}
                        alt="Аватар"
                        className="avatar"
                    />
                    <h2 className="user-name">{user.firstName} {user.lastName}</h2>
                    <p className="user-email">{user.email}</p>
                    <div className="user-stats">
                        <div className="stat">
                            <span className="stat-number">{wonders.length}</span>
                            <span className="stat-label">Моих чудес</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">{user.likesCount || 0}</span>
                            <span className="stat-label">Лайков</span>
                        </div>
                    </div>
                </div>

                <nav className="profile-nav">
                    <Link to="/profile/edit" className="btn nav-btn">Редактировать</Link>
                    <Link to="/my-wonders" className="btn nav-btn">Мои чудеса</Link>
                    {user.role === 'MODERATOR' && (
                        <Link to="/moderation" className="btn nav-btn">Модерация</Link>
                    )}
                    {user.role === 'ADMIN' && (
                        <Link to="/admin" className="btn nav-btn">Админ-панель</Link>
                    )}
                    <button onClick={logout} className="btn logout-btn">Выйти</button>
                </nav>
            </aside>

            <main className="profile-content">
                <header className="content-header">
                    <h1>Мои чудеса</h1>
                    <Link to="/add-wonder" className="btn add-btn">+ Добавить чудо</Link>
                </header>

                {wonders.length === 0 ? (
                    <p className="empty-message">У вас еще нет чудес. Добавьте своё первое!</p>
                ) : (
                    <div className="wonders-grid">
                        {wonders.map(w => (
                            <div key={w.id} className="wonder-card">
                                <img src={w.imageUrl} alt={w.name} className="wonder-img" />
                                <h3 className="wonder-name">{w.name}</h3>
                                <p className="wonder-desc">{w.description}</p>
                                <Link to={`/wonders/${w.id}`} className="btn detail-btn">
                                    Подробнее
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}