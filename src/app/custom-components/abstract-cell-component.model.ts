import { Directive, Input } from "@angular/core";

@Directive({})
export abstract class CellComponent {
    @Input() value: any;
}