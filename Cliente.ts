

export class Cliente {
    #documento: string;
    #nombre: string;
    constructor(documento: string, nombre: string) {
        this.#documento = documento;
        this.#nombre = nombre;
    }

    get documento(): string {
        return this.#documento;
    }

    get nombre(): string {
        return this.#nombre;
    }

    set nombre(nombre: string) {
        this.#nombre = nombre;
    }
}