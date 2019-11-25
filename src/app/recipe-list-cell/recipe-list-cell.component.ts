import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-list-cell',
  templateUrl: './recipe-list-cell.component.html',
  styleUrls: ['./recipe-list-cell.component.scss']
})
export class RecipeListCellComponent implements OnInit {
  recipes = [];
  @Input() recipesList: any[];

  constructor() {
  
  }

  addNewRecipe() {
    this.recipes.push({
      name: this.recipeName, image: this.recipeURL, discription: this.recipeDescription, type: this.recipeVag, chef: this.recipeChef
    });
  }

  ngOnInit() {
  }

}
