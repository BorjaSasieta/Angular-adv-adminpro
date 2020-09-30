import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css' ]
})
export class ProgressComponent {

  progress1 = 15;
  progress2 = 40;

  getPorcentaje1(): string {
    return `${this.progress1}%`;
  }

  getPorcentaje2(): string {
    return `${this.progress2}%`;
  }

}
