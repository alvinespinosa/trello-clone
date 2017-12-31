import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response } from '@angular/http';
import { Card } from '../models/card';
import { Observable } from 'rxjs/Observable';

const API_URL = environment.apiUrl;

@Injectable()
export class CardService {
    constructor(private http: Http) { }

    public getCardList(): Observable<Card[]>{
        return this.http
            .get(API_URL + '/cards')
            .map(response => {
            const card = response.json();
            return card.map((c) => new Card(c));
            })
            .catch(this.handleError);
    }

    private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
    }
}