# curb [![NPM version](https://badge.fury.io/js/curb.svg)](http://badge.fury.io/js/curb)

Inline string templating for Node.

    $ npm install curb

-------------
## Quickly render a string inline
Curb is intended for very quick and simple inline string renders and only uses `%s` as a delimiter.

    var str = require('curb');
    str('Hello %s!', 'World'); //=> Hello World!
    str('$%s.%s', 3, 50); //=> $3.50

---------
* See: https://www.npmjs.org/package/curb
* See: http://github.com/cobbdb/curb
* License: MIT
