import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-organisation-form3',
  templateUrl: './organisation-form3.page.html',
  styleUrls: ['./organisation-form3.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class OrganisationForm3Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
