import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { MoveService } from '../services/move-service';
import 'rxjs/add/operator/map';


/*
  Generated class for the Grid page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

 export class position {
       name: string;
       constructor(thisname : string){
        this.name = thisname;
        
       }
   }
export class jsonInterface {
      /* board: {
         "one" : position,
         "2": position,
         "3": position,
         "4": position,
         "5": position,
         "6": position,
         "7": position,
         "8": position,
         "9": position,
         "10": position,
         "11": position,
         "12": position,
         "13": position,
         "14": position,
         "15": position,
         "16": position,
         "17": position,
         "18": position,
         "19": position,
         "20": position,
         "21": position,
         "22": position,
         "23": position,
         "24": position,
         "25": position,
         "26": position,
         "27": position,
         "28": position,
         "29": position,
         "30": position,
         "31": position,
         "32": position
        };*/
      board :{[key:string] : position}
       positionTo: number;
       positionFrom: number;
       blackPieceCount: number;
       whitePieceCount: number;
       whiteWinner: boolean;
       blackWinner: boolean;
}
@Component({
  selector: 'page-grid',
  templateUrl: 'grid.html'
})

export class GridPage {
  board: any[]; 
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public moveService: MoveService) {

   [ this.board = [
      'BlackMan',
      'BlackMan',
      'BlackMan',
      'BlackMan',
      'BlackMan',
      'BlackMan',
      'BlackMan',
      'BlackMan',
      'BlackMan',
      'BlackMan',
      'BlackMan',
      'BlackMan',
      'Empty',
      'Empty',
      'Empty',
      'Empty',
      'Empty',
      'Empty',
      'Empty',
      'Empty',
      'WhiteMan',
      'WhiteMan',
      'WhiteMan',
      'WhiteMan',
      'WhiteMan',
      'WhiteMan',
      'WhiteMan',
      'WhiteMan',
      'WhiteMan',
      'WhiteMan',
      'WhiteMan',
      'WhiteMan',
         

    ]]
  } 


      myFunction(): void {
    var x = document.createElement("IMG");
     x.setAttribute("src", "../../assets/BlackManedChecker.png");
      document.body.appendChild(x);
    }

    

    hello(position: number): any {

      
      
      this.board = this.moveService.response;
    }

  ionViewDidLoad(): any {

    var payload :jsonInterface = new jsonInterface();
    payload.board = {}
    var counter = 0;
    
    this.board.forEach(element => {
     counter++;
      payload.board[counter] = new position(this.board[counter]); 
    });
   //console.log(JSON.stringify(payload));
   
     this.moveService.move(JSON.stringify(payload));
}


  
}



