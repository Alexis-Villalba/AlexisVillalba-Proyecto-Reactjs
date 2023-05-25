import React from 'react'
import Productos from './Productos.json'

export const obtenerProductosPorCategoria = (categoriaId) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const productosCategoria = Productos.filter(producto => producto.categoria === categoriaId);
            resolve(productosCategoria);
          }, 2000);
        });
      };
