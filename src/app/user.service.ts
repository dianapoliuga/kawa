import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

interface User {
  id: number;
  uPhoto: string;
  uName: string;
  uBirth: string;
  uNumber: string;
  uBonuses: number;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private loginUrl: string = '/assets/json/clients.json';
  public currentUser: User;
  constructor(private http: HttpClient) { }
  public login(userName: string, password: string): Observable<User> {
    return this.http.get(this.loginUrl).pipe(
      map((users: User[]) => {
        const user = users.find(u=>u.uName===userName && u.uNumber===password);
        this.currentUser = user;
        return user;
      })
    )
  }
}
