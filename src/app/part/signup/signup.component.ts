import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  email:string=""
  password:string=""
  password2:string=""

  constructor(private auth:AuthService, 
              private base:BaseService,
              private router:Router) {}
    
 

  googleAuth(){
    this.auth.googleAuth().then(
      ()=>this.router.navigate(['/home'])
    ).catch(
      (e)=>console.log(e)
    )
  }

  // addMessage(){
  //   this.base.addMessage("")
  // }

  signUp(){
    this.auth.signUp(this.email, this.password)
    .then(() => this.auth.sendVerificationEmail())
    .catch((error) => {
      if (error.code === "auth/email-already-in-use" ) {
        alert ("Ez az e-mail cím már regisztrálva van.");
      } else {
        (e:any)=>console.log(e)
      }
    });
      
    
  }

  validUser(){
    return false
  }


}
