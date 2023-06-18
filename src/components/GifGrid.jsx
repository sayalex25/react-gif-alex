
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

//Traera un listado para cada entrada
export const GifGrid = ({category}) => {
 
    const { images, isLoading} = useFetchGifs(category);

    console.log({ images, isLoading });
/**    Todo este codigo lo simplificamos colocandolo dentro de un customHook 
 * const [images, setImages] = useState([]);
  const [isloading, setIsloading] = useState(true)

  const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsloading(false);
    }
    
    useEffect ( () => {
        getImages();
    }, [])
 */


    return (
    <>
        <h3>{ category }</h3>
       {/** {
            isLoading
            ? (<h2>Cargando...</h2>)
            : null
        } 
        */}
        {
            isLoading && ( <h2>Cargando...</h2> )
        }        
        
       <div className="card-grid">
            
            { 
                images.map( ( image ) => (
                   <GifItem 
                        key={ image.id } 
                        { ...image }                       
                   />
                ))
            }
            
       </div>

    </>
  )
}



/* useEffect posee un EffectCallback, luego una lista de dependecia las cuales son las condiciones con las que 
    queremos ejecultar el callback
    Si dejamos las dependencias vacias le decimos que este hook solo se disparara la primera vez que se crea y 
    se construye el componente 
*/


/**
 *   Otra forma de hacerlo
 *    useEffect( () => {
        getGifs(category)
            .then( newImages => setImages(newImages));
    }, [])
 * 
 * 
 * ... operador spread para exparcir las imagenes 
 *  esto nos sirve para que las propiedades de las imagenes se envien como propertys
 *  
 * Para traer el nombre de cada imagen
 */