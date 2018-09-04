import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from "@angular/core";
import { range } from "rxjs";

@Component({
    selector: 'excel-axity',
    templateUrl: './excel.component.html',
    styleUrls: ['./excel.component.css']
})
export class ExcelComponent implements OnInit, OnDestroy {
    @Input('num-rows') numRows: number;
    @Output('on-selected') onSelected: EventEmitter<any> = new EventEmitter();
    rows: number;
    contentTable: any[] = [];

    constructor() {
        this.rows = 10;
        console.log('Constructor');
        console.log('numRows', this.numRows);
    }

    ngOnInit(): void {
        console.log('Init');
        console.log('numRows2', this.numRows);
        
        range(0, this.numRows).subscribe(x => {
            this.contentTable.push({
                name: 'Javier',
                age: 10 + x,
                job: 'Axity'
            });
        });
    }

    selectElement(selectedContent) {
        console.log('Click Me!', selectedContent);
        this.onSelected.emit(selectedContent);
    }

    ngOnDestroy(): void {
        console.log('Destroy');
        
    }
}