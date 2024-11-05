import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonList, IonItem, IonButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ressource } from 'src/app/models/ressource';
import { RessourceService } from 'src/app/services/ressource/ressource.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.page.html',
  styleUrls: ['./ressource.page.scss'],
  standalone: true,
  imports: [IonLabel, IonIcon, IonButton, IonItem, IonList, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})

export class RessourcePage implements OnInit {
  ressource!: Ressource[];

  constructor(
    private ressourceService: RessourceService, httpClient:HttpClient
  ) { }

  ngOnInit(): void {
    this.loadRessources();
  }

  loadRessources() {
    this.ressourceService.getAllRessource().subscribe(
      (data: any) => {
        this.ressource = data;
      },
      (error: any) => {
        console.log('Erreur lors du chargement des ressources : ', error);
      }
    );
  }

  
}
