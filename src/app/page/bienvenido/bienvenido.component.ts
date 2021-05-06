import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../servicio/usuario.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {
  token:any;
  public githubProfile:any;

  constructor(private router: Router, private perfGitHub: UsuarioService) { this.token = ''; }

  ngOnInit(): void {
    this.myProfileGitHub();
  }
  public myProfileGitHub(){
    this.perfGitHub.getProfileGitHub().subscribe((data)=>{
      this.githubProfile=data;
    });
  }

}
