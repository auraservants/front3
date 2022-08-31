// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")
import { useState } from 'react'

export default function Item({increase, producto, stock}) {
  const [actualStock, setStock] = useState(stock)

  function handlerStock(){
    setStock(actualStock -1)
    increase()
  }

  return (
    <div className='producto'>
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      {actualStock>0 ? <AvailableStock stock={actualStock} buy={handlerStock}/> : <OutOfStock/>}
    </div>
  );
}

function AvailableStock({stock,buy}){
  return(
    <>
    <h5>En Stock: <span>{stock}</span></h5>
    <button onClick={buy}>comprar</button>
    </>
  )
}

function OutOfStock(){
  return(
    <>
    <h5>En Stock: <span className="warning">agotado</span></h5>
    <button disabled>sin stock</button>
    </>
  )
}
