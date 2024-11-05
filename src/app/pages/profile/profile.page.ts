import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonLabel, IonTabs, IonFooter, IonTabButton, IonButtons, IonList, IonIcon, IonTabBar, IonTab } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonList, IonButtons, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, 
    CommonModule, FormsModule, IonLabel, IonTabs, IonFooter, IonTabButton,
     IonIcon, IonTabBar, IonTab, 
     ]
})
export class ProfilePage   {

  constructor() { }

  // ngOnInit() {
  // }

}
