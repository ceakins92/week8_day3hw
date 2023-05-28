"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shop = /** @class */ (function () {
    function Shop(_itemA, _itemB, _itemC) {
        this._items = [];
        this._itemA = _itemA;
        this._items.push(this._itemA);
        this._itemB = _itemB;
        this._items.push(this._itemB);
        this._itemC = _itemC;
        this._items.push(this._itemC);        
    }

    Object.defineProperty(Shop.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            this._items = value;
        },
        enumerable: false,
        configurable: true
    });

    Object.defineProperty(Shop.prototype, "itemA", {
        get: function () {
            return this._itemA;
        },
        set: function (value) {
            this._itemA = value;
        },
        enumerable: false,
        configurable: true
    });

    Object.defineProperty(Shop.prototype, "itemB", {
        get: function () {
            return this._itemB;
        },
        set: function (value) {
            this._itemB = value;
        },
        enumerable: false,
        configurable: true
    });
    
    Object.defineProperty(Shop.prototype, "itemC", {
        get: function () {
            return this._itemC;
        },
        set: function (value) {
            this._itemC = value;
        },
        enumerable: false,
        configurable: true
    });
    return Shop;
}());
exports.default = Shop;