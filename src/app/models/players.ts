export class Players {
    "id": number;
    "first_name": string;
    "last_name": string;
    "position": string;
    "height_feet": any;
    "height_inches": any;
    "weight_pounds": any;
    "team": {
        "id": number;
        "abbreviation": string;
        "city": string;
        "conference": string;
        "division": string;
        "full_name": string;
        "name": string
    }

    constructor(object: Partial<Players>) {
        Object.assign(this, object);
    }

};