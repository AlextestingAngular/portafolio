import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {
  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor( private http: HttpClient) {
  this.cargarInfo();
  this.cargarEquipo();
}
private cargarInfo(){
  this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;

});
}
private cargarEquipo(){
  this.http.get('https://angular-html-f904b.firebaseio.com/equipo.json')
    .subscribe( (resp: any[]) => {
      this.equipo = resp;
});
}
}
