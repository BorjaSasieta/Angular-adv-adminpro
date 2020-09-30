import { Component, Input } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title = 'sin título';
  @Input() labels: Label[] = ['LABAEL1', 'LABAEL2', 'LABAEL3'];
  @Input() data: MultiDataSet = [[350, 450, 100]];
  @Input() colors: Color[] = [ {backgroundColor: ['#6857E6', '#009FEE', '#F02059'] } ];
}
