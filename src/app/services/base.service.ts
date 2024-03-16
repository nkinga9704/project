import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Recept } from '../Model/recept';
import { Observable, map } from 'rxjs';






@Injectable({
  providedIn: 'root'
})
export class BaseService {

  refReceptek: AngularFireList <Recept>
  //receptek: any[] =[]
  receptek: Observable<Recept[]>;
  

  constructor (private db:AngularFireDatabase){
    
    this.refReceptek=this.db.list('/receptek')

    

    this.receptek = this.refReceptek.snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    );

   
    

  }

  getRecipes(){
    return this.refReceptek
  }

  

  updateRecipes(key:any, body:any){
    return this.refReceptek.update(key,body)
  }

  deleteRecipes(key:any){
    return this.refReceptek.remove(key)
  }

  newRecipe(body:Recept) {
    return this.refReceptek.push(body);
  }

   getRecipesByCategory(category: string): Observable<Recept[]> {
     return this.receptek.pipe(
       map(recipes => recipes.filter(recipe => recipe.kategoria === category))
     );
   }

  
  

  

 
}



