import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

coll=true
user: any=null;


constructor (private auth:AuthService){
  this.auth.getLoggedUser().subscribe(
    (u)=>{
      this.user=u;
      console.log("User: ", this.user)
    }
  )
}

signOut(){
  this.auth.signOut()
}

}
