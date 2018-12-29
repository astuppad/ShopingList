import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ShoppingListComponent,
    ShoppingCartComponent
  ],
  declarations: [ShoppingListComponent, ShoppingCartComponent]
})
export class ShoppingModule { }
