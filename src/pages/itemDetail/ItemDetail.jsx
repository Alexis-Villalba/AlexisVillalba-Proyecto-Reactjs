import React, { useEffect, useState, Fragment } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Productos from '../../Components/Productos.json'

const ItemDetail = () => {
  const navigate = useNavigate()
  const{id}= useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading]  = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      const filter = Productos.find((item) => item.id === id);

      setItem(filter)
      setLoading(false)
    }, 2000);
  },[]);
  console.log(useParams())

  return (
    <Fragment>
      <button className='btn btn-primary'onClick={()=>navigate(-1)}>Volver</button>
      <hr />
      {loading && <h1>Cargando...</h1>}
      {item && !loading && (
        <div>
          <img src={item.imagen} alt={item.nombre} />
          <h1>{item.nombre}</h1>
          <p>{item.descripcion}</p>
          <p>{item.precio}</p>

        </div>
      )}
    </Fragment>
  )
}

export default ItemDetail