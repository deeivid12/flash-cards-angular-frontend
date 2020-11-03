import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-my-reviews',
  templateUrl: './my-reviews.component.html',
  styleUrls: ['./my-reviews.component.scss']
})
export class MyReviewsComponent implements OnInit{

  show: string;
  back: string = "Este es el back";
  front: string = "Este es el front";
  flipped = false;
  evaluate = false;
  indexReview = 0;
  indexEvaluate = 0;
  numCards: number;
  finish = false

  private subscriptions = Array<Subscription>()

  idDeck: number;
  cards = []

  constructor(private dataService: DataService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idDeck = +this.route.snapshot.paramMap.get('idDeck');
    console.log("este es el idDeck", this.idDeck);
    this.getCards()
    //this.countCards();
    //this.reviewCard()
    
  }


  flipCard(): void {
    if (!this.flipped){
      this.show = this.cards[this.indexReview].back;
      this.flipped = true;
      this.evaluate = true
    } else {
      this.show = this.cards[this.indexReview].front;
      this.flipped = false
    }
  }

  reviewCard(): void {
    
    this.show = this.cards[this.indexReview].front;
    
  }

  evaluateCard(): void {

    //llamo servicio para evaluar la card
    this.indexEvaluate += 1;
    this.indexReview += 1;
    this.show = "";
    this.flipped = false;
    this.evaluate = false;
    if(this.indexReview >= this.numCards){
      this.finish = true;
      console.log("Finisshhhhh");
    } else this.reviewCard()

    /*
    if(this.index < this.numCards){
      this.index += 1;
      console.log("Sumo 1")}
    if(this.index <= this.numCards){
      this.show = "";
      this.flipped = false;
      this.evaluate = false;
      console.log("restablezco todo y veo nueva card")
      this.reviewCard();
    
    }
    if(this.index == this.numCards) this.finish = true*/
    }
    

  countCards(): void {
    this.numCards = this.cards.length
    console.log("cantidad de cards:", this.numCards)
  }

  resetReview(): void {
    this.flipped = false;
    this.evaluate = false;
    this.indexReview = 0;
    this.indexEvaluate = 0;
    this.numCards = 0;
    this.finish = false
  }

  getCards(idDeck?:number): void {
    this.subscriptions.push(this.dataService.getCards().subscribe(
      response => {
        this.cards = response["results"];
        this.countCards();
        this.reviewCard()
      }
    ))
  }
  

}