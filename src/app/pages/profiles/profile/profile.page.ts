import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonLabel, IonTabs, IonFooter, IonTabButton, IonButtons, IonList, IonIcon, IonTabBar, IonTab, IonButton, IonAvatar } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';
import { EditProfilePage } from '../edit-profile/edit-profile.page';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonAvatar, IonButton, IonList, IonButtons, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, 
    CommonModule, FormsModule, IonLabel, IonTabs, IonFooter, IonTabButton,
     IonIcon, IonTabBar, IonTab, 
     ]
})
export class ProfilePage implements OnInit  {


  profile: User | null = null;


  constructor(private router: Router) { }
  ngOnInit() : void{
    console.log("");

  }

openLogout(){
  this.router.navigate(['/deconnexion']);
}

openEditProfile(){
  this.router.navigate(['/edit-profile']);
}

openNotification(){
  this.router.navigate(['/notification']);
}

openLangue(){
  this.router.navigate(['/langue']);
}

openSecurity(){
  this.router.navigate(['/security']);
}

openTheme(){
  this.router.navigate(['/theme']);
}

openEvents(){
  this.router.navigate(['/mes-evenements']);


}

openHelp(){
  this.router.navigate(['/aide-support']);
}

openContact(){
  this.router.navigate(['/contactez-nous']);
}

openPrivacy(){
  this.router.navigate(['/politique-privee']);
}
}