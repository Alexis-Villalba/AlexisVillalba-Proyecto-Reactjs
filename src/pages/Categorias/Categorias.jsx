import React, { useEffect, useState, Fragment } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Item from '../../Components/Body/Item'
import Productos from '../../Components/Productos.json'
import { obtenerProductosPorCategoria } from '../../Components/AsyncMock'

const Categorias = () => {
  const navigate = useNavigate()
  const{categoria}= useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading]  = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      obtenerProductosPorCategoria(categoria)
      
  .then(productos => {
      setItem(Productos)
      setLoading(false)})
    }, 1000);
  },[]);

  return (
    <Fragment>
      <button className='btn btn-primary m-3'onClick={()=>navigate(-1)}>Volver</button>
      <hr />
      {loading && <h1>Cargando...</h1>}
      {item && !loading && (
        <div>
          <div className='d-flex flex-row mb-3 flex-wrap justify-content-around'>
      {Productos.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>

        </div>
      )}
    </Fragment>
  )
}


export default Categorias