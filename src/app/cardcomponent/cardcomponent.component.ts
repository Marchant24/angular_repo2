import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-cardcomponent',
  templateUrl: './cardcomponent.component.html',
  styleUrls: ['./cardcomponent.component.css']
})
export class CardcomponentComponent implements OnInit {

  @Input()cardTitle: string=""
  @Input()description: string=""
  @Input()bottonText: string=""
  @Input()image: string=""


  constructor() { }

  ngOnInit(): void {

    
  }

}
