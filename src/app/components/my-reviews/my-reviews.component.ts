import { Component, Input, OnInit } from '@angular/core';

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

   


  cards = [
    {
      "back":"card1 back",
      "front":"card1 front"
    },
    {
      "back":"card2 back",
      "front":"card2 front"
    },
    {
      "back":"card3 back",
      "front":"card3 front"
    },
    {
      "back":"card4 back",
      "front":"card4 front"
    },
    {
      "back":"card5 back",
      "front":"card5 front"
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.countCards();
    this.reviewCard()
    
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
  

}