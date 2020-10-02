import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const promesa = new Promise( (resolve, reject) => {
      if (true) {
        resolve('Hola');
      } else {
        reject('salio mal');
      }
    });
    promesa.then( (mensaje: string) => console.log(mensaje))
    .catch( (error: string) => console.warn('salio un error', error));
    console.log('fin del init');
    this.getUsuarios().then( usuario => {
      console.log(usuario);
    });
  }

  getUsuarios(): Promise<Response> {
    return new Promise( resolve => {
      fetch('https://reqres.in/api/users').then( resp => resp.json()).then(body => resolve(body.data));
    });
  }
}
