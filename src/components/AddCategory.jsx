import { useState } from "react";


/**
 *  onChange es un evento que se usa comunmente en los button, input etc.
 *      Tenemos una funcion cuyo primer argumento es el argumento que le estoy mandando a la funcion que quiero ejecutar y por ello puedo obviar 
 * 
 *     En la tarea debemos agregar como props setCategory 
 * 
 */

export const AddCategory = ({ onNewCategory }) => {

  const [ inputValue, setInputValue ] = useState('One Punch');
  //const onInputChange = (event) => {   sin desestructuracion de target
  const onInputChange = ({target}) => {
    //console.log(target.value)
    setInputValue(target.value)
    ;
  };

  const onSubmit = (event) => {
    //Para evitar que se haga un refresh de todo usamos .preventDefault
    event.preventDefault();
    if ( inputValue.trim().length <= 1)return;
    //console.log(inputValue);
    
    //setCategories( categories => [...categories, inputValue ])
    // Enviamos el input limpio 
    onNewCategory(inputValue.trim());
    
    //Limpiar el inputValue con una cadena vacia 
    setInputValue('');
  }
    
  return (
    <>
    {/**<form onSubmit={(event) => onSubmit(event)}> */}
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                //onChange={ (event) => onInputChange(event) }
                onChange={ onInputChange }
            />
        </form>
    </>
  )
}
