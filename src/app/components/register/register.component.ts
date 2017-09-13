import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/services/users.service';
import { Router } from '@angular/router';

import { Users } from '../../shared/models/users.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
 
})
export class RegisterComponent implements OnInit {

  private acceptTerms: boolean = false;
  
    private newUser: Users = new Users();
  
    constructor(private userService: UsersService,
                private router: Router ) { }
  
  
  
    addUser(newUser){
      this.userService.addUsers(newUser).subscribe();
      this.router.navigateByUrl('/');
    }
  
    checked(){
      if (this.acceptTerms){
        this.acceptTerms = false;
      }else 
      this.acceptTerms = true;
    }

  ngOnInit() {
  }

}
