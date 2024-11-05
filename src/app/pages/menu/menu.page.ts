import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonTab, IonTabBar, IonIcon, IonTabButton, IonFooter, IonTabs, IonLabel, IonFabButton } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { addIcons } from 'ionicons';
import { bookOutline, chatbubblesOutline, personOutline, searchOutline, homeOutline, add } from 'ionicons/icons';

@Component({ 
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [IonFabButton, IonLabel, IonTabs, IonFooter, IonTabButton, IonIcon, IonTabBar, IonTab, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule]
})
export class MenuPage  implements OnInit{

  constructor() {
      addIcons({homeOutline,bookOutline,add,chatbubblesOutline,personOutline,searchOutline}); }

  ngOnInit() {
    addIcons({
      personOutline,
      bookOutline,
      searchOutline,
      chatbubblesOutline
    });
  }

}
