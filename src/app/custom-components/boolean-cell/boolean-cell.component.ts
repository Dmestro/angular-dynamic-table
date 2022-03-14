import { Component, OnInit } from '@angular/core';
import { CellComponent } from '../abstract-cell-component.model';

@Component({
  selector: 'app-boolean-cell',
  templateUrl: './boolean-cell.component.html',
  styleUrls: ['./boolean-cell.component.less']
})
export class BooleanCellComponent extends CellComponent implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}
