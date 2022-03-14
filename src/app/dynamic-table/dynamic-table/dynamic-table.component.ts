import { Component, Input, OnInit } from '@angular/core';
import { DynamicTableCellConfig, DynamicTableConfig, DynamicTableData } from './dynamic-table.model';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.less']
})
export class DynamicTableComponent implements OnInit {

  @Input() tableConfig!: DynamicTableConfig;
  @Input() tableData!: DynamicTableData;

  constructor() { }

  ngOnInit(): void {
  }

}
