'use client'

import { Card, CardBody} from "@heroui/card";
import { Button } from "@heroui/button";
import { useLocalStorage } from "@/app/services/localStorage";
import carritoDtos from "../categoria/components/dts/carritoDtos";
import productosDTOs from "../categoria/components/dts/productoDts";

const ProductoImage = (props:any) => {

    const {imagen} = props
    return (
        <img src={imagen} alt="imagen producto"></img>
    )
}

const ProductoCarta = (props:any) => {
    const {nombre, precio, img, key, producto} = props
    
    let carritoList:carritoDtos[] = [];
    const [listItems, setCarItem] = useLocalStorage("carrito", carritoList);

    const  handleItem = () => {
        if (listItems.length == 0) {
            carritoList.push(producto);
    
            setCarItem(carritoList);
        } else {
            setCarItem((previusItem:carritoDtos[]) => [...previusItem, producto])
        }
    }

    return (
        <div>
            <Card 
            key={key}
                isBlurred
                className="bg-backgroundColor rounded-2xl"
                shadow="sm">
                <CardBody>
                    <div className=" m-auto h-60 grid grid-row-6 md:grid-rows-12 gap-6 md:gap-4 items-center justify-center rounded-2xl">
                        <div className="m-auto justify-center row-span-6 md:row-span-4 p-5 mt-5 bg-amber-50 rounded-2xl">
                            <ProductoImage imagen={img}/>
                        </div>
                        <div className="flex flex-col row-span-6 md:row-span-8 m-auto text-center p-3 mt-15">
                                <h2 className="text-[14px]">{nombre}</h2>
                            <p className="text-lg">${precio}</p>
                        </div>
                        <div className="m-auto">
                            <Button color="primary" onPress={handleItem}>Añadir al carrito</Button>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export {ProductoCarta, ProductoImage}
