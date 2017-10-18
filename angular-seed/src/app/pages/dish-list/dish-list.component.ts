import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Dish} from "../../models/dish";
import {User} from "../../models/user";
import {RestaurantService} from "../../services/restaurant.service";
import {UsersService} from "../../services/users.service";
import {AuthService} from "../../common/auth.service";
import {Router} from "@angular/router";
import {OrderService} from "../../services/order.service";
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import { Restaurant } from '../../models/restaurant';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {

    public load: boolean;
    public dishes: Dish[] = [];
    private user: User;
    private restaurant: Restaurant;
    userForm: FormGroup;
    public error: string;

    @ViewChild('fileInput') fileInput: ElementRef;

    constructor(public restaurantService: RestaurantService,
                public usersService: UsersService,
                public authService: AuthService,
                public router: Router,
                public orderService: OrderService,
                public formBuilder: FormBuilder, ) { }

    ngOnInit() {
        this.load = true;
        this.usersService.find(this.authService.email).subscribe(userResponse => {
            this.user = userResponse;
            //obtener el restaurante del que es propietario
            this.restaurantService.getOwner(this.user.user_id).subscribe(restaurantRespose => {
                this.restaurant = restaurantRespose;
                this.restaurantService.getDishes(this.restaurant.id_restaurant).subscribe(restaurantResponse => {
                    this.dishes = restaurantResponse;
                    this.load = false;
                });
            });
        });
        this.userForm = this.formBuilder.group({
            name: new FormControl ('', Validators.required),
            price: new FormControl ('', Validators.compose([Validators.required, Validators.min(1)])),
            description: new FormControl ('', Validators.required),
            prep_time: new FormControl ('', Validators.compose([Validators.required, Validators.min(1)])),
        });
    }

    onSubmit() {
        if(this.userForm.valid){
            this.load = true;
            this.error = null;
            this.restaurantService.addDish(
                this.userForm.get('name').value,
                this.userForm.get('price').value,
                this.userForm.get('description').value,
                this.userForm.get('prep_time').value,
                this.restaurant
            ).subscribe(serverResponse => {
                this.restaurantService.getDishes(this.restaurant.id_restaurant).subscribe(restaurantResponse => {
                    this.dishes = restaurantResponse;
                    this.fileInput.nativeElement.click();
                    this.userForm.reset();
                    this.load = false;
                });
            }, error => {
                this.load = false;
                this.error = (error && error.message ? error.message : '');
            });
        }
    }

    modifyDish(id_command: Number){
        //Parametros que recibe orderDertail
        this.orderService.id_command = id_command;
        //ir a order detail
        this.router.navigate(['dishDetail']);
      }


    deleteDish(id_dish : Number) {
        this.load = true;
        this.error = null;
        this.restaurantService.deleteDish(id_dish, this.restaurant.id_restaurant).subscribe(serverResponse => {
        this.restaurantService.getDishes(this.restaurant.id_restaurant).subscribe(restaurantResponse => {
          this.dishes = restaurantResponse;
          this.load = false;
          }, error => {
            this.load = false;
            console.log(error);
        });
      }, error => {
            this.load = false;
            this.error = (error && error.message ? error.message : '');
      });
    }

}
