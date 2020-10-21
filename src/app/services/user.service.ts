import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.apiUrl}/users`);
  }

  getById(id: string): Observable<User> {
    return this.httpClient.get<User>(`${environment.apiUrl}/users/${id}`);
  }

  create(user : User) : Observable<User> {
    return this.httpClient.post<User>(`${environment.apiUrl}/users`, user);
  }

  update(user : User) : Observable<User> {
    return this.httpClient.put<User>(`${environment.apiUrl}/users`, user);
  }

  delete(id: string) {
    return this.httpClient.delete(`${environment.apiUrl}/users/${id}`)
  }
}
