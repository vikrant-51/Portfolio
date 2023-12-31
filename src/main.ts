
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { HomeModule } from './app/modules/home/home.module';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';


bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot(routes, { useHash: true }), BrowserModule, AppRoutingModule, HomeModule), provideAnimations(), provideToastr({ preventDuplicates: true, }), provideHttpClient()]
})
  .catch(err => console.error(err));
