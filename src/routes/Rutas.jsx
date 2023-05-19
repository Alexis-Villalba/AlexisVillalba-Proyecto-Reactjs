import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemDetail from '../pages/itemDetail/ItemDetail'
import Home from '../pages/Home-/Home'
import Categorias from '../pages/Categorias/Categorias'
import Nosotros from '../pages/Nosotros/Nosotros'
import Navbar from '../Components/Navbar/NavBar'
import Footer from '../Components/Footer/Footer';

const Rutas = () => {
  
  const navItems = [
    {
      path:"/",
      name:"Home"
    },
    {
      path:"/categoria/1",
      name:"Categorías"
    },
    {
      path:"item/1",
      name:"Item"
    },
    {
      path:"/nosotros",
      name:"Nosotros"
    }
    
  ]
  return (
    <BrowserRouter>
    <Navbar navItems={navItems}/>
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