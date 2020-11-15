import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-my-cards',
  templateUrl: './my-cards.component.html',
  styleUrls: ['./my-cards.component.scss']
})
export class MyCardsComponent implements OnInit {

  private subscriptions = new Array<Subscription>();
  idDeck: number;
  cards = []

  constructor(private dataService: DataService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idDeck = +this.route.snapshot.paramMap.get('idDeck');
    this.getCards(this.idDeck)
  }

  getCards(idDeck?:number):void {
    this.subscriptions.push(this.dataService.getCards(idDeck).subscribe(
      response =>{
        console.log(response);
        this.cards = response["results"];
    }))
  }

}
