import { Component, OnInit } from '@angular/core';
import { CellComponent } from '../abstract-cell-component.model';

@Component({
  selector: 'app-number-cell',
  templateUrl: './number-cell.component.html',
  styleUrls: ['./number-cell.component.less']
})
export class NumberCellComponent extends CellComponent implements OnInit {

  constructor() {
    super();
   }

  ngOnInit(): void {
  }

}
