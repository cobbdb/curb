var str = require('../curb.js');

describe('curb', function () {
    it('supports empty calls', function () {
        var out;
        expect(function () {
            out = str();
        }).not.toThrow();
        expect(out).toBeUndefined();
    });
    it('supports no args', function () {
        var out = str('abc%s');
        expect(out).toEqual('abc%s');
    });
    it('replaces %s one time', function () {
        var res = str('abc%s', 123);
        expect(res).toEqual('abc123');
    });
    it('replaces many %s tokens', function () {
        var res = str('%s-%s', 321, false);
        expect(res).toEqual('321-false');
    });
});
