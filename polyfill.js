/* Disable minification (remove `.min` from URL path) for more info */

(function(undefined) {
    Object.defineProperty(Array.prototype, "values", { value: Array.prototype[Symbol.iterator], enumerable: !1, writable: !1 });
    var Iterator = function() {
        var e = function() { return this.length = 0, this },
            t = function(e) { if ("function" != typeof e) throw new TypeError(e + " is not a function"); return e },
            _ = function(e, n) {
                if (!(this instanceof _)) return new _(e, n);
                Object.defineProperties(this, { __list__: { writable: !0, value: e }, __context__: { writable: !0, value: n }, __nextIndex__: { writable: !0, value: 0 } }), n && (t(n.on), n.on("_add", this._onAdd.bind(this)), n.on("_delete", this._onDelete.bind(this)), n.on("_clear", this._onClear.bind(this)))
            };
        return Object.defineProperties(_.prototype, Object.assign({ constructor: { value: _, configurable: !0, enumerable: !1, writable: !0 }, _next: { value: function() { var e; if (this.__list__) return this.__redo__ && (e = this.__redo__.shift()) !== undefined ? e : this.__nextIndex__ < this.__list__.length ? this.__nextIndex__++ : void this._unBind() }, configurable: !0, enumerable: !1, writable: !0 }, next: { value: function() { return this._createResult(this._next()) }, configurable: !0, enumerable: !1, writable: !0 }, _createResult: { value: function(e) { return e === undefined ? { done: !0, value: undefined } : { done: !1, value: this._resolve(e) } }, configurable: !0, enumerable: !1, writable: !0 }, _resolve: { value: function(e) { return this.__list__[e] }, configurable: !0, enumerable: !1, writable: !0 }, _unBind: { value: function() { this.__list__ = null, delete this.__redo__, this.__context__ && (this.__context__.off("_add", this._onAdd.bind(this)), this.__context__.off("_delete", this._onDelete.bind(this)), this.__context__.off("_clear", this._onClear.bind(this)), this.__context__ = null) }, configurable: !0, enumerable: !1, writable: !0 }, toString: { value: function() { return "[object Iterator]" }, configurable: !0, enumerable: !1, writable: !0 } }, {
            _onAdd: {
                value: function(e) {
                    if (!(e >= this.__nextIndex__)) {
                        if (++this.__nextIndex__, !this.__redo__) return void Object.defineProperty(this, "__redo__", { value: [e], configurable: !0, enumerable: !1, writable: !1 });
                        this.__redo__.forEach(function(t, _) { t >= e && (this.__redo__[_] = ++t) }, this), this.__redo__.push(e)
                    }
                },
                configurable: !0,
                enumerable: !1,
                writable: !0
            },
            _onDelete: {
                value: function(e) {
                    var t;
                    e >= this.__nextIndex__ || (--this.__nextIndex__, this.__redo__ && (t = this.__redo__.indexOf(e), -1 !== t && this.__redo__.splice(t, 1), this.__redo__.forEach(function(t, _) { t > e && (this.__redo__[_] = --t) }, this)))
                },
                configurable: !0,
                enumerable: !1,
                writable: !0
            },
            _onClear: { value: function() { this.__redo__ && e.call(this.__redo__), this.__nextIndex__ = 0 }, configurable: !0, enumerable: !1, writable: !0 }
        })), Object.defineProperty(_.prototype, Symbol.iterator, { value: function() { return this }, configurable: !0, enumerable: !1, writable: !0 }), Object.defineProperty(_.prototype, Symbol.toStringTag, { value: "Iterator", configurable: !1, enumerable: !1, writable: !0 }), _
    }();
    String.prototype.contains = String.prototype.includes;
    var ArrayIterator = function() {
        var e = function(t, r) {
            if (!(this instanceof e)) return new e(t, r);
            Iterator.call(this, t), r = r ? String.prototype.contains.call(r, "key+value") ? "key+value" : String.prototype.contains.call(r, "key") ? "key" : "value" : "value", Object.defineProperty(this, "__kind__", { value: r, configurable: !1, enumerable: !1, writable: !1 })
        };
        return Object.setPrototypeOf && Object.setPrototypeOf(e, Iterator.prototype), e.prototype = Object.create(Iterator.prototype, { constructor: { value: e, configurable: !0, enumerable: !1, writable: !0 }, _resolve: { value: function(e) { return "value" === this.__kind__ ? this.__list__[e] : "key+value" === this.__kind__ ? [e, this.__list__[e]] : e }, configurable: !0, enumerable: !1, writable: !0 }, toString: { value: function() { return "[object Array Iterator]" }, configurable: !0, enumerable: !1, writable: !0 } }), e
    }();
}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});