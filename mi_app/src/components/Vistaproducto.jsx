import React from "react";
import ProductDetail from './ProductDetail';
import '../hoja-de-estilo/ProductDetail.css'
import '../App.css';


const VistaProducto = () => {
    return (
        <div className="App">
             <div className="container-tienda">
            < ProductDetail className="card"
              nombre='Producto' 
              precio='$10.000'
              imagen='cubrecama1'
              descripcion='Descripcion de los productos'
              SKU='45690'
              cantidadDisponible ='5' />
              < ProductDetail className="card"
              nombre='Producto' 
              precio='$10.000'
              imagen='cubrecama2'
              descripcion='Descripcion de los productos'
              SKU='45690'
              cantidadDisponible ='5' />
                < ProductDetail className="card"
              nombre='Producto' 
              precio='$10.000'
              imagen='cubrecama3'
              descripcion='Descripcion de los productos'
              SKU='45690'
              cantidadDisponible ='5' />
              < ProductDetail className="card"
              nombre='Producto' 
              precio='$10.000'
              imagen='cubrecama4'
              descripcion='Descripcion de los productos'
              SKU='45690'
              cantidadDisponible ='5' />
              < ProductDetail className="card"
              nombre='Producto' 
              precio='$10.000'
              imagen='cortina1'
              descripcion='Descripcion de los productos'
              SKU='45690'
              cantidadDisponible ='5' />
              < ProductDetail className="card"
              nombre='Producto' 
              precio='$10.000'
              imagen='cortina2'
              descripcion='Descripcion de los productos'
              SKU='45690'
              cantidadDisponible ='5' />
              < ProductDetail className="card"
              nombre='Producto' 
              precio='$10.000'
              imagen='sabana2'
              descripcion='Descripcion de los productos'
              SKU='45690'
              cantidadDisponible ='5' />
              < ProductDetail className="card"
              nombre='Producto' 
              precio='$10.000'
              imagen='minilicuadora'
              descripcion='Descripcion de los productos'
              SKU='45690'
              cantidadDisponible ='5' />
              < ProductDetail className="card"
              nombre='Producto' 
              precio='$10.000'
              imagen='licuadora'
              descripcion='Descripcion de los productos'
              SKU='45690'
              cantidadDisponible ='5' />
              < ProductDetail className="card"
              nombre='Producto' 
              precio='$10.000'
              imagen='pavaElectrica'
              descripcion='Descripcion de los productos'
              SKU='45690'
              cantidadDisponible ='5' />
              < ProductDetail className="card"
              nombre='Producto' 
              precio='$10.000'
              imagen='termostanly'
              descripcion='Descripcion de los productos'
              SKU='45690'
              cantidadDisponible ='5' />
              < ProductDetail className="card"
              nombre='Producto' 
              precio='$10.000'
              imagen='mateStanly'
              descripcion='Descripcion de los productos'
              SKU='45690'
              cantidadDisponible ='5' />
            </div>
        </div>
           
    );
}

 export default VistaProducto ;