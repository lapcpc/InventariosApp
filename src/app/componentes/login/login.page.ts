import { Component, OnInit } from '@angular/core';
import {AuthserviceService } from "../../services/authservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
  constructor(private authservice: AuthserviceService,
  private  router:Router ) { }
 
  OnSubmitLogin(){
  this.authservice.login(this.email, this.password).then(res=>{
      this.router.navigate(['/tabs/tab2']);
  }).catch(err=>
    alert('los datos son erroneos')
    );

  }
  ngOnInit() {
  }

}
