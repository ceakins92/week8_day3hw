// Imports ======================================

import Item from './Items';

// Shop Class ===================================

export default class Shop{
    private _items: Item[] = [];
    constructor(
        private _itemA: Item,
        private _itemB: Item,
        private _itemC: Item
    ){
        this._items.push(this._itemA)
        this._items.push(this._itemB)
        this._items.push(this._itemC)
    }
    public get items(): Item[] {
        return this._items;
    }
    public set items(value: Item[]) {
        this._items = value;
    }
    public get itemA(): Item {
        return this._itemA;
    }
    public set itemA(value: Item) {
        this._itemA = value;
    }    
    public get itemB(): Item {
        return this._itemB;
    }
    public set itemB(value: Item) {
        this._itemB = value;
    }
    public get itemC(): Item {
        return this._itemC;
    }
    public set itemC(value: Item) {
        this._itemC = value;
    }
    
}