import './App.css';
import { Menu } from './components/Menu.js'
import { Route, Routes, BrowserRouter as Router, Navigate } from "react-router-dom";
import Dashboard from './pages/dashboard'
import Config from './pages/config'
import Employees from './pages/employees'
import Diary from './pages/diary'




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/config" element={<Config />} />
      </Routes>
    </Router>
  );
}

export default App;
