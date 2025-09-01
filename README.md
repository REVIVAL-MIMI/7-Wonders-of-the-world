# 🌍 7 Wonders of the World – Interactive Web App

**Интерактивный веб‑проект о 7 чудесах света с возможностью добавления пользовательских "чудес", 3D‑глобусом, модерацией и геопоиском.**


---

## ✨ Особенности

- 🗺️ **3D-глобус** с официальными чудесами (CesiumJS)
- 🏛️ Просмотр подробной информации, фото и интересных фактов
- ➕ **Добавление своих "чудес"** через форму
- 🔐 JWT‑авторизация и личный кабинет
- 🧹 **Модерация контента** (ролевая модель: USER / MODERATOR / ADMIN)
- 🧭 Гео‑поиск чудес поблизости (PostGIS + ST_DWithin)
- 📸 Хранение изображений в Cloudinary
- ❤️ Лайки, фильтры, поиск, расширенные UX-фишки
- 📱 Адаптивный дизайн (мобильный/десктоп)

---

## 🛠️ Технологический стек

### Frontend:
- [React](https://reactjs.org/) + [Redux](https://redux.js.org/) / Context API
- [Axios](https://axios-http.com/) – запросы к API
- [CesiumJS](https://cesium.com/)
- [React Router](https://reactrouter.com/) – маршрутизация
  
---

## 🧪 Запуск проекта

### Frontend

```bash
cd frontend
npm install
npm run dev
```
### Backend 

```bash
cd backend
./mvnw spring-boot:run
```
