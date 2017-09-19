import { Restaurant } from "./restaurant";

export class User {
    private email: string;
    private password: string;
    private firstname: string;
    private lastname: string;
    private username: string;
    private image: string;
    public restaurant: Restaurant;

    constructor(email: string, password: string, firstname: string, lastname: string, image: string, username: string) {
        this.email = email;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.image = image;
        this.username = username;
    }
}
