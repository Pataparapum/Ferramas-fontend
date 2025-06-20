export default class productosDTOs {
    codigo_producto:string;
    marca:string;
    nombre:string;
    precio: number;
    categoria:string;
    img:string;

    constructor(codigo_producto:string, marca:string, nombre:string, precio:number, categoria:string, img:string) {
        this.codigo_producto = codigo_producto;
        this.marca = marca;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.img = img;
    }
}
