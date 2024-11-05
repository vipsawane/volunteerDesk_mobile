import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonFooter } from '@ionic/angular/standalone';
import { MenuPage } from "./pages/menu/menu.page";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonFooter, IonApp, IonRouterOutlet, MenuPage],
})
export class AppComponent {
 
}
