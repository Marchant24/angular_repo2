import { Component } from '@angular/core';
import { CardModel } from './models/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  card: CardModel = new CardModel();// instancia
  dataCard: CardModel[]=[

    {
      cardTitle: "Vagabond",
      description: "Made By Inoue GOD",
      bottonText: "view image",
      image: "https://pm1.narvii.com/7559/9d39f02d96878a5bde1b0368cc5baf18a162f17ar1-1057-622v2_hq.jpg"
    },
    {
      cardTitle: "One Punch Man",
      description: "Made By Murata GOD",
      bottonText: "view image",
      image: "https://preview.redd.it/2egv7t22jl171.jpg?width=1568&format=pjpg&auto=webp&s=bf7b5fb494575ede1dd05ad6bb69f3866961cf3a"
    },
    {
      cardTitle: "Berserk",
      description: "Made By Miura Devil",
      bottonText: "view image",
      image: "https://areajugones.sport.es/wp-content/uploads/2021/09/berserk-miura.jpg"
    },
    {
      cardTitle: "Naruto",
      description: "Made By Kishimoto GOD",
      bottonText: "view image",
      image: "https://mangascout.com/wp-content/uploads/2021/08/43.jpg?ezimgfmt=rs:368x274/rscb2/ng:webp/ngcb2"
    },
    {
      cardTitle: "Oyasumi Pum Pum",
      description: "Made By Asano Devil",
      bottonText: "view image",
      image: "https://mangascout.com/wp-content/uploads/2021/08/3-1.jpg?ezimgfmt=ng:webp/ngcb2"
    },
    {
      cardTitle: "Blame 2!",
      description: "Made by Tsutomo GOD ",
      bottonText: "view image",
      image: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/08/fondos-pantalla-full-hd-animales_4.jpg"
    },
    {
      cardTitle: "Blame 2!",
      description: "Made by Tsutomo GOD ",
      bottonText: "view image",
      image: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/08/fondos-pantalla-full-hd-animales_4.jpg"
    }
    
  ]

  addCard(card: CardModel){
         this.dataCard.push(Object.assign({}, card));

  }
  
}
