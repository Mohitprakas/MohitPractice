import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListItemComponent } from './list-item/list-item.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ListItemComponent
  ],
    
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
 // encapsulation:ViewEncapsulation.ShadowDom //used for implementing the css from parants to child 
})
export class AppComponent {
  
  title = 'PracticeProject';

  islogin:boolean=false;
  // islogout:boolean=false

   login(){
    this.islogin=true;
   }
   logout(){
    this.islogin=false
   }


   employee:any=[
    {"id":1,"name":"John Do"},
    {"id":2,"name":"sachin"},
    {"id":3,"name":"mohit"},
    {"id":4,"name":"atul"},
    {"id":5,"name":"manav"},
   ]

  
}
