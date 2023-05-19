import React from 'react'
import './Item.css';
import { useNavigate } from 'react-router-dom';

const Item = (props) => {
    const {id,nombre,precio,imagen} = props;

    const navigate = useNavigate()
  return (
    <div className='d-flex flex-column alw-25 h-25 border border-dark rounded p-3 m-3 '>
        <img className='w-10 h-10' src={imagen} alt={nombre} />
        <h2 className='fs-6 text-wrap '>{nombre}</h2>
        <p className='fs-6'>${precio}</p>
        <button className='btn btn-primary' onClick={()=>navigate(`/item/${id}`)}>Ver más</button>
    </div>
  )
}

export default Item