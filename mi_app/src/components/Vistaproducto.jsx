import React from "react";
import ProductDetail from './ProductDetail';
import '../hoja-de-estilo/ProductDetail.css'
import '../App.css';


const VistaProducto = () => {
    return (
        <div className="App">
             <div className="vista-producto">
            < ProductDetail className="card"
              nombre='Cubrecama' 
              precio='$10.000'
              imagen='cubrecama1'
              descripcion='cubrecama doble azul y blanco estampado'
              SKU='45690'
              cantidadDisponible ='5' />
          
            < ProductDetail className="card"
              nombre='Cubrecama' 
              precio='$10.000'
              imagen='cubrecama2'
              descripcion='cubrecama doble azul y blanco estampado'
              SKU='45690'
              cantidadDisponible ='5' />
              < ProductDetail className="card"
              nombre='Cubrecama' 
              precio='$10.000'
              imagen='cubrecama3'
              descripcion='cubrecama doble azul y blanco estampado'
              SKU='45690'
              cantidadDisponible ='5' />
              < ProductDetail className="card"
              nombre='Cubrecama' 
              precio='$10.000'
              imagen='cubrecama4'
              descripcion='cubrecama doble azul y blanco estampado'
              SKU='45690'
              cantidadDisponible ='5' />
              < ProductDetail className="card"
              nombre='Cubrecama' 
              precio='$10.000'
              imagen='cortina1'
              descripcion='cubrecama doble azul y blanco estampado'
              SKU='45690'
              cantidadDisponible ='5' />
              < ProductDetail className="card"
              nombre='Cubrecama' 
              precio='$10.000'
              imagen='cortina2'
              descripcion='cubrecama doble azul y blanco estampado'
              SKU='45690'
              cantidadDisponible ='5' />
              
              < ProductDetail className="card"
              nombre='Cubrecama' 
              precio='$10.000'
              imagen='sabana2'
              descripcion='cubrecama doble azul y blanco estampado'
              SKU='45690'
              cantidadDisponible ='5' />
              < ProductDetail className="card"
              nombre='Cubrecama' 
              precio='$10.000'
              imagen='minilicuadora'
              descripcion='cubrecama doble azul y blanco estampado'
              SKU='45690'
              cantidadDisponible ='5' />
              < ProductDetail className="card"
              nombre='Cubrecama' 
              precio='$10.000'
              imagen='licuadora'
              descripcion='cubrecama doble azul y blanco estampado'
              SKU='45690'
              cantidadDisponible ='5' />
              
              < ProductDetail className="card"
              nombre='Cubrecama' 
              precio='$10.000'
              imagen='pavaElectrica'
              descripcion='cubrecama doble azul y blanco estampado'
              SKU='45690'
              cantidadDisponible ='5' />
              < ProductDetail className="card"
              nombre='Cubrecama' 
              precio='$10.000'
              imagen='termostanly'
              descripcion='cubrecama doble azul y blanco estampado'
              SKU='45690'
              cantidadDisponible ='5' />
              < ProductDetail className="card"
              nombre='Cubrecama' 
              precio='$10.000'
              imagen='mateStanly'
              descripcion='cubrecama doble azul y blanco estampado'
              SKU='45690'
              cantidadDisponible ='5' />
            </div>
        </div>
           
    );
}

 export default VistaProducto ;