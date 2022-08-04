import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PizzaLab';

  menu:MenuItem[] = [
    {
      name: "Hawaiian Pizza",
      price: 13.49,
      category: "Pizza"
    },
    {
      name: "Veggie Pizza",
      price: 11.49,
      category: "Pizza"
    },
    {
      name: "Boneless Wings",
      price: 9.29,
      category: "Wings"
    },
    {
      name: "Traditional Wings",
      price: 9.89,
      category: "Wings"
    },
    {
      name: "BIG Cookie",
      price: 7.99,
      category: "Desserts"
    },
    {
      name: "Fried Oreos",
      price: 8.99,
      category: "Desserts"
    },
  ]

  GetByCategory(cat:string): MenuItem[] {
    let result: MenuItem[] = []

    this.menu.forEach((m:MenuItem) => {
      if (m.category === cat) {
        result.push(m)
      }
    }); return result;
  
  } 
  

}
