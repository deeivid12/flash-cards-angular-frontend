import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeckComponent } from './components/deck/deck.component';
import { CardComponent } from './components/card/card.component';
import { MyDecksComponent } from './components/my-decks/my-decks.component';
import { MyCardsComponent } from './components/my-cards/my-cards.component';
import { ReviewComponent } from './components/review/review.component';
import { MyReviewsComponent } from './components/my-reviews/my-reviews.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCardComponent } from './components/edit-card/edit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DeckComponent,
    CardComponent,
    MyDecksComponent,
    MyCardsComponent,
    ReviewComponent,
    MyReviewsComponent,
    EditCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
