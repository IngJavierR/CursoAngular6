import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-excel',
  templateUrl: './control-excel.component.html',
  styleUrls: ['./control-excel.component.css']
})
export class ControlExcelComponent implements OnInit {

  rowsNum: number = 5;
  selectedElement: any = {};
  constructor() { }

  ngOnInit() {
  }

  onSelected($event) {
    console.log('$event', $event);
    this.selectedElement = $event;
  }

}
