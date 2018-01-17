import { Component } from '@angular/core';

@Component({
  selector: 'litter-box',
  template: `
    <div class="container">
     <h1>Modern recipes for {{month}}/{{day}}/{{year}}</h1>
     <h3>{{subtitle}}</h3>
     <ul [class]="priorityColor(currentRecipe)" (click)="isCooked(currentRecipe)" *ngFor="let currentRecipe of recipes">
       <button (click)="editRecipe(currentRecipe)">Edit!</button>
       <li>{{currentRecipe.title}}</li>
       <li>{{currentRecipe.ingredients}}</li>
       <li>{{currentRecipe.directions}}</li>
     </ul>
     <hr>
      <div *ngIf="selectedRecipe">
        <h3>{{selectedRecipe.directions}}</h3>
        <p>Recipe Cooked? {{selectedRecipe.cooked}}</p>
        <h3>Edit Recipe</h3>
        <label>Enter Recipe Directions:</label>
        <input [(ngModel)]="selectedRecipe.directions">
        <label>Enter Recipe Priority (1-3):</label>
        <br>
        <input type="radio" [(ngModel)]="selectedRecipe.priority" [value]="1">1 (Low Priority)<br>
        <input type="radio" [(ngModel)]="selectedRecipe.priority" [value]="2">2 (Medium Priority)<br>
        <input type="radio" [(ngModel)]="selectedRecipe.priority" [value]="3">3 (High Priority)
        <button (click)="finishedEditing()">Done</button>
      </div>
   </div>
  `
})

export class AppComponent {
  subtitle: string = 'Recipe Box';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  recipes: Recipe[] = [
    new Recipe('Creme Brulee', 'Egg, sugar', 'Whip egg and sugar to custard texture, put in ceramic dish and burn top with torch.', 1),
    new Recipe('Hot Ham Water', 'Ham, Water', 'Boil water, add ham.', 3),
    new Recipe('Breakfast Cereal', 'Cereal, Milk', 'Add cereal and milk to bowl.', 2)
  ];
  selectedRecipe = null;

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }

  isCooked(clickedRecipe: Recipe) {
    if(clickedRecipe.cooked === true) {
      alert("This recipe has been cooked!");
    } else {
      alert("This recipe has not been cooked. Try harder next time!");
    }
  }

  priorityColor(currentRecipe){
    if (currentRecipe.priority === 3){
      return "bg-danger";
    } else if (currentRecipe.priority === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }
}

export class Recipe {
  public cooked: boolean = false;
  constructor(
    public title: string,
    public ingredients: string,
    public directions: string,
    public priority: number,
  ) { }
}
