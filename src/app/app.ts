import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Menu } from './components/menu/menu';
import { Temoignages } from './components/temoignages/temoignages';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, Menu, Temoignages], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('calao-dore');
}
