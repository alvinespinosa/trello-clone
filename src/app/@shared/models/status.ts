export class Status {   
    id: number; 
    description: String;
    boardId: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
