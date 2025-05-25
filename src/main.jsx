// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import USAMentorPage from './pages/mentor/usa.jsx';
import { ChinaMentorPage } from './pages/mentor/china.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mentor/usa" element={<USAMentorPage />} />
        <Route path="/mentor/china" element={<ChinaMentorPage />} />
        <Route path="/apply/mentee" element={() => { window.location.href = 'https://forms.gle/LmcdroY8nVJG2Mge9'; return null; }} />
        <Route path="/apply/mentor" element={() => { window.location.href = 'https://forms.gle/JxpDAKezppRRjKdk6'; return null; }} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
