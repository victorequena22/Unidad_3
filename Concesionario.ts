import { keyInSelect, question } from "readline-sync";
import { Entrada } from "./Entrada";
import { Salida } from "./Salida";
import { Vehiculo } from "./Vehiculo";
import { Cliente } from "./Cliente";
import { Proveedor } from "./Proveedor";

export class Concesionario {
    #entradas: Entrada[];
    #salidas: Salida[];
    #vehiculos: Vehiculo[];
    constructor() {
        this.#entradas = [];
        this.#salidas = [];
        this.#vehiculos = [
            new Vehiculo("Toyota", "Corolla", "Toyota Motor Corporation"),
            new Vehiculo("Honda", "Civic", "Honda Motor Co., Ltd."),
            new Vehiculo("Ford", "Focus", "Ford Motor Company"),
            new Vehiculo("Chevrolet", "Malibu", "General Motors"),
            new Vehiculo("Nissan", "Altima", "Nissan Motor Co., Ltd."),
            new Vehiculo("BMW", "3 Series", "Bayerische Motoren Werke"),
            new Vehiculo("Mercedes-Benz", "C-Class", "Mercedes-Benz AG"),
        ];
    }
    principal(): void {
        const menu = ['vender vehiculo', 'comprar vehiculo', 'ver entradas', 'ver salidas', 'salir'];
        do {
            const respuesta = keyInSelect(menu, 'Seleccione una opcion:');
            switch (respuesta) {
                case 0:
                    this.vender();
                    break;
                case 1:
                    this.comprar();
                    break;
                case 2:
                    console.log('Entradas:');
                    for(const entrada of this.#entradas) {
                        console.log(entrada.informacion);
                    };
                    break;
                case 3:
                    console.log('Salidas:');
                    for(const salida of this.#salidas) {
                        console.log(salida.informacion);
                    };
                    break;
                case 4:
                    return;
            }
        } while (true);
    }
    vender(): void {
        const respuesta = keyInSelect(this.#vehiculos.map(v => v.informacion), 'Seleccione un vehiculo para vender:');
        const vehiculoVendido = this.#vehiculos.splice(respuesta, 1)[0];
        this.#vehiculos = this.#vehiculos.filter(v => v.placa !== vehiculoVendido.placa);
        const nombreCliente = question('Ingrese el nombre del cliente: '); // Aquí podrías pedir el nombre al usuario
        const documentoCliente = question('Ingrese el documento del cliente: '); // Aquí podrías pedir el documento al usuario
        const nuevoCliente = new Cliente(documentoCliente, nombreCliente);
        const salida = new Salida((new Date()).toDateString(), nuevoCliente, vehiculoVendido);
        this.#salidas.push(salida);
    }
    comprar(): void {
        const nombreProveedor = question('Ingrese el nombre del proveedor: '); // Aquí podrías pedir el nombre al usuario
        const documentoProveedor = question('Ingrese el documento del proveedor: '); // Aquí podrías pedir el documento al usuario
        const nuevoProveedor = new Proveedor(documentoProveedor, nombreProveedor);
        const entrada = new Entrada((new Date()).toDateString(), nuevoProveedor, nuevoProveedor.vender());
        this.#entradas.push(entrada);
    }
}

const concesionario = new Concesionario();
concesionario.principal();