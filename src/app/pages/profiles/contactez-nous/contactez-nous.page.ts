import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-contactez-nous',
  templateUrl: './contactez-nous.page.html',
  styleUrls: ['./contactez-nous.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ContactezNousPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
