export class Dish {
    private id_dish: Number;
    public nombre: string;
    private price: Number;
    private description: string;

    constructor(id_dish: Number, nombre: string, price: Number, description: string) {
        this.id_dish = id_dish;
        this.nombre = nombre;
        this.price = price;
        this.description = description;
    }
}
