import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'term-dict-app';
  displayBasic: boolean = false;

  showIntroduction() {
    this.displayBasic = true;
  } 
  
}
