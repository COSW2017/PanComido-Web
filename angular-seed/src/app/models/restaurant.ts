import { Order } from "./order";
import { Dish } from "./dish";

export class Restaurant {
    public id_restaurant: Number;
    private name: string;
    private latitude: Number;
    private longitude: Number;
    private like: Number;
    private dislike: Number;
    private love: Number;
    private angry: Number;
    private orders: Order[];
    private comments: Comment[];
    private dishes: Dish[];


    constructor(id_restaurat: Number, name: string, latitude: Number, longitude: Number, like: Number, dislike: Number, love: Number, angry: Number, orders: Order[], comments: Comment[], dishes: Dish[]) {
        this.id_restaurant = id_restaurat;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.like = like;
        this.dislike = dislike;
        this.love = love;
        this.angry = angry;
        this.orders = orders;
        this.comments = comments;
        this.dishes = dishes;

    }
}
