import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/layout/Nav';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage'
import NosotrosPage from './pages/NosotrosPage';
import ContactoPage from './pages/ContactoPage';
import ProductosPage from './pages/ProductosPage';


function App() {
  return (
    <div className="App">  
     
    

     <BrowserRouter>
       <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
     </BrowserRouter>
      <Footer/> 

    </div>
  );
}

export default App;
