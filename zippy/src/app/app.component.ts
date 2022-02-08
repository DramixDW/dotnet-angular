import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zippy';

  showInfo(expanded: boolean) {
    console.log('expanded', expanded);
    console.log('l\'état du zippya été changé');
  }
}
