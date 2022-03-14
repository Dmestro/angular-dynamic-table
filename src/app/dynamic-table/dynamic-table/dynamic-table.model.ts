import { Type } from "@angular/core";
import { CellComponent } from "src/app/custom-components/abstract-cell-component.model";

export interface DynamicTableCellConfig {
    type: string,
    component: Type<CellComponent>
}

export interface DynamicTableContentConfig {
    rowConfig: {
        cellConfigs: DynamicTableCellConfig[]
    }
}

export interface DynamicTableConfig {
    headerConfig: any;
    contentConfig: DynamicTableContentConfig;
}

export type DynamicTableData = Array<Array<any>>;