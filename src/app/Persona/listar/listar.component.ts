import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service'
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  personas: Persona[]=[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getobtenerPersonas().then(result =>{ 
      this.personas=result;
      console.log(this.personas);
    })

}

  borrar(id:number){
    var acept= confirm("Seguro que quiere borrar el usuario?");
    if (acept){
      this.service.deletePersonas(id).then(result =>{});
      window.location.reload();
      alert("se borro")
    }
    
  }

  Editar(id:any){
    this.router.navigate(["edit"])
    localStorage.setItem("idPersona",id)
    
  }
}
