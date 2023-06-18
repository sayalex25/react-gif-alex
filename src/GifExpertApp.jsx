import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


/** Cuando vamos a renderizar algo con el metodo .map() se debe proprcionar un key obligatoriamente, este key en un nombre unico que nos permite diferenciar ese componente  
 * 
 * Se recomienda tener la misma cantidad de useState que las variables state 
*/

export const GifExpertApp = () => {

    //Podemos inicializarlo como un arreglo 
    const [categories, setCategories] = useState(['One Punch' /*'Drango Ball'*/]);
    
    const onAddCategory = ( newCategory) => {
        //console.log(newCategory)
        
        //hacer que el componente emita el nuevo valor, arriba cuando recibimos la nueva categoria antes de incertarlo podemos hacer un CONDICION  
        if( categories.includes(newCategory) ){
            return
        };
        

        // categories.push('coco') Evitaremos usar el push porque muta el arreglo 
        //categories.push(newCategory);
        
        //Vamoa a agregar una nueva categoria y conservamos las anteriores con el operador spread ... 
        setCategories([newCategory, ...categories ]);

        //Insertar la categoria al inicio
        //setCategories(['Coco', ...categories ]);
        
        //Usando el call back 
        //setCategories( cat => [...cat, 'Coco']);

    }

  return (
    <>
        <h1>GifExpertApp</h1>
       
        <AddCategory 
            //setCategories={ setCategories }


            // los eventos los reconocemos por el on que nos indica que esta emitiendo algo 
            onNewCategory={ value => onAddCategory(value)}
            
        />

            { 
            //Tenemos una funcion de flecha que solo tiene un return y siempre regresa el mismo objeto, lo dejamo inplicito 
             categories.map( (category) => (
                //Estamos enviando la categoria como una llave no como una props   
                    <GifGrid 
                        key={ category } 
                        category={ category }
                    />
                ))
            }
            
            
    </>
    
  )
}
