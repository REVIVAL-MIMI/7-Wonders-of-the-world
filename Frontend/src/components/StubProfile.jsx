/* src/components/StubProfile.jsx */
import React from 'react';
import { Link } from 'react-router-dom';
import './StubProfile.css';

export default function StubProfile() {
    // Заглушки данных
    const user = {
        firstName: 'Иван',
        lastName: 'Иванов',
        email: 'ivan.ivanov@example.com',
        avatarUrl: 'https://via.placeholder.com/100',
        wondersCount: 3,
        likesCount: 42,
        commentsCount: 17
    };
    const wonders = [
        { id: '1', name: 'Моя пирамида', description: 'Восхитительная пирамида в пустыне.', imageUrl: 'https://via.placeholder.com/200' },
        { id: '2', name: 'Водопад мечты', description: 'Водопад разноцветных капель.', imageUrl: 'https://via.placeholder.com/200' },
        { id: '3', name: 'Гора света', description: 'Сияющая гора на горизонте.', imageUrl: 'https://via.placeholder.com/200' }
    ];
    const comments = [
        { id: 'c1', text: 'Восхитительное место!' },
        { id: 'c2', text: 'Хочу туда!' }
    ];
    const likes = [
        { id: 'l1', wonder: 'Colosseum' },
        { id: 'l2', wonder: 'Great Wall' }
    ];

    return (
        <div className="stub-page">
            <div className="stars-bg"></div>
            <div className="stub-container">
                <h1 className="stub-title">Профиль</h1>
                <div className="stub-header">
                    <img src={user.avatarUrl} alt="Аватар" className="stub-avatar" />
                    <h2>{user.firstName} {user.lastName}</h2>
                    <p className="stub-email">{user.email}</p>
                    <div className="stub-stats">
                        <div><strong>{user.wondersCount}</strong><span>Чудес</span></div>
                        <div><strong>{user.likesCount}</strong><span>Лайков</span></div>
                        <div><strong>{user.commentsCount}</strong><span>Комментариев</span></div>
                    </div>
                    <nav className="stub-nav">
                        <button className="stub-btn">Редактировать</button>
                        <button className="stub-btn">Мои чудеса</button>
                        <button className="stub-btn">Мои комментарии</button>
                        <button className="stub-btn">Мои лайки</button>
                        <button className="stub-btn logout">Выйти</button>
                    </nav>
                </div>
                <section className="stub-section">
                    <h3>Мои чудеса</h3>
                    <div className="stub-grid">
                        {wonders.map(w => (
                            <div key={w.id} className="stub-card">
                                <img src={w.imageUrl} alt={w.name} />
                                <h4>{w.name}</h4>
                                <p>{w.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="stub-section">
                    <h3>Мои комментарии</h3>
                    <ul className="stub-list">
                        {comments.map(c => (
                            <li key={c.id}>{c.text}</li>
                        ))}
                    </ul>
                </section>
                <section className="stub-section">
                    <h3>Мои лайки</h3>
                    <ul className="stub-list">
                        {likes.map(l => (
                            <li key={l.id}>{l.wonder}</li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}