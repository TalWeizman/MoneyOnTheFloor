import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Card;

  constructor() {



  }

  ngOnInit() {
  }

}




interface Card {

  title: string;
  text: string;
  img_url: string;
}
