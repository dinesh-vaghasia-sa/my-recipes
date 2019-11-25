import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  @Output() addNewRecipeToEmit = new EventEmitter<Recipe>();

  public recipe: Recipe;
  name: string;
  chef: string;
  image: string;
  type: string;
  description: string;

  constructor() { }

  ngOnInit() {
  }

  addRecipe() {
    this.addNewRecipeToEmit.emit({
      name: this.name,
      chef: this.chef,
      image: this.image,
      type: this.type,
      description: this.description
    });
    this.name = '';
    this.chef = '';
    this.image = '';
    this.type = '';
    this.description  = '';
  }

}
