import { Component } from '@angular/core';
import { map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // messages:any

  // constructor (private base:BaseService,
  //              private auth:AuthService){
  //   this.base.getMessages().snapshotChanges().pipe(
  //     map(
  //       (ch)=> ch.map(
  //         (c)=> ({key:c.payload.key, ...c.payload.val()})
  //       )
  //     )
  //   ).subscribe((a)=>this.messages=a)

  //   this.auth.getUsers()
  // }

  // addMessage(){
  //   this.base.addMessage("")
  // }
  constructor(){}
}
