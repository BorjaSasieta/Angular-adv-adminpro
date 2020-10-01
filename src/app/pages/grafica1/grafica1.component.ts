import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html'
})
export class Grafica1Component {

  labels1 = ['Pan', 'Refrescos', 'Tacos'];
  labels2 = ['Consolas', 'TV\'s', 'Juegos'];
  labels3 = ['cartas', 'pegatinas', 'figuras'];
  labels4 = ['novia fea', 'amigo tóxico', 'padre maltratador'];

  data1 = [[150, 25, 200]];
  data2 = [[300, 500, 2000]];
  data3 = [[35, 54, 61]];
  data4 = [[1 , 4, 1]];

}
