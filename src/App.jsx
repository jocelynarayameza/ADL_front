import './normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Routes, Route } from "react-router-dom";

import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import MyProducts from './pages/MyProducts.jsx';
import NuevaVenta from './pages/NuevaVenta'
import Profile from './pages/Profile'
import NavbarComponent from './components/NavbarComponent.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import CardDetail from './pages/CardDetail.jsx';
import EditPost from './pages/EditPost.jsx';
import MyOrders from './pages/MyOrders.jsx';
import NotFound from './pages/NotFound.jsx';
import OrderDetail from './pages/OrderDetail.jsx';


function App() {

  return (
    <>
    <NavbarComponent />
    <Header />

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto/:id" element={<CardDetail />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/perfil/" element={<Profile />} /> 
        <Route path="/perfil/nueva-venta" element={<NuevaVenta />} />
        <Route path="/perfil/mis-productos" element={<MyProducts />} />
        <Route path="/perfil/mis-productos/:id" element={<EditPost/>} /> 
        <Route path="/perfil/pedidos-anteriores" element={<MyOrders />} />
        <Route path="/perfil/pedidos-anteriores/:id" element={<OrderDetail />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
 
    <Footer />
    </>
  )
}

export default App
