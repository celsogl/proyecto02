import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Título de Prueba de Angular';
  curso: String = "Angular con Spring 5";
  profesor: String = "José";
}
