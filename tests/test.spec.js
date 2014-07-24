describe('curb', function () {
    var str = require('../curb.js');
    it('supports empty calls', function () {
        expect(function () {
            str();
        }).not.toThrow();
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
