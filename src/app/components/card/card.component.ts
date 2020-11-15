import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  show: string;

  @Input()
  cardData: any;

  private subscriptions = new Array<Subscription>()

  constructor(private router:Router,
              private dataService: DataService) { }

  ngOnInit(): void {
  }

  onClick() {
    if(confirm("Are you sure to delete ")) {
      this.subscriptions.push(this.dataService.deleteCard(this.cardData.id_deck, this.cardData.id_card).subscribe(
        response => {
          console.log(response);
          //this.router.navigate(['my_cards'+this.cardData.id_deck])
        }))
      
    }
  }

}
