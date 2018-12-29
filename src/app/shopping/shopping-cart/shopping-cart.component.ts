import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  private shoppingcart: Array<Item>;
  constructor() {
    this.shoppingcart = new Array<Item>();
  }

  ngOnInit() {
  }

  get total() {
    let sum = 0;
    this.shoppingcart.forEach((item) => {
      sum += item.Price * item.Quantity
    });
    return sum;
  }

  AddtoCart($event) {
    if (this.shoppingcart.find(item => item.Number === $event.Number) == null) {
      this.shoppingcart.push($event);
    } else {
      this.shoppingcart[this.shoppingcart.indexOf($event)].Quantity += 1;
    }
  }
}
