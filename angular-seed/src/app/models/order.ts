import { Restaurant } from "./restaurant";
import { User } from "./user";
import { Dish } from "./dish";
import { Command } from "./command";

export class Order {
    private id_order: Number;
    private date: Date;
    private user_id: User;
    private command: Command[];

    constructor(id_order: Number, user_id: User) {
        this.id_order = id_order;
        this.user_id = user_id;
    }

}
