ASS-Serialize
=============

Serialize json to ass format

# install
```bash
npm install --save ass-serialize
```
or 
```bash
yarn add ass-serialize
```

# usage
ECMAScript 6 usage:
```ecmascript 6
import AssSerialize from 'ass-serialize'

let ass = AssSerialize.serialize(json)
```

ECMAScript 5 usage:
```javascript 1.8
var AssSerialize = require('ass-serialize').default

let ass = AssSerialize.serialize(json)
```


# test
```
npm test
```

Thanks to [this article](http://jamesknelson.com/testing-in-es6-with-mocha-and-babel-6/ "testing") to guide me how to 
configure the
 test environment


# publish to npm registry
Thanks to [this answer](https://stackoverflow.com/a/29738448/769900) to help me publish a `ES 6` package. 
```
npm run prepublish
npm publish
```


# Credits
Thanks to [this link](https://daringfireball.net/projects/markdown/syntax) to
 helped me how to write `markdown`
