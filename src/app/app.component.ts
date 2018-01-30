import { Component } from '@angular/core';
import { HttpClient , HttpParams , HttpHeaders ,HttpErrorResponse } from '@angular/common/http';
import { Http,Response } from '@angular/http';

import { Post } from './post';
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
  // private http:HttpClient;
  posts: Observable<any>;

  data: any;

  constructor(private http: HttpClient){
    console.log('Hello zort');
    this.getContacts();
    this.getPosts();

    // const httpHeaders = new HttpHeaders()
    //   .set("storename", "haungdake60@gmail.com")
    //   .set("apikey", "ufUxKCEK4Gc5b8xxOyz1n88Jjgm7Z938JYlm8VN9Buk=")
    //   .set("apisecret", "NBxaU6HHPACPD/lMm26Hb1xPeCYmkojhMcukeFqdPw=")
    //   .set('Cache-Control', 'no-cache')
    //   .set('Postman-Token', 'b9dcba1b-e045-0814-8a99-386190f7bbe6')
    //   ;

    // const httpParams = new HttpParams()
    //   .set('method','GETPRODUCTS')
    //   .set('format','json')
    //   .set('version','2')
    //   ;

    // this.http.get(
    //   this.root_url 
    //   ,{headers: httpHeaders,params: httpParams,responseType: 'json' } 
    // ).subscribe(
    //   data => {
    //     console.log(data);
    //   },
    //   (err: HttpErrorResponse) => {
    //     if (err.error instanceof Error) {
    //       console.log("Client-side error occured.");
    //     } else {
    //       console.log("Server-side error occured. ");
    //       console.log(err.error);
    //     }
    //   }
    // );

  }

  getPosts(){
    const httpHeaders = new HttpHeaders()
      .set("storename", "haungdake60@gmail.com")
      .set("apikey", "ufUxKCEK4Gc5b8xxOyz1n88Jjgm7Z938JYlm8VN9Buk=")
      .set("apisecret", "NBxaU6HHPACPD/lMm26Hb1xPeCYmkojhMcukeFqdPw=")
      .set('Cache-Control', 'no-cache')
      .set('Postman-Token', '87b3a95b-1b05-905b-cb85-ba1a0807e7d0')
      ;

    const httpParams = new HttpParams()
      .set('method','GETPRODUCTS')
      .set('format','json')
      .set('version','2')
      ;

    return this.http.get(
        this.root_url 
        ,{headers: httpHeaders,params: httpParams,responseType: 'json' } 
    )
    .map((res:Response) => res.json() )
    ;
  }

  getContacts(){
    this.getPosts().subscribe(data => {
      console.log(data);
      this.data = data;
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
      console.log('An error occurred:', err.error.message);
      } else {
      console.log('Backend returned status code: ', err.status);
      console.log('Response body:', err.error);
      }
     });
  }

}
