import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

import { Users } from '../../shared/models/users.model';

@Injectable()
export class UsersService {

  private users: Users[] = [];

  constructor(private http:HttpClient) { }

  addUsers(newUser){
    return new Observable((observer: Observer<any>)=>{
      this.http.post('http://localhost:8000/api/register',{
        first_name: newUser.firstName,
        last_name: newUser.lastName,
        email: newUser.email,
        password: newUser.password
      }).subscribe((newUser: any)=>{
        let user = new Users(newUser.first_name, newUser.last_name, newUser.email, newUser.password);
        this.users.push(user);
         observer.next(user);
         return observer.complete();
      },()=>{
        alert('You can`t add new user!');
        console.log('Error');
      })
    })
  }

}