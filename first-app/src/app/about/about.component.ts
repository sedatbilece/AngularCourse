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
  someList : string[] = ["test1","test2","test3","test4","test5"]
}