import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent implements OnInit {

  private subscriptions = [];
  idCard: number;
  card: any;
  name: string;
  description: string;

  constructor(private dataService: DataService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idCard = +this.route.snapshot.paramMap.get('idCard');
    // just to do a test:
    this.name = "test";
    this.description = "test"
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
    this.subscriptions.push(this.dataService.editDeck().subscribe(
      response => {
        this.card = response["results"];
        console.log(this.card)
      }
    ))
  }

}
