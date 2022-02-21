import { Component, OnInit } from '@angular/core';
import {AuthserviceService} from '../../services/authservice.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  public email :string;
  public password: string;
  public name : string;

  constructor(private auth : AuthserviceService, 
              private router: Router) { }

  ngOnInit() {
  }
  OnSubmitRegister(){
    this.auth.register(this.email, this.password, this.name).then(
      auth => {
        this.router.navigate(['/tabs/tab2']);
        console.log(auth)
  }).catch(err => console.log(err))
  }
  OnReturn(){
    this.router.navigate(['/tabs/tab2']);
  }
}
