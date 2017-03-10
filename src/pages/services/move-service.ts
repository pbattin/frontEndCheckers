import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, RequestOptions , Headers} from '@angular/http';
import { HttpClient } from './http-client';
import {Observable} from 'rxjs/Observable';
import {Post} from './post';


@Injectable()

export class MoveService {

    private data: any;
    public response: any;
    private url: string = "http://localhost:8080/movePiece"; 
    payload : any;
    options: any;
    test: any = "1";
    

constructor(private http: Http){
    this.http = http;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
}
    
   move(payload: any)
    {
     this.data = {
         
         "payLoad" : payload 
     };   
    

    console.log(this.data);
    console.log(this.url);
    console.log(payload);

    //this.http.post(this.url,this.test).subscribe(result => this.data = result.json() )
  this.http.post(this.url, this.data).map(this.extractData).subscribe(response => this.test = response)
     console.log(this.test);
    
    

}

private extractData(res:Response) {
    let body = res.json();
    return body || [];
}
}

