import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Rutas from './routes/Rutas.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import { ProductosProvider } from './context/ProductosContext.jsx'
import { CarritoProvider } from './context/CarritoContext.jsx'

createRoot(document.getElementById('root')).render(
  <ProductosProvider>
      <CarritoProvider>

  <BrowserRouter>
  <Header />
  <Rutas />
  <Footer/>
  </BrowserRouter>
  </CarritoProvider>

  </ProductosProvider>
)
