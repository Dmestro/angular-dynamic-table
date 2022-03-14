import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicTableModule } from './dynamic-table/dynamic-table.module';
import { TextCellComponent } from './custom-components/text-cell-component/text-cell-component.component';
import { NumberCellComponent } from './custom-components/number-cell/number-cell.component';
import { BooleanCellComponent } from './custom-components/boolean-cell/boolean-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    TextCellComponent,
    NumberCellComponent,
    BooleanCellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
