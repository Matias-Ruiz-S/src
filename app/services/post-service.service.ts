import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators'; 
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  //URL DE LA API PROPIA GOES HERE
  url = 'http://jsonplaceholder.typicode.com/posts';
  
  constructor(public http: HttpClient) { }

  getPosts(){
    return new Promise(resolve=>{
      this.http.get(this.url).subscribe(data=>{
        resolve(data);
      },error=>{
        console.log(error);
      });
    });
  }

  httpOptions = {
    headers: new HttpHeaders
    ({
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*'
    })
  }

  createPost(post): Observable<any>{
    return this.http.post(this.url ,post ,this.httpOptions).pipe(retry(3));
  }

}
