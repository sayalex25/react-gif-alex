 /**  
 *   Es una buena practica colocar las funciones que no tienen dependencias fuera del componente debido a que asi evitamos que el componente 
 * no este reprocesando la funcion volviendo a asignar un espacio en memoria cuando el componente se vuelva a redibujar 
 * 
 *  Nunca debemos colocar la ejecucion de una funcion dentro de un fuctional component porque cada vez que el componente se renderice volvera 
 * a ejecutar la funcion, por ello hemos trasladado la funcion este nuevo archivo, la exportamos y luego la importamos en el fuctional component  
 */

 export const getGifs = async( category ) => {
    //No olvidar colocar el protocolo https://   tambien podemos limitar la cantidad de datos que queremos traer con &limit=
    const url = `https://api.giphy.com/v1/gifs/search?api_key=pAUgqADW9s1Jn3BnSmwjoFAFDSCn9YKq&q=${ category }&limit=10`
    // Luego de tener listo el url realizamos la peticion http
    const resp = await fetch (url);
    //Como nos interesa la desestructuramos y eso lo traemos de await
    const { data } = await resp.json();
    //Para traer expecificamente los gifs que necesito del arreglo 
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}