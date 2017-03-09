import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class MoveService {

    private data: any;
    public response: any;
    private url: string = ""; 
    payload : any;

constructor(private http: Http){}

    move(payload: any)
    {
     this.data = {
         
         "payLoad" : payload 
     };   
    

    console.log(this.data);
    console.log(this.url);

    this.http.post(this.url, this.payload).subscribe(response => {
        this.response = payload
        console.log(this.response);
    });


}
}

