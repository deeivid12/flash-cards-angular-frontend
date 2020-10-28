import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-my-decks',
  templateUrl: './my-decks.component.html',
  styleUrls: ['./my-decks.component.scss']
})
export class MyDecksComponent implements OnInit {
  
  private subscriptions = new Array<Subscription>();
  decks = []

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getDecks()
  }

  getDecks():any{
    this.subscriptions.push(this.dataService.getDecks().subscribe(
      response => {
        //console.log(response)
        this.decks = response["results"]
        console.log(this.decks)
        console.log(this.decks[0].name)
    }))
  }

}
