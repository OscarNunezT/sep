import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from '../../Service/service.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  idPersona:number=0;
  DatosPersona:Persona=new Persona;


  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.idPersona= Number(localStorage.getItem("idPersona"));
    this.service.getobtenerPersonasByid (this.idPersona).then(result =>{
      this.DatosPersona=result
      console.log(this.DatosPersona);
    })
  }

  Editar(){
    this.service.editarPersonas(this.idPersona,this.DatosPersona).then (result =>{
      alert("se edito correctamente")
      this.router.navigate(["listar"])
    
    })

  }

  

}
