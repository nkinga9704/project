import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  email:string=""
  password:string=""

  constructor(
    private auth:AuthService, 
    private router:Router
  ){}


  googleAuth(){
    this.auth.googleAuth().then(
      ()=>this.router.navigate(['/home'])
    ).catch(
      (e)=>console.log(e)
    )
    }

  signIn(){
    this.auth.signIn(this.email, this.password)
    .then(()=> {
      this.router.navigate(['/home']);
      
    })
    .catch((error) => {
      if (error.code === "auth/invalid-login-credentials" || "auth/invalid-email" ) {
        alert ("Hibás felhasználónév vagy jelszó. Kérjük ellenőrizze, hogy rendelkezik-e regisztrációval. Amennyiben elfelejtette jelszavát, igényeljen újat.");
        this.email = "";
        this.password = "";
      } else {
        (e:any)=>console.log(e)
      }
    });
  }

  validUser(){
    return false
  }
}
