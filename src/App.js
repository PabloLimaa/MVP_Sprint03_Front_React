import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login'
import CriarConta from './components/pages/CriarConta'
import Home from './components/pages/Home'
import Agendar from './components/pages/Agendar'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/CriarConta" element={<CriarConta />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Agendar" element={<Agendar />} />
        </Routes>
      </Container> 
      <Footer />
    </BrowserRouter>
  )
}

export default App;
