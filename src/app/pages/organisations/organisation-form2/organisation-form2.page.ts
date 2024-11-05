import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-organisation-form2',
  templateUrl: './organisation-form2.page.html',
  styleUrls: ['./organisation-form2.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class OrganisationForm2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
