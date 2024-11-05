import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-politique-privee',
  templateUrl: './politique-privee.page.html',
  styleUrls: ['./politique-privee.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PolitiquePriveePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
