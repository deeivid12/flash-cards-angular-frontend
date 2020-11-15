import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent implements OnInit {

  private subscriptions = new Array<Subscription>();
  idDeck: number;
  idCard: number;
  card: any;
  
  editForm = new FormGroup({
    front: new FormControl('', Validators.required),
    back: new FormControl('', Validators.required),
  });

  

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) { }

  ngOnInit(): void {
    this.idDeck = +this.route.snapshot.paramMap.get('idDeck');
    this.idCard = +this.route.snapshot.paramMap.get('idCard');
    this.subscriptions.push(this.dataService.getCardById(this.idDeck, this.idCard).subscribe(cardResponse => {
      this.card = cardResponse["results"];
      this.editForm.setValue({
        front: this.card.front,
        back: this.card.back})
    }))    
  }

  getCard():any{
    /*
    this.subscriptions.push(this.dataService.getCard().subscribe(
      response => {
        //console.log(response)
        this.card = response["results"]
        console.log(this.card)
        console.log(this.card[0].name)
    })) */
  }

  editCard():any {
    this.card.front = this.editForm.value.front;
    this.card.back = this.editForm.value.back;
    console.log("esto contiene la card!!", this.card);
    this.subscriptions.push(this.dataService.editCard(this.card).subscribe(
      response => {
        this.router.navigate(['my_cards/'+this.idDeck])
      }
    ))
  }

  onSubmit() {
    // send card data with editCard() microservice
    console.log(this.editForm.value);
    this.editCard();
    
  }

  goBack() {
    this.location.back();
  }

}
