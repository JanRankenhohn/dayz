import './App.css';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import GoodMorning from './features/workday/GoodMorning';

/**
 * Main App Compnent
 * Includes Routes
 * @return App component
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<GoodMorning/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
