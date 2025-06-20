'use client'
import Image from "next/image"
import { Menu as IconMenu } from "@deemlol/next-icons";
import { Search } from "@deemlol/next-icons";
import { ShoppingCart } from "@deemlol/next-icons";
import { User } from "@deemlol/next-icons";
import { useLocalStorage } from "../services/localStorage";
import carritoDtos from "../categoria/components/dts/carritoDtos";
import productosDTOs from "../categoria/components/dts/productoDts";

export default function Navbar() {

    let listaCarrito:carritoDtos[] = []

    const [items] = useLocalStorage('carrito', listaCarrito);

    const handleShowItems = () => {
        alert(items.map((producto:productosDTOs) => "codigo: " + producto.codigo_producto + " nombre: " + producto.nombre))
        console.log(items)
    }
    return (
        <nav className="w-full h-30 bg-bluePrimary-200 flex flex-row justify-normal items-center p-2">
            <div id="logo" className="h-30  w-30 p-2">
                <Image
                    src="/Logo.png"
                    width={100}
                    height={100}
                    className="rounded-full"
                    alt="Log Ferremas">
                </Image>
            </div>
            <div id="menu" className="w-40 ">
                <button className="w-30 ml-auto cursor-pointer flex items-center justify-between m-auto">
                    <IconMenu className="text-zinc-200" size={50}  />
                    <h1 className=" text-zinc-200 text-2xl">Menú</h1>
                </button>
                
            </div>

            <div className="w-0.5 h-20 bg-zinc-200"></div>

            <div id="busqueda" className="w-250 flex items-center">
                <div className="flex bg-backgroundColor hover:outline-1 hover:outline-zinc-100 rounded-r-full rounded-l-full mr-auto ml-auto">
                    <input type="text"
                            placeholder="buscar" 
                            className="w-150 h-10  p-3 rounded-l-full focus:outline-none "
                       />
                    <div className="rounded-full w-10">
                        <Search className="h-10 m-auto" size={30}/>
                    </div>
                </div>
            </div>

            <div className="w-0.5 h-20 bg-zinc-200"></div>

            <div id="carrito" className="w-30"> 
                <ShoppingCart className="text-zinc-200 hover:text-zinc-100 ml-10" size={50} onClick={handleShowItems} />
            </div>
            <div id="usuario" className="w-30">
                <User className="text-zinc-200 hover:text-zinc-100 ml-10" size={50} />
            </div>
            

        </nav>
    )
}