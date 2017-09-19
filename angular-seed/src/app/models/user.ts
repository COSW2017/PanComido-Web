import { Restaurant } from "./restaurant";
import { Order } from "./order";

export class User {
    private email: string;
    private password: string;
    private firstname: string;
    private lastname: string;
    private image: string;
    public restaurant: Restaurant;
    private city: string; 
    private cellphone: string; 
    private orders: Order[]; 
    private friends: User[]; 
    private pendingFriends: User[];

    constructor(email: string, password: string, firstname: string, lastname: string, image: string, cellphone: string, city: string,  restaurant: Restaurant) {
        this.email = email;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.image = image;
        this.cellphone = cellphone;
        this.restaurant = restaurant;  
    }
}
