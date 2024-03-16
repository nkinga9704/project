import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Recept } from 'src/app/Model/recept';
import { BaseService } from 'src/app/services/base.service';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-recipes-admin',
  templateUrl: './recipes-admin.component.html',
  styleUrls: ['./recipes-admin.component.css']
})

export class RecipesAdminComponent{

  receptek: any;
  oszlopok: any;
  ujRecept:any={hozzavalo:[{nev: '', mennyiseg: ''}]}
  
  kategoriak: string[] = ['Mind', 'Levesek', 'Főételek','Tészták', 'Saláták', 'Desszertek', 'Italok'];
  selectedCategory: string = 'Mind';

  selectHard: string=''
  nehezseg:number[] = [1, 2, 3, 4, 5]

  keresoSzo=""
  keresesSzempont: string = 'mind';
 
 constructor (
  private base:BaseService,
  private config:ConfigService,
  
 ){

  this.getAllRecipes();
    
  this.oszlopok=this.config.oszlopokRecept;
 }



 updateRecipes(key:any, body:any, showAlert: boolean=true){
  this.base.updateRecipes(key,body).then(
    ()=>{
      if (showAlert){
        alert("Sikeres módosítás!")
      }
      
    }
  ).catch(
    ()=>alert("Hiba a módosításnál")
  )
 }

 deleteRecipes(key:any){
  this.base.deleteRecipes(key).then(
    ()=>
      alert("Sikeres törlés!")
      
    
  ).catch(
    ()=>alert("Hiba a törlésnél")
  )
 }



  saveNewIngredient(recept: any, hozzavalo: any) {
  
   if (!recept.hozzavalo) {
     recept.hozzavalo = [];
   }
  
    recept.hozzavalo.push({ nev: hozzavalo.nev, mennyiseg: hozzavalo.mennyiseg });
    hozzavalo.nev = '';
    hozzavalo.mennyiseg = '';
    this.updateRecipes(recept.key, recept, false);
}


 


  deleteIngredient(recept: any, index: number) {
    recept.hozzavalo.splice(index, 1);
    this.base.updateRecipes(recept.key, recept).then(
      () => alert("Hozzávaló törölve!")
    ).catch(
      () => alert("Hiba a törlésnél")
    )
  }

  // getRecipesByCategory(category: string): void {
  //   console.log('Kiválasztott kategória:', category);
  //   this.base.getRecipesByCategory(category).subscribe(adatok => {
  //     this.receptek = adatok;
      
  //   });
  // }

  getAllRecipes(): void {
    this.base.getRecipes().snapshotChanges().pipe(
      map(changes => changes.map(
        c => ({ key: c.payload.key, ...c.payload.val() })
      ))
    ).subscribe(adatok => this.receptek = adatok);
  }
  
  getRecipesByCategory(category: string): void {
    if (category === 'Mind') {
      this.getAllRecipes(); 
    } else {
      this.base.getRecipesByCategory(category).subscribe(adatok => {
        this.receptek = adatok;
      });
    }
  }

  setKeresesSzempont(szempont: string): void {
    this.keresesSzempont = szempont;
  }

}



  
  


 

