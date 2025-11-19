import { question } from "readline-sync";
import { Vehiculo } from "./Vehiculo";
export class Proveedor {
    #rif: string;
    #nombre: string;
    constructor(rif: string, nombre: string) {
        this.#rif = rif;
        this.#nombre = nombre;
    }

    get rif(): string {
        return this.#rif;
    }

    set rif(rif: string) {
        this.#rif = rif;
    }
    get nombre(): string {
        return this.#nombre;
    }

    set nombre(nombre: string) {
        this.#nombre = nombre;
    }
    vender(){
        const marca = question('Ingrese la marca del vehiculo: ');
        const modelo = question('Ingrese el modelo del vehiculo: ');
        const fabricante = question('Ingrese el fabricante del vehiculo: ');
        const vehiculoVendido = new Vehiculo(marca, modelo, fabricante);
        return vehiculoVendido;
    }
}