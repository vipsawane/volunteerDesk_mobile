import { Routes } from '@angular/router';

export const routes: Routes = [
  
  

  {
    path: '',
    redirectTo: 'acceuil',
    pathMatch: 'full',
  },
  {
    path: 'menu',
    loadComponent: () => import('./pages/menu/menu.page').then( m => m.MenuPage)
  },
  
  {
    path: 'ressource',
    loadComponent: () => import('./pages/ressource/ressource.page').then( m => m.RessourcePage)
  },
  {
    path: 'user-list',
    loadComponent: () => import('./pages/users/user-list/user-list.page').then( m => m.UserListPage)
  },
  {
    path: 'organisation-form1',
    loadComponent: () => import('./pages/organisations/organisation-form1/organisation-form1.page').then( m => m.OrganisationForm1Page)
  },
  {
    path: 'organisation-form2',
    loadComponent: () => import('./pages/organisations/organisation-form2/organisation-form2.page').then( m => m.OrganisationForm2Page)
  },
  {
    path: 'organisation-form3',
    loadComponent: () => import('./pages/organisations/organisation-form3/organisation-form3.page').then( m => m.OrganisationForm3Page)
  },
  {
    path: 'organisation-list',
    loadComponent: () => import('./pages/organisations/organisation-list/organisation-list.page').then( m => m.OrganisationListPage)
  },
  {
    path: 'message',
    loadComponent: () => import('./pages/message/message.page').then( m => m.MessagePage)
  },
  // {
  //   path: 'acceuil',
  //   loadComponent: () => import('./pages/acceuil/acceuil.page').then( m => m.AcceuilPage)
  // },
  {
    path: 'notification',
    loadComponent: () => import('./pages/notification/notification.page').then( m => m.NotificationPage)
  },
  {
    path: 'publication',
    loadComponent: () => import('./pages/publication/publication.page').then( m => m.PublicationPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'accueil',
    loadComponent: () => import('./pages/acceuil/acceuil.page').then( m => m.AcceuilPage)
  },

  {
    path: 'calendrier',
    loadComponent: () => import('./pages/calendrier/calendrier.page').then( m => m.CalendrierPage)
  },
  {
    path: 'connexion',
    loadComponent: () => import('./pages/connexion/connexion.page').then( m => m.ConnexionPage)
  },

];
