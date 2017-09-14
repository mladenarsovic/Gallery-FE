import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  public isAuthenticated: boolean;

  constructor(private http: HttpClient,
        private router: Router)
          {
          let token = window.localStorage.getItem('token')
          this.isAuthenticated = !!token;
          }


  login(email: string, password: string){
    return new Observable((observer: Observer<any>) => {
        this.http.post('http://localhost:8000/api/login',{
            email,
            password
        }).subscribe((data: { token: string}) => {
            window.localStorage.setItem('token', data.token);
            this.isAuthenticated = true;
            observer.next(data.token);
            return observer.complete();
        },(err)=>{
            return observer.error(err);
        });
    });
  }

  logout(urlName = 'galleries'){
    window.localStorage.removeItem('token');
    this.isAuthenticated = false;
    this.router.navigateByUrl(urlName);
  }

  getRequestHeaders(){
    let token = window.localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
}
 
public getUsername() {
    return JSON.parse(localStorage.getItem('user'));
}

}
