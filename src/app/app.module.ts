import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeListCellComponent } from './recipe-list-cell/recipe-list-cell.component';
import { HighlightDirective } from './highlight-directive';

@NgModule({
  declarations: [
    AppComponent,
    AddRecipeComponent,
    RecipeListCellComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
