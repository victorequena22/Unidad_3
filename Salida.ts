import { Cliente } from "./Cliente";
import { Vehiculo } from "./Vehiculo";


export class Salida {
    #fecha: string;
    #cliente: Cliente;
    #vehiculo: Vehiculo;
    constructor(fecha: string, cliente: Cliente, vehiculo: Vehiculo) {
        this.#fecha = fecha;
        this.#cliente = cliente;
        this.#vehiculo = vehiculo;
    }
    get informacion(): string {
        return `Fecha: ${this.#fecha}, Cliente: ${this.#cliente.nombre}, Vehiculo: ${this.#vehiculo.informacion}`;
    }
    get fecha(): string {
        return this.#fecha;
    }
    get cliente(): Cliente {
        return this.#cliente;
    }
    get vehiculo(): Vehiculo {
        return this.#vehiculo;
    }
}