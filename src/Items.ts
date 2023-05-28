export default class Items {
    
    constructor(
    private _iid: string,
    private _name: string,
    private _description: string,
    private _price: number
    ){}
    
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get iid(): string {
        return this._iid;
    }
    public set iid(value: string) {
        this._iid = value;
    }
}