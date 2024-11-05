import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent, IonItem, IonLabel, IonIcon, IonText, IonFabButton, IonBadge, IonRow, IonCol, IonSearchbar, IonList, IonListHeader, IonCard, IonButtons, IonButton, IonFooter } from '@ionic/angular/standalone';
import { arrowForwardOutline, locateOutline, locationOutline, notificationsOutline, optionsOutline, trash, heart, chatbubbles } from 'ionicons/icons';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { EvenementService } from 'src/app/services/evenement/evenement.service';
import { Evenement } from 'src/app/models/evenement';
import { addIcons } from 'ionicons';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RessourceService } from 'src/app/services/ressource/ressource.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: 'acceuil.page.html',
  styleUrls: ['acceuil.page.scss'],
  standalone: true,
  imports: [IonFooter, IonButton, IonButtons, IonCard, IonListHeader, IonList, IonSearchbar, IonCol, IonRow, IonBadge, IonFabButton, IonText, IonIcon, IonLabel, IonItem, 
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CommonModule
  ],
 
})
export class AcceuilPage implements OnInit {
  evenements: Evenement[] = [];

  constructor(private evenementService: EvenementService, http: HttpClient) {
      addIcons({locateOutline,notificationsOutline,optionsOutline,heart,chatbubbles});
    }

  ngOnInit(): void {
    this.evenementService.getAllEvenement().subscribe(
      (data) => {
        this.evenements = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des événements:', error);
      }
    );
  }
}
