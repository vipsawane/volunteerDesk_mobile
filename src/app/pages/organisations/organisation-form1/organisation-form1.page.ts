import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-organisation-form1',
  templateUrl: './organisation-form1.page.html',
  styleUrls: ['./organisation-form1.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class OrganisationForm1Page   {

  constructor() { }

  // ngOnInit() {
  // }

}
