import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import { Observable } from 'rxjs';
//import { retry, catchError } from 'rxjs/operators'; 

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

  //Observable
  /*
  getPosts(): Observable<any>{
    return this.http.get(this.url).pipe(retry(3));
  }
  */
}
