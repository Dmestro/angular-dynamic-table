import { Component, OnInit } from '@angular/core';
import { CellComponent } from '../abstract-cell-component.model';

@Component({
  selector: 'app-text-cell-component',
  templateUrl: './text-cell-component.component.html',
  styleUrls: ['./text-cell-component.component.less']
})
export class TextCellComponent extends CellComponent implements OnInit {

  constructor() {
    super();
   }

  ngOnInit(): void {
  }

}
