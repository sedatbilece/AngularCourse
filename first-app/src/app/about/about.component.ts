import { Component } from "@angular/core";

@Component({
standalone:true,
selector:"app-about",
templateUrl:"./about.component.html",
styleUrl:"./about.component.css"
})

export class AboutComponent{
  currency = '$';
  title = "test project";
}