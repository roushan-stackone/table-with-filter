import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataRestService {

  serverUrl = `http://localhost:3000`;

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(`${this.serverUrl}/posts`);
  }

  addPost(post: any): Observable<any> {
    return this.http.post(`${this.serverUrl}/posts`, post)
  }

}
