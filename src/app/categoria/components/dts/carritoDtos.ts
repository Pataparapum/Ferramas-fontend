import { UUID } from "crypto";

export default class carritoDtos {
    userId:UUID;
    product:string;
    precio:number;
    detalles:string;
    img:string;
    estado:boolean;

    constructor(userId:UUID, product:string, precio:number, detalles:string, img:string, estado:boolean) {
        this.userId = userId;
        this.product = product;
        this.precio = precio;
        this.detalles = detalles;
        this.img = img;
        this.estado = estado; 
    }
}