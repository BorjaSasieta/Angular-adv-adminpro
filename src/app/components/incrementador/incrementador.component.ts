import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {

  @Input() progress = 50;
  @Input() btnClass = 'btn btn-primary';

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor(valor: number): void {
    this.progress += valor;
    if (this.progress < 0) {
      this.progress = 0;
    }
    if (this.progress > 100) {
      this.progress = 100;
    }
    this.valorSalida.emit(this.progress);
  }

  cambiando(event): void {
    if (event <= 0) {
      this.progress = 0;
    }
    else if (event >= 100) {
      this.progress = 100;
    }
    else {
      this.progress = event;
    }
    this.valorSalida.emit(this.progress);
  }

}
