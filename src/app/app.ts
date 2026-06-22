import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Menu } from './components/menu/menu';
import { Temoignages } from './components/temoignages/temoignages';
import { Horaires } from './components/horaires/horaires';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, Menu, Temoignages, Horaires], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('calao-dore');
}
