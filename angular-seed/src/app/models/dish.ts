export class Dish {
    private id_dish: Number;
    public name: string;
    private price: Number;
    private description: string;

    constructor(id_dish: Number, name: string, price: Number, description: string) {
        this.id_dish = id_dish;
        this.name = name;
        this.price = price;
        this.description = description;
    }
}
