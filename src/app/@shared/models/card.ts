import { Status } from '../models/status'

export class Card {
    Id: number;
    boardId: number;      
    description: String;
    status: Status;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
