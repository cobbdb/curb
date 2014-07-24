var ld = require('lodash.values');
module.exports = function () {
    var args = ld(arguments);
    var str = args.shift();
    args.forEach(function (pivot) {
        str = str.replace(/%s/, pivot);
    });
    return str;
};
