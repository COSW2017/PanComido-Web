import { Restaurant } from "./restaurant";
import { Order } from "./order";

export class User {
    public id : number;
    private email: string;
    private password: string;
    public firstname: string;
    private lastname: string;
    private city: string;
    private image: string;
    private cellphone: string
    public orders: Order[];
    public friends: User[];
    public pendingFriends: User[];

    constructor(email: string, password: string, firstname: string, lastname: string, image: string, city: string, cellphone: string) {
        this.email = email;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.image = image;
        this.city = city;
        this.cellphone = cellphone;
    }

}
