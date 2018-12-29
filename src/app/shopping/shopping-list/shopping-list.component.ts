import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  @Output() public addtocart = new EventEmitter<Item>();
  private shoppinglist: Array<Item>;

  constructor() {
    this.shoppinglist = new Array<Item>();
   }

  ngOnInit() {
    this.shoppinglist.push({Number: 1, Name: 'Speakers', Quantity: 1, Price: 1500} );
    this.shoppinglist.push({Number: 2, Name: 'Watch', Quantity: 1, Price: 5000} );
    this.shoppinglist.push({Number: 3, Name: 'Pen', Quantity: 1, Price: 20} );
    this.shoppinglist.push({Number: 4, Name: 'Helmet', Quantity: 1, Price: 2000} );
    this.shoppinglist.push({Number: 5, Name: 'Microphone', Quantity: 1, Price: 1000} );
  }

  onAdd(id: number) {
    this.addtocart.emit(this.shoppinglist.find(item => item.Number === id));
  }

}
