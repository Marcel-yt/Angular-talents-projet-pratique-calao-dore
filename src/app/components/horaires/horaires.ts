import { Component } from '@angular/core';

interface Horaire { 
  jour: string; 
  ouverture: string; 
  fermeture: string; 
  ferme: boolean; 
} 

@Component({
  selector: 'app-horaires',
  imports: [],
  templateUrl: './horaires.html',
  styleUrl: './horaires.css',
})
export class Horaires {
   horaires: Horaire[] = [ 
    { jour: 'Lundi',    ouverture: '11h00', fermeture: '22h00', ferme: false }, 
    { jour: 'Mardi',    ouverture: '11h00', fermeture: '22h00', ferme: false }, 
    { jour: 'Mercredi', ouverture: '11h00', fermeture: '22h00', ferme: false }, 
    { jour: 'Jeudi',    ouverture: '11h00', fermeture: '22h00', ferme: false }, 
    { jour: 'Vendredi', ouverture: '11h00', fermeture: '23h00', ferme: false }, 
    { jour: 'Samedi',   ouverture: '11h00', fermeture: '23h00', ferme: false }, 
    { jour: 'Dimanche', ouverture: '',      fermeture: '',      ferme: true  } 
  ]; 
  
  // Helper : vrai jour courant en français 
  joursFR = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 
             'Jeudi', 'Vendredi', 'Samedi']; 
  
  get jourActuel(): string { 
    return this.joursFR[new Date().getDay()]; 
  }
}
