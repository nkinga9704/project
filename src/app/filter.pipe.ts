import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tomb: any[], keresoSzo: string, keresesSzempont: string): any {
    if (!keresoSzo) return tomb;

    return tomb.filter((e: any) => {
      const lowerCase= keresoSzo.toLowerCase();

      if (keresesSzempont === 'nev') {
        return e.nev.toLowerCase().includes(lowerCase);
      } else if (keresesSzempont === 'hozzavalo') {
        // Keresés a hozzávalókban is
        return e.hozzavalo.some((hozzavalo: any) => hozzavalo.nev.toLowerCase().includes(lowerCase));
      } else {
        // Keresés mindkét szempontban
        return (
          e.nev.toLowerCase().includes(lowerCase) ||
          e.hozzavalo.some((hozzavalo: any) => hozzavalo.nev.toLowerCase().includes(lowerCase))
        );
      }
    });
  }
}
