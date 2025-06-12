import { Component } from '@angular/core';

@Component({
  selector: 'app-conditions',
  standalone: true,
  imports: [],
  templateUrl: './conditions.component.html',
  styleUrl: './conditions.component.css'
})
export class ConditionsComponent {

  showFirstItemCondition : boolean = false;
  showSecondItemCondition : boolean = false;

  show(number?:number){
    if(number ===1){
      this.showFirstItemCondition =true;
      this.showSecondItemCondition = false;
    }
    else if (number ===2){
      this.showFirstItemCondition =false;
      this.showSecondItemCondition = true;
    }
    else{
      this.showFirstItemCondition =false;
      this.showSecondItemCondition = false;
    }
  }
}
