import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        HomeComponent
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule { }
