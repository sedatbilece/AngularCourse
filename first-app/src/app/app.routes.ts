import { Routes } from '@angular/router';
import { YeniComponent } from './yeni/yeni.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';

export const routes: Routes = [
    {
        path:"",// default component
        component:LayoutsComponent,
        children: [
            {
                path:"page1",
                component:Page1Component
            },
            {
                path:"page2",
                component:Page2Component
            },
            {
                path:"page3",
                component:Page3Component
            },
        ]
    },
    {
        path:"yeni",
        component:YeniComponent
    },
    {
        path:"about",
        component:AboutComponent
    },
    {
        path:"contact/:params",
        component:ContactComponent
    },
    {
        path:"login",
        component:LoginComponent
    },

];
