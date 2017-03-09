import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the GameBoard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-game-board',
  templateUrl: 'game-board.html'
})
export class GameBoardPage {

  gameState : any = []; 
 

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.gameState = [
      'R',
      'R',
      'R',
      'R',
      'R',
      'R',
      'R',
      'R',
      'R',
      'R',
      'R',
      'R',
      'null',
      'null',
      'null',
      'null',
      'null',
      'null',
      'null',
      'null',
      'W',
      'W',
      'W',
      'W',
      'W',
      'W',
      'W',
      'W',
      'W',
      'W',
      'W',
      'W'   

    ]
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameBoardPage');
  }

}
