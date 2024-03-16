// A receptek feltöltéséhez szükséges adatok tárolása
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  oszlopokRecept=[
    "Hozzávalók",
    "Hozzávaló neve",
    "Mennyiség",
    "Kép url címe",
    "Recept leírása",
    "Recept neve",
    "Kategória",
    "Elkészítési idő",
    "Adag",
    "Nehézség"
  ]

    constructor() { }

  getRecipesColumn(){
    return this.oszlopokRecept
  }
}
