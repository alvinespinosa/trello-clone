import { Injectable } from "@angular/core";
import { Board } from "../models/board";
import { environment } from '../../../environments/environment';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class BoardService {
    constructor(private http: Http) {}

    public getBoardList(): Observable<Board[]> {   
        return this.http
        .get(API_URL + '/boards')
        .map(response => {
            
            const board = response.json();
            return board.map((b) => new Board(b))
        })
        .catch(this.handleError);
    }

    public getBoardById(boardId: number): Observable<Board>{
        return this.http
        .get(API_URL + '/boards/' + boardId)
        .map(response => {
          return new Board(response.json());
        })
        .catch(this.handleError);
    }

    public createBoard(board: Board): Observable<Board>{
        return this.http
        .post(API_URL + '/boards', board)
        .map(response => {
          return new Board(response.json());
        })
        .catch(this.handleError);
     }

    private handleError (error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }

}