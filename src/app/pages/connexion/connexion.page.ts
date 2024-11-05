import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports:[ReactiveFormsModule, CommonModule],
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage {
  connexionForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private uService: UserService,
    private router: Router,
    private toastController: ToastController
  ) {
    this.connexionForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  async onSubmit(): Promise<void> {
    if (this.connexionForm.valid) {
      const { email, password } = this.connexionForm.value; // Déstructuration pour plus de clarté
      this.authService.connexion(email, password).subscribe({
        next: async (response: any) => {
          console.log('Connexion réussie:', response);
          await this.router.navigate(['/acceuil']);
        },
        error: async (err) => {
          console.error('Erreur de connexion:', err);
          this.errorMessage = 'Erreur lors de la connexion. Veuillez vérifier vos informations.';
          await this.showToast(this.errorMessage);
        }
      });
    } else {
      this.errorMessage = 'Veuillez remplir correctement le formulaire.';
      await this.showToast(this.errorMessage);
    }
  }

  private async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      color: 'danger',
      position: 'bottom'
    });
    toast.present();
  }
}