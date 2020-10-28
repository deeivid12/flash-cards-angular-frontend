import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit, OnDestroy {

  show: string;
  back: string = "Este es el back";
  front: string = "Este es el front";
  flipped = false;
  evaluate = false;
  indexReview = 0;
  indexEvaluate = 0;
  numCards: number;
  finish = false

  @ViewChild('closeModal') private closeModal: ElementRef;

  //this is just a workaround cause doesn't work onDestroy and onInit (when manually destroy)
  public hideModal() {
    this.ngOnDestroy();
    this.ngOnInit();
    this.closeModal.nativeElement.click();      
  }
  


  cards = [
    {
      "back":"card1 back",
      "front":"card1 front"
    },
    {
      "back":"card2 back",
      "front":"card2 front"
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.countCards();
    this.reviewCard()
    
  }

  ngOnDestroy(): void {
    this.resetReview();
    console.log("onDestroyyyyy")
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
