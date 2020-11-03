import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-my-cards',
  templateUrl: './my-cards.component.html',
  styleUrls: ['./my-cards.component.scss']
})
export class MyCardsComponent implements OnInit {

  private subscriptions = new Array<Subscription>();
  cards = []

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getCards()
  }

  getCards(idDeck?:number):void {
    this.subscriptions.push(this.dataService.getCards().subscribe(
      response =>{
        console.log(response);
        this.cards = response["results"];
    }))
  }

}
