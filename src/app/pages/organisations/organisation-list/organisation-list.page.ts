import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-organisation-list',
  templateUrl: './organisation-list.page.html',
  styleUrls: ['./organisation-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class OrganisationListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
