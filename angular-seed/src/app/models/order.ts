import { Restaurant } from "./restaurant";
import { User } from "./user";
import { Dish } from "./dish";

export class Order {
    private id: Number;
    private restaurants: Restaurant[];
    private users: User[];
    public dishes: Dish[];
    public state: Number;

    constructor(id: Number, restaurants: Restaurant[], users: User[], dishes: Dish[], state: Number) {
        this.id = id;
        this.restaurants = restaurants;
        this.users = users;
        this.dishes = dishes;
        this.state = state;
    }

}
