import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataServiceInterface } from '../interfaces/data.service.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService implements DataServiceInterface{

  private privateApiUrl = "http://127.0.0.1:5000/";
  private decksPath = "my_decks"
  private cardsPath = "my_cards"
  private editDeckPath = "edit_deck"
  private createDeckPath = "create_deck"
  private getCardPath = "my_card"
  private editCardPath = "edit_card"
  private deleteCardPath = "delete_card"

  private decksPathMock = "../../assets/mocks/myDecksResponse.json"
  private cardsPathMock = "../../assets/mocks/myCardsResponse.json"
  private getCardMock = "../../assets/mocks/card.json"

  constructor(private httpClient: HttpClient) { }

  getDecks(request?: any): Observable<any> {
    
    //return this.httpClient.get<any>(this.privateApiUrl + this.decksPath, {})
    return this.httpClient.get<any>(this.decksPathMock, {})
  }

  createDeck(name: any, description: any) {

    const payload = {
      "name":name,
      "description":description
    }

    return this.httpClient.post<any>(this.createDeckPath, payload)
  }

  editDeck(idDeck?: any, name?: any, description?:any): Observable<any> {

    const payload = {
      "id_deck":idDeck,
      "name":name,
      "description":description
    }

    return this.httpClient.put<any>(this.editDeckPath, payload)
  }



  getCards(idDeck?: any): Observable<any> {
    
    const payload = {
      "id_deck": idDeck
    } 

    return this.httpClient.post<any>(this.privateApiUrl + this.cardsPath, payload)
    //return this.httpClient.get<any>(this.cardsPathMock, {})
  }

  getCardById(idDeck?: any, idCard?: any): Observable<any> {

    const payload = {
      "id_deck": idDeck,
      "id_card": idCard
    }

    return this.httpClient.post<any>(this.privateApiUrl + this.getCardPath, payload)
    //return this.httpClient.get<any>(this.getCardMock, {})
  }

  editCard(card: any): Observable<any> {

    const payload = {
      "id_deck": card.id_deck,
      "id_card": card.id_card,
      "front": card.front,
      "back": card.back
    };

    return this.httpClient.put<any>(this.privateApiUrl + this.editCardPath, payload)

  }

  deleteCard(idDeck?, idCard?): Observable<any> {

    const payload = {
      "id_deck": idDeck,
      "id_card": idCard
    }

    return this.httpClient.post<any>(this.privateApiUrl + this.deleteCardPath, payload)
  }

  
}
