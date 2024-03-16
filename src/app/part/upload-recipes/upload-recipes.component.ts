import { Component } from '@angular/core';
import { map } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';
import { ConfigService } from 'src/app/services/config.service';


@Component({
  selector: 'app-upload-recipes',
  templateUrl: './upload-recipes.component.html',
  styleUrls: ['./upload-recipes.component.css']
})

export class UploadRecipesComponent {

  recipes:any
  columns:any
  newRecipes:any={hozzavalo:[{nev: '', mennyiseg: ''}]}

  kategoriak: string[] = ['Levesek', 'Főételek','Tészták', 'Saláták', 'Desszertek', 'Italok'];
  selectedCategory: string = '';

  selectHard: string=''
  nehezseg:number[] = [1, 2, 3, 4, 5]

  constructor (
    private base:BaseService,
    private config:ConfigService
  ){ 
    
    this.base.getRecipes().snapshotChanges().pipe(
      map( (changes) => changes.map(
        (c)=>({key:c.payload.key, ...c.payload.val()})
      ))
    ).subscribe(adatok=>this.recipes=adatok)

    this.columns=this.config.oszlopokRecept;
   }

  newRecept(){
    this.newRecipes.kategoria = this.selectedCategory;
    this.newRecipes.nehezseg=this.selectHard;
    this.base.newRecipe(this.newRecipes).then(
      ()=> {
        this.newRecipes = {hozzavalo:[{nev: '', mennyiseg: ''}]}
        this.selectedCategory = '';
        alert ('Sikeresen feltöltötte a receptet!')
      }
    ).catch(
      ()=>alert ('Hiba a feltöltésnél')
    )
   }
 
    newIngredient(){
      const index=this.newRecipes.hozzavalo.length;
        this.newRecipes.hozzavalo.push({ nev: '', mennyiseg: '' })
        this.newRecipes.hozzavalo[index].nev = '';
        this.newRecipes.hozzavalo[index].mennyiseg = '';
    }

    getRecipesByCategory(category: string): void {
      console.log('Kiválasztott kategória:', category);
      this.base.getRecipesByCategory(category).subscribe(adatok => {
        this.recipes = adatok;
        
      });
    }

    category() {
      if (this.selectedCategory) {
        this.newRecipes.kategoria = this.selectedCategory;
        this.base.newRecipe(this.newRecipes);
        this.newRecipes = { };
      } else {
        alert("Válassz egy kategóriát!");
      }
    }

    hard(){
      if (this.selectHard) {
        this.newRecipes.nehezseg = this.selectHard;
        this.base.newRecipe(this.newRecipes);
        this.newRecipes = { };
      } else {
        alert("Válassz egy kategóriát!");
      }
    }
}
