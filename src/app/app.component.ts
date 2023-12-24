import { Component } from '@angular/core';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [HomeComponent, HeaderComponent, FooterComponent]
})
export class AppComponent {
  title = 'AttendanceMS';
}
