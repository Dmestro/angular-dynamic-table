import { Component } from '@angular/core';
import { BooleanCellComponent } from './custom-components/boolean-cell/boolean-cell.component';
import { NumberCellComponent } from './custom-components/number-cell/number-cell.component';
import { TextCellComponent } from './custom-components/text-cell-component/text-cell-component.component';
import { DynamicTableConfig, DynamicTableData } from './dynamic-table/dynamic-table/dynamic-table.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  public tableConfig: DynamicTableConfig = {
    headerConfig: null,
    contentConfig: {
      rowConfig: {
        cellConfigs: [
          {
            type: "text",
            component: TextCellComponent
          },
          {
            type: "number",
            component: NumberCellComponent
          },
          {
            type: "boolean",
            component: BooleanCellComponent
          }
        ]
      }
    }
  }

  public tableData: DynamicTableData = [
    ['text1', '11', false],
    ['text2', '22', false],
    ['text3', '33', true],
  
  ]
  
}
