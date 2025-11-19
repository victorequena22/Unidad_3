

export class Vehiculo {
    #placa: string;
    #marca: string;
    #modelo: string;
    #fabricante: string;
    constructor( marca: string, modelo: string, fabricante: string) {
        this.#placa = `${Math.random().toString(36).substring(2, 8).toUpperCase()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
        this.#marca = marca;
        this.#modelo = modelo;
        this.#fabricante = fabricante;
    }
    get informacion(): string {
        return `Placa: ${this.#placa}, Marca: ${this.#marca}, Modelo: ${this.#modelo}, Fabricante: ${this.#fabricante}`;
    }
    get placa(): string {
        return this.#placa;
    }

    get marca(): string {
        return this.#marca;
    }

    get modelo(): string {
        return this.#modelo;
    }

    get fabricante(): string {
        return this.#fabricante;
    }

}