import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';


@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.css']
})
export class FormCardComponent implements OnInit {

  constructor() { }
  card: CardModel = new CardModel();
  @Output() envioCard: EventEmitter<CardModel> = new EventEmitter();
  ngOnInit(): void {
  }
  addCard(){
    console.log(this.card);
    this.envioCard.emit(this.card);
    //this.dataCard.push(this.card);

  }

}
