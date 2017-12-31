import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response } from '@angular/http';
import { Status } from '../models/status';
import { Observable } from 'rxjs/Observable';

const API_URL = environment.apiUrl;

@Injectable()
export class StatusService {
    constructor(private http: Http) { }

    public getStatusList(): Observable<Status[]>{
        return this.http
            .get(API_URL + '/status')
            .map(response => {
            const status = response.json();
            return status.map((c) => new Status(c));
            })
            .catch(this.handleError);
    }

    private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
    }
}