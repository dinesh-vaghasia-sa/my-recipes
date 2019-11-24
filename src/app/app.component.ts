import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-recipes';
  // myRecipe = true;
  recipes = [];
 public recipeName = '';
 public recipeURL = '';
 public recipeDescription = '';
 public recipeVag = '';
 public recipeChef = '';
constructor() {
  this.recipes = [
      {
        name: 'Burger',
        chef: 'Ranveer Brar',
        image: 'http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg',
        type: 'nv',
        // tslint:disable-next-line:max-line-length
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magni maxime ipsa minima? Minima veniam repudiandae nesciunt quas eius provident quasi dicta ipsa, dignissimos inventore tenetur ad odit excepturi nam!'
      },
      {
        name: 'Italian Pasta',
        chef: 'JM',
        image: 'https://mariettasquaremarket.com/msm/wp-content/uploads/2018/12/Pita-Mediterranean-5.jpg',
        type: 'vage',
        // tslint:disable-next-line:max-line-length
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magni maxime ipsa minima? Minima veniam repudiandae nesciunt quas eius provident quasi dicta ipsa, dignissimos inventore tenetur ad odit excepturi nam!'
      },
      {
        name: 'Chicken Maggie',
        chef: 'Nisha Madhulika',
        image: 'http://eatbook.sg/wp-content/uploads/2018/06/Century-Square-Food-Two-Hana.jpg',
        type: 'nv',
        // tslint:disable-next-line:max-line-length
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magni maxime ipsa minima? Minima veniam repudiandae nesciunt quas eius provident quasi dicta ipsa, dignissimos inventore tenetur ad odit excepturi nam!'
      },
      {
        name: 'Veg. Pulav',
        chef: 'Tarla Dalal',
        image: 'https://media-cdn.tripadvisor.com/media/photo-p/0e/75/7b/5d/photo3jpg.jpg',
        type: 'vage',
        // tslint:disable-next-line:max-line-length
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magni maxime ipsa minima? Minima veniam repudiandae nesciunt quas eius provident quasi dicta ipsa, dignissimos inventore tenetur ad odit excepturi nam!'
      },
      {
        name: 'Italian Pasta',
        chef: 'Dinesh',
        image: 'https://mariettasquaremarket.com/msm/wp-content/uploads/2018/12/Pita-Mediterranean-5.jpg',
        type: 'vage',
        // tslint:disable-next-line:max-line-length
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magni maxime ipsa minima? Minima veniam repudiandae nesciunt quas eius provident quasi dicta ipsa, dignissimos inventore tenetur ad odit excepturi nam!'
      },
      {
        name: 'Chicken Maggie',
        chef: 'Twara',
        image: 'http://eatbook.sg/wp-content/uploads/2018/06/Century-Square-Food-Two-Hana.jpg',
        type: 'nv',
        // tslint:disable-next-line:max-line-length
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magni maxime ipsa minima? Minima veniam repudiandae nesciunt quas eius provident quasi dicta ipsa, dignissimos inventore tenetur ad odit excepturi nam!'
      },
    ];
  }

  addRecipe(f) {
    // console.log(this.recipeName, this.recipeURL, this.recipeDescription, this.recipeVag, this.recipeChef);
    this.recipes.push({
      name: this.recipeName, image: this.recipeURL, discription: this.recipeDescription, type: this.recipeVag, chef: this.recipeChef
    });
    f.reset();
  }
}
