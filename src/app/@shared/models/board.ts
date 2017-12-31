export class Board {   
    id: number; 
    title: String;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
