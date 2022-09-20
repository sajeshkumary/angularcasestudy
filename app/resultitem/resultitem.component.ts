import { Component, Input, OnInit } from '@angular/core';
import { resultitem } from '../model/resultitem';

@Component({
  selector: 'app-resultitem',
  templateUrl: './resultitem.component.html',
  styleUrls: ['./resultitem.component.css']
})
export class ResultitemComponent implements OnInit {
  
  @Input() resitem:resultitem;
  
  constructor() {
    this.resitem=new resultitem();
   }

  ngOnInit(): void {

  }

}
