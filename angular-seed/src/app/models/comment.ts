import { User } from "./user";

export class Comment {
    private comment: String;
    private user: User;
    private date: Date;

    constructor(comment: String, user: User, date: Date){
        this.comment = comment;
        this.user = user;
        this.date = date;
    }
}
