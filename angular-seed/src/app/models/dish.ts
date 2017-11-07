import { Restaurant } from "./restaurant";

export class Dish {
    public id_dish: Number;
    public name: string;
    public price: Number;
    public description: string;
    public restaurant: Restaurant;
    public prep_time: Number;
    public image: string;

    constructor(name: string, price: Number, description: string, prep_time: Number, image: string, restaurant: Restaurant) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.prep_time = prep_time;
        this.restaurant = restaurant;
        this.image = image;
    }
}
