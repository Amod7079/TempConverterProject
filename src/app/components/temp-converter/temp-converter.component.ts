import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-converter',
  templateUrl: './temp-converter.component.html',
  styleUrls: ['./temp-converter.component.css']
})
export class TempConverterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  valueInF:number= 0;
  valueInC:number =0

}
