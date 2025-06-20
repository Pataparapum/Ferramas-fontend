import Filtros from "./components/filtros"
import Categoria from "./components/categoria"
import ListaProductos from "./components/listaProductos"


export default async function Page() {
    return (
        <main className="min-h-screen bg-backgroundColor2 grid grid-cols-12 grid-rows-6 items-start gap-6 pt-5">
            <div className="col-span-3 row-span-6 h-[900]">
                <Categoria/>
            </div>
            <div className="col-span-9 col-start-4 row-span-1 row-start-1">
                <Filtros />
            </div>
            <div className="col-span-9 col-start-4 row-span-5 row-start-2 h-[735px]">
                <ListaProductos/>
            </div>
        
        </main>
        
    )
}