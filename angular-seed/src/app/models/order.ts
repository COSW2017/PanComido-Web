import { Restaurant } from "./restaurant";
import { User } from "./user";
import { Dish } from "./dish";
import { Command } from "./command";

export class Order {
    private id_order: Number;
    private date: Date;
    private user_id: User;

    constructor(user_id: User, date: Date) {
        this.user_id = user_id;
        this.date = date; 
    }
}
