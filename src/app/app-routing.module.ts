import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCardsComponent } from './components/my-cards/my-cards.component';
import { MyDecksComponent } from './components/my-decks/my-decks.component';
import { MyReviewsComponent } from './components/my-reviews/my-reviews.component';
import { ReviewComponent } from './components/review/review.component';

const routes: Routes = [
  {
    path: '',
    component: MyDecksComponent 
  },
  {
    path: 'my_cards',
    component: MyCardsComponent 
  },
  {
    path: 'my_decks',
    component: MyDecksComponent 
  },
  {
    path: 'review',
    component: MyReviewsComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
