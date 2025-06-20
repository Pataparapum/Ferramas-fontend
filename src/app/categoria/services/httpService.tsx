import productosDTOs from "../components/dts/productoDts";
import { productosInterface } from "../interface/productosInterface";

async function getProductos():Promise<productosDTOs[]>{
    let productos:productosDTOs[];
    
    try {
      productos = await fetch(
        `http://localhost:8082/productos?cambio=peso`
      ).then((response) => {
        if (!response.ok) {
            throw new Error("something went wrong")
        }
        return response.json();
      });
    } catch(e) {
        console.log("...algo fallo")
        throw e
    }

    return productos
}


export {getProductos}