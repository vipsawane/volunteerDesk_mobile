import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-mes-evenements',
  templateUrl: './mes-evenements.page.html',
  styleUrls: ['./mes-evenements.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MesEvenementsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
