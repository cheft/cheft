var C, Cheft, toString, types;

C = Cheft = {version: '0.0.1'}, toString = Object.prototype.toString,
types = ['Function', 'Object', 'String', 'Array', 'Number', 'Boolean', 'Date', 'RegExp', 'Undefined', 'Null'];

fn = function(item) {
    return C["is" + item] = function(obj) {
        return toString.call(obj) === ("[object " + item + "]");
    };
};
for (i = 0, len = types.length; i < len; i++) {
    item = types[i];
    fn(item);
}

C.extend = function() {
    var j, key, len1, mixin, mixins, target, value;
    target = arguments[0], mixins = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    if (!target) {
      return target;
    }
    for (j = 0, len1 = mixins.length; j < len1; j++) {
        mixin = mixins[j];
        for (key in mixin) {
            value = mixin[key];
            target[key] = value;
        }
    }
    return target;
};

C.isServer = function() {
    return typeof window !== 'object';
}

C.isClient = function() {
    return typeof window === 'object';
}

module.exports = C;