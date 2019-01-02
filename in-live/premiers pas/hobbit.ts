export class Hobbit {
    private _name: string;

    constructor(name:string) {
        this._name = name;
    }

    set name(value: string) {
        this._name = value;
    }

    get name(): string {
        return this._name;
    }
}