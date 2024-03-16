export class Recept {
    key?:string | null;
    nev?: string;
    hozzavalo?: { nev: string, mennyiseg: string }[];
    kep_url?: string;
    leiras?: string;
    kategoria?:string;
    elkeszitesiIdo?:number;
    adag?:number;
    nehezseg?:number
}

