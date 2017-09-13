import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/services/users.service';

import { Users } from '../../shared/models/users.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
 
})
export class RegisterComponent implements OnInit {

  private acceptTerms: boolean = false;
  
    private newUser: Users = new Users();
  
    constructor(private userService: UsersService) { }
  
  
  
    addUser(newUser){
      this.userService.addUsers(newUser).subscribe();
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
