import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(
    private router : Router ,// router inject edildi
    private activated : ActivatedRoute
  ){
      this.activated.params.subscribe((res)=>{
        console.log(res['params']);
      });

  }

  helloWorld:string = "hello world from ts page"; 

  gotoabout(){
      this.router.navigate(["about"]);
  }
}
