"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Item = /** @class */ (function () {
    function Items(_iid, _name, _description, _price) {
        this._id = _iid;
        this._name = _name;
        this._description = _description;
        this._price = _price;
    }
    Object.defineProperty(Items.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    return Items;
}());
exports.default = Item;