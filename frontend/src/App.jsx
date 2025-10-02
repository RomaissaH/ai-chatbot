import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from './pages/Layout';
import Register from './pages/Resister';  
import Login from './pages/Login';  
import LanguageSwitcher from './components/LanguageSwitcher'; 
import LandingPage from './pages/LandingPage';
import { useTranslation } from "react-i18next";
import Navbar from './components/Navbar';
import Hero from './components/Hero'; 
import Nav from './components/Nav'; 
import Features from './components/features';
import About from './components/about';
import Footer from './components/Footer';
function App() {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  return (
   
    <BrowserRouter>
    
      <Nav/>  
      <Hero />
      <Features />
      <About/>
      <Footer/>

      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter> 
   
  )
}

export default App