array-append-x
======

What
------
Append an element for every X element in an array.

Installation
------
```
$ npm install --save array-append-x
```

Usage
------
```javascript
var arrayAppendX = require('array-append-x');
var num = [0, 0, 0, 0, 0, 0, 0];

console.log(arrayAppendX(num, 1, 4));

// Output:
[0, 0, 0, 1, 0, 0, 0, 1, 0]
```

Test
------
```
npm test
```

Contribution
------
Contributions are appreciated.

License
------
MIT-licensed. See LICENSE.
