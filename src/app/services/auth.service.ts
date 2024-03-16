import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth'
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url="https://us-central1-projekt-feladat.cloudfunctions.net/api"
  user:any={};
  

  constructor(private afAuth:AngularFireAuth,
              private router:Router,
              private http:HttpClient) { }

  getUsers(){   
    console.log("Felhasználók(user)", this.user)
    if (this.user) {
      let headers = new HttpHeaders().set('Authorization', this.user.token)
      return this.http.get(this.url+'users', {headers})  
      }return null}
              

  googleAuth(){
    return this.afAuth.signInWithPopup(new GoogleAuthProvider()) //ha ez nem működik akkor helyette a következő sor legyen
    //return this.afAuth.signInWithRedirect(new GoogleAuthProvider())
  }

  signUp(email:string, password:string){
    return this.afAuth.createUserWithEmailAndPassword(email, password)
  }

  signIn(email:string, password:string){
    return this.afAuth.signInWithEmailAndPassword(email, password)
  }

  signOut(){
    return this.afAuth.signOut()
  }

  getLoggedUser(){
    return this.afAuth.authState
  }

  sendVerificationEmail(){
    this.afAuth.currentUser.then(
      (user)=> user?.sendEmailVerification()
    ).then(
      ()=>this.router.navigate(['verifyemail'])
    ).catch(
      (e)=>console.log(e)
    )
  }

  forgotPassword(email:string){
    return this.afAuth.sendPasswordResetEmail(email)
  }

  }
