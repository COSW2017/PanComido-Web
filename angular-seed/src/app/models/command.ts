import { Order } from "./order";
import { Dish } from "./dish";

export class Command {
    private id_command: Number;
    public state: Number;
    private creation_date: Date;
    private id_order: Order;
    public dishes: Dish[];

    constructor(idPedido: Number, dishes: Dish[]){
        this.id_command = idPedido;
    }
    
}
