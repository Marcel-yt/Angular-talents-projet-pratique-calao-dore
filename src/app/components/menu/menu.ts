import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Dish { 
  id: number; 
  name: string; 
  description: string; 
  price: number; 
  category: 'entree' | 'plat' | 'dessert'; 
  imageUrl?: string;
} 

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
   dishes: Dish[] = [ 
    { id: 1, name: 'Beignets haricots', description: 'Beignets de niébé maison', 
      price: 1500, category: 'entree', imageUrl: '/assets/images/beignets-haricots.jpg' }, 
    { id: 2, name: 'Folong', description: 'Salade traditionnelle au folon', 
      price: 2000, category: 'entree', imageUrl: '/assets/images/folong.jpg' }, 
    { id: 3, name: 'Ndolè aux crevettes', description: 'Spécialité douala emblématique', 
      price: 5500, category: 'plat', imageUrl: '/assets/images/ndole-aux-crevettes.jpg' }, 
    { id: 4, name: 'Poulet DG', description: 'Plantain mûr, légumes croquants', 
      price: 6000, category: 'plat', imageUrl: '/assets/images/poulet-dg.jpg' }, 
    { id: 5, name: 'Eru aux écailles', description: 'Légume forestier, viande fumée', 
      price: 5000, category: 'plat', imageUrl: '/assets/images/eru-aux-ecailles.jpg' }, 
    { id: 6, name: 'Mbongo Tchobi', description: 'Sauce noire aux épices sauvages', 
      price: 5500, category: 'plat', imageUrl: '/assets/images/mbongo-tchobi.jpg' },
        { id: 7, name: 'Pain perdu coco', description: 'Brioche, lait de coco, miel', 
      price: 2500, category: 'dessert', imageUrl: '/assets/images/pain-perdu-coco.jpg' }, 
    { id: 8, name: 'Bananes flambées', description: 'Plantain caramélisé, rhum', 
      price: 2000, category: 'dessert', imageUrl: '/assets/images/bananes-flambees.jpg' }, 
  ];
}