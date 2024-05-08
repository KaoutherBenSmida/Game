import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ResponseModel } from '../Model/ResponseModel';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {


  responseModel!: ResponseModel;
  resultat!: String;
  userMove!: String;
  computerMove!: String;
  play!: boolean;
  computermove!: boolean;
  delay: number = 2000;
  computerMovePng!: boolean;
  urlcomputermove!: String;
  message!: String;
  color!: String;
  @Output() showbackground: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.play = true;
    this.computermove = false;
    this.computerMovePng=false;
    console.log("########### computermove == " + this.computermove);
    /* this.http.get<ResponseModel>('http://localhost:8080/getTest').subscribe((data: ResponseModel) => {
      this.responseModel = data;
      this.responseModel.computerMove = data.computerMove;
      this.responseModel.resultat = data.resultat;
      this.responseModel.userMove = data.userMove;

    });
    */
  }
  move(i: Number) {
    this.playClickSound();
    this.playcomputermovesound();
    this.showbackground.emit(false);
    this.computermove = true;
    this.http.post<ResponseModel>('http://localhost:8086/rockpaperscissors/' + i, "").subscribe((data: ResponseModel) => {
      this.responseModel = data;
      this.responseModel.computerMove = data.computerMove;
      this.responseModel.resultat = data.resultat;
      this.responseModel.userMove = data.userMove;
      setTimeout(() => {
        this.computermove = false;
        this.computerMovePng=true;
        this.urlcomputermove="assets/resources/img/computermove"+data.computerMove+".png";
        this.color=data.resultat;
        switch (this.color) {
          case "GREEN":
             this.message = "You Win !";
             this.playresultSound("win");
              break;
          case "RED":
            this.message = "You Loose !";
            this.playresultSound("loose");
              break;
          default:
            this.message = "It's a Draw !";
            this.playresultSound("draw");
              break;
        }
      }, 2000);
      
    });
    this.play = false;
  }
  playClickSound(): void {
    const audio = new Audio();
    audio.src = 'assets/resources/sounds/click.mp3';
    audio.load();
    audio.play();
  }
  playcomputermovesound(): void {
    const audio = new Audio();
    audio.src = 'assets/resources/sounds/computermovesound.mp3';
    audio.load();
    audio.play();
  }

  playresultSound(sound:String){
    const audio = new Audio();
    audio.src = 'assets/resources/sounds/'+sound+'.mp3';
    audio.load();
    audio.play();
  }
}
