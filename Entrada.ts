import { Proveedor } from "./Proveedor";
import { Vehiculo } from "./Vehiculo";


export class Entrada {
    #fecha: string;
    #proveedor: Proveedor;
    #vehiculo: Vehiculo;
    constructor(fecha: string, proveedor: Proveedor, vehiculo: Vehiculo) {
        this.#fecha = fecha;
        this.#proveedor = proveedor;
        this.#vehiculo = vehiculo;
    }
    
    get informacion(): string {
        return `Fecha: ${this.#fecha}, Proveedor: ${this.#proveedor.nombre}, Vehiculo: ${this.#vehiculo.informacion}`;
    }
    get fecha(): string {
        return this.#fecha;
    }
    get proveedor(): Proveedor {
        return this.#proveedor;
    }
    get vehiculo(): Vehiculo {
        return this.#vehiculo;
    }
}