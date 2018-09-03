import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
    selector: 'excel-axity',
    templateUrl: './excel.component.html',
    styleUrls: ['./excel.component.css']
})
export class ExcelComponent implements OnInit, OnDestroy {
    
    constructor() {
        console.log('Constructor');
    }

    ngOnInit(): void {
        console.log('Init');
    }

    ngOnDestroy(): void {
        console.log('Destroy');
        
    }
}