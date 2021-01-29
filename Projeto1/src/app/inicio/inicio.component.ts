import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import {Router} from '@angular/router';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  tema : Tema = new Tema()
postagem : Postagem = new Postagem()
listaTemas : Tema[]
listaPostagens : Postagem[]

user: User = new User()
idUser = environment.id
idTema : number

  constructor(private router: Router , private postageService : PostagemService, private temaService : TemaService, private authService :  AuthService) { }

  ngOnInit() {
    if(environment.token==''){
      alert('Sua sessao expirou, entre novamente')
      this.router.navigate(['/entrar'])

    }
    this.getAllTemas()
    this.getAllPostagens()
  }

  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[])=> {
      this.listaTemas= resp
    })
  }

  findByIdTema(){
this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
  this.tema = resp
})

  }

getAllPostagens(){
  this.postageService.getAllPostagens().subscribe((resp: Postagem[])=>
  {
    this.listaPostagens= resp
  })
}

findByIdUser(){
  this.authService.getByIdUser(this.idUser).subscribe((resp: User)=>{
this.user = resp
  })
}


publicar(){
this.tema.id = this.idTema
this.postagem.tema = this.tema

this.user.id = this.idUser
this.postagem.usuario = this.user

this.postageService.postPostagem(this.postagem).subscribe((resp : Postagem)=>{
  this.postagem = resp
  alert('Postagem realizada com sucesso!!')
  this.postagem = new Postagem()
  this.getAllPostagens()
})
}
}
