import { Observable } from 'rxjs';

export interface DataServiceInterface {

    getDecks(request: any): Observable<any>;

    editDeck(request: any): Observable<any>;
    
    getCards(request: any): Observable<any>;
}
