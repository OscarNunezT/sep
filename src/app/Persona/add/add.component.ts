import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import {ServiceService} from 'src/app/Service/service.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  datosPersona:Persona=new Persona;

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  addPersona() {
    this.service.createPersonas(this.datosPersona).then(result =>{
      alert("Se creo la persona exitosamente")
      this.router.navigate(["listar"])
    });

  }

}
