import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

user: User = new User ()

  constructor(private authService : AuthService,
    private router : Router,
    private route : ActivatedRoute) { }

  ngOnInit(){
    if(environment.token==''){
      
    }
  }

}
