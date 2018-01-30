import { Component } from '@angular/core';
import { HttpClient , HttpParams , HttpHeaders ,HttpErrorResponse } from '@angular/common/http';
import { Http,Response } from '@angular/http';


import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  readonly root_url = 'http://api.zortout.com/api.aspx';
  // readonly root_url = 'https://jsonplaceholder.typicode.com';
  posts: Observable<any>;

  lists: {};
  
  private httpHeaders = new HttpHeaders()
    // .set('Access-Control-Allow-Origin' , '*')
    // .set('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT')
    // .set('Access-Control-Allow-Headers' , 'Origin, Content-Type, Accept, Authorization, X-Request-With')
    // .set('Access-Control-Allow-Credentials' , 'true')

		.set('Content-Type','application/json')
		.set('Accept', 'application/json')
    .set("storename", "haungdake60@gmail.com")
    .set("apikey", "ufUxKCEK4Gc5b8xxOyz1n88Jjgm7Z938JYlm8VN9Buk=")
    .set("apisecret", "NBxaU6HHPACPD/lMm26Hb1xPeCYmkojhMcukeFqdPw=")
    // .set('Cache-Control', 'no-cache')
    // .set('Postman-Token', 'c9d206b1-a3a7-0c89-ed7c-30769f52db01')
    ;


  constructor(private http: HttpClient){
    console.log('Hello zort');
    this.getPosts();

  }

  getPosts(){

    const httpParams = new HttpParams()
      .set('method','GETPRODUCTS')
      .set('format','json')
      .set('version','2')
      ;

    this.posts = this.http.get(
        this.root_url 
        ,{headers: this.httpHeaders,params: httpParams,responseType: 'json' } 
    );

    this.posts.subscribe(data => {
      console.log(data);
      this.lists = data['list'] ;
    },
    (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('An error occurred:', err.error.message);
        } else {
          console.log('Backend returned status code: ', err.status);
          console.log('Response body:', err.error);
        }
      })
      ;
  }

}

interface list{
  "name": string;
  "description": string;
  "sku": string;
  "sellprice": number;
  "purchaseprice": number;
  "stock": number;
  "availablestock": number;
  "unittext": string;
}
