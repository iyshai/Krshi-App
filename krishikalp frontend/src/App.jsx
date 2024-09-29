
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Community from './pages/Community';
import Ecommerse from './pages/ecommerse';
import Yojna from './pages/yojna';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import ChatBot from './pages/chatbot';
import Chatboticon from './componets/chatboticon/chatboticon';
import Scan from './pages/scan';
// import WeatherApp from './pages/weather';
import Finanace from './pages/finanace';
import Navbar from './componets/navbar/Navbar';
import WeatherApp from './componets/weather/Weather';




function App() {
  return (
    <Router> 
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
     
      {!hideNavbar && <Navbar />}
      {!hideNavbar && <Chatboticon />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ecommerse" element={<Ecommerse />} /> 
        <Route path="/community" element={<Community />} /> 
        <Route path="/yojna" element={<Yojna />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/finanace" element={<Finanace />} />
        <Route path="/weather" element={<WeatherApp />} />
      </Routes>
    </>
  );
}

export default App;

