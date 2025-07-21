import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from "./contact/contact.component";
import { ConditionsComponent } from './conditions/conditions.component';
import { LayoutsComponent } from './layouts/layouts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, AboutComponent, ContactComponent,ConditionsComponent,LayoutsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-app';
}
