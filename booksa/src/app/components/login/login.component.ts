import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public datos = {userEmail:"", passwd:""}

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  //VERIFICAR LOS USAURIOS DE LA BASE DE DATOS 

  async  verificar(){
    console.log(this.datos.userEmail," ", this.datos.passwd);
    
  }

}
