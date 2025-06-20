import { Card, CardBody} from "@heroui/card";
import { useState } from "react";
import productosDTOs from "./dts/productoDts";
import { getProductos } from "../services/httpService";
import { ProductoCarta, ProductoImage} from '../../secundario/ProductoCarta'



export default async function ListaProductos() {

    const productos:productosDTOs[] = await getProductos();

    return (
        
        <div className="flex flex-row flex-wrap gap-4 justify-between">
            {productos.map((producto, index) => (
                <ProductoCarta key={index} nombre={producto.nombre} precio={producto.precio} img={producto.img} producto={producto}/>
                 ))
             }
                
        </div>
    )
}
