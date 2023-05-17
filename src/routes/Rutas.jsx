import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemDetail from '../pages/ItemDetail'
import Home from '../pages/Home'
import Categorias from '../pages/Categorias'
import Nosotros from '../pages/Nosotros'
import Navbar from '../Components/Navbar/NavBar'
import Footer from '../Components/Footer/Footer';

const Rutas = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/categoria/:id' element={<Categorias/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/item/:id' element={<ItemDetail/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default Rutas