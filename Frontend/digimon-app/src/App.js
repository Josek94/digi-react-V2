import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DigimonList from './pages/DigimonList';
import DigimonDetail from './pages/DigimonDetail';
import RegistroUsuario from './pages/RegistroUsuario';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/digimon/list" element={<DigimonList />} />
        <Route path="/digimon/:id" element={<DigimonDetail />} />
        <Route path="/registro" element={<RegistroUsuario />} />
        <Route path="/" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

