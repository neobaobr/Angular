import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
    if(environment.token==''){
      alert('Sua sessao expirou, entre novamente')
      this.router.navigate(['/entrar'])

    }
  }

}
