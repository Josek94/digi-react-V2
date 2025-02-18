
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DigimonList from './pages/DigimonList';
import DigimonDetail from './pages/DigimonDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<DigimonList />} />
        <Route path="/digimon/:id" element={<DigimonDetail />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
