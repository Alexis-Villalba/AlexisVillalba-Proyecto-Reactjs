import React, { Fragment } from 'react'
import Item from '../../Components/Body/Item'
import Productos from '../../Components/Productos.json'




const Home = () => {
  return (
    <Fragment>
    <h1>¡Hola, Bienvenidos a nuestra tienda!</h1>
    <div className='d-flex flex-row mb-3 flex-wrap justify-content-around'>
      {Productos.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  </Fragment>
);
};

export default Home