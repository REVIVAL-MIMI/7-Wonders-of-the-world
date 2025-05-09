import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DynamicIsland   from './components/DynamicIsland';
import CesiumMap        from './components/CesiumMap';
import LoginRegister   from './components/LoginRegister';
import SimpleProfile   from './components/StubProfile.jsx';

function App() {
    return (
        <Router>
            <DynamicIsland />
            <Routes>
                <Route path="/login"   element={<LoginRegister />} />
                <Route path="/profile" element={<SimpleProfile />} />
                <Route path="/"        element={<CesiumMap />} />
            </Routes>
        </Router>
    );
}

export default App;
