import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  Url='http://localhost:8022/ejemplo01/personas';


  getobtenerPersonas() {
    return this.http.get<Persona[]>(this.Url)
      .toPromise();
  }


  deletePersonas(id:number) {
    return this.http.delete<Persona>(this.Url +'/'+id)
      .toPromise();
  }

  createPersonas(persona:Persona) {
    return this.http.post<Persona>(this.Url,persona)
      .toPromise();
  }

  getobtenerPersonasByid(id:number) {
    return this.http.get<Persona>(this.Url +'/'+id)
      .toPromise();
  }

  editarPersonas(id:number,persona:Persona) {
    return this.http.put<Persona>(this.Url+'/'+id,persona)
      .toPromise();
  }

}
