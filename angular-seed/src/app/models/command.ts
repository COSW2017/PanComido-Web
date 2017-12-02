import { Order } from "./order";
import { Dish } from "./dish";

export class Command {
    public id_command: Number;
    public state: Number;
    public creation_date: Date;
    private id_order: Order;
    public dishes: Dish[];

    constructor(idPedido: Number, dishes: Dish[]){
        this.id_command = idPedido;
    }

    getCreationDate(): Date{
        return this.creation_date;
    }

    setCreationDate(date: Date){
        this.creation_date = date;
    }
    
    
}
