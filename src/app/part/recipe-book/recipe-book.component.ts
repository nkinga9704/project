import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { Recept } from 'src/app/Model/recept';
import { map } from 'rxjs';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
  receptek: Recept[] = [];
  kategoriak: string[] = ['Mind', 'Levesek', 'Főételek', 'Tészták', 'Saláták', 'Desszertek', 'Italok'];
  selectedCategory: string = 'Mind';
  keresoSzo = "";
  keresesSzempont: string = 'mind';
  currentPage = 1;
  itemsPerPage = 1;
  


  constructor(private base: BaseService) { }

  ngOnInit(): void {
    this.getAllRecipes();
  }

  getRecipesByCategory(category: string): void {
    this.base.getRecipesByCategory(category).subscribe(adatok => {
      this.receptek = adatok as Recept[]; 
      
      console.log('Betöltött receptek:', this.receptek);
    });
  }

  getAllRecipes(): void {
    this.base.getRecipes().snapshotChanges().pipe(
      map(changes => changes.map(
        c => ({ key: c.payload.key, ...c.payload.val(),stars: this.generateStars(c.payload.val()?.nehezseg) })
      ))
    ).subscribe(adatok => {
      this.receptek = adatok;
      
      
      
    });
  }

  generateStars(difficulty: number | undefined): string {
    if (difficulty !== undefined) {
      const stars = '★'.repeat(difficulty) + '☆'.repeat(5 - difficulty);
      return stars;
    } else {
      return '';
    }
  }
}



