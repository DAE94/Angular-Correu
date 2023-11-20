import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-correu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './correu.component.html',
  styleUrl: './correu.component.css'
})
export class CorreuComponent {

  correu : any;

  constructor() {

    this.correu = {
      titol: "Pràctica Correu Angular8",
      cos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut turpis turpis.",
      emisor: "david.alcaraz@institutvidreres.cat",
      destinatari: "david.alcaraz@institutvidreres.cat"
    }
  }

}
