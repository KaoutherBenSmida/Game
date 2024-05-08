import { Component, Inject, Input, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { GameComponent } from './game/game.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }

  title = 'GameFront';
  play!: boolean;
  url!: String;
  showButton:boolean = true;
  showbackground:boolean = true;
  showFloatingButtons = false;
  ngOnInit(): void {
    this.play = false;
    this.playSoundTrack();
  }

  getValueFromChild(value: boolean): void {
    
    this.showbackground=value;
    console.log('Valeur reçue du composant enfant : ', value);
  }
  
  getUrl() {
    return "url('assets/resources/img/gif1.gif')";
  }
  affichage(): void {
    this.playClickSound();
    if (!this.play)
      this.play = true;
    else
      this.play = false;
      this.showButton=false;
      
    console.log("########## this.play ==" + this.play);
  }
  playSoundTrack(): void {
    const audio = new Audio();
    audio.src = 'assets/resources/sounds/soundtrack.mp3';
    audio.loop = true;
    audio.load();
    audio.play();
  }

  playClickSound(): void {
    const audio = new Audio();
    audio.src = 'assets/resources/sounds/click.mp3';
    audio.load();
    audio.play();
  }
  
}
