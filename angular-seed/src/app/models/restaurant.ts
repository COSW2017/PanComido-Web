import { Order } from "./order";
import { Dish } from "./dish";
import { User } from "./user";

export class Restaurant {
    public id_restaurant: Number;
    public user_id: User;
    public name: string;
    public latitude: Number;
    public longitude: Number;
    private likes: Number;
    private dislike: Number;
    private love: Number;
    private angry: Number;
    public image: string;


    constructor(name: string, latitude: Number, longitude: Number, image: string) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.image = image;
        this.likes = 0;
        this.dislike = 0;
        this.love = 0;
        this.angry = 0;

    }
}
