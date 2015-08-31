## League of Legends build manager config module
Node module that contains the configuration information used in multiple [League of Legends build manager](https://github.com/renarsvilnis/lol-build-manager) programs for isomorphic JavaScript.

### Installation
```bash
npm install --save https://github.com/renarsvilnis/lol-build-manager-config
```

### Usage
```javascript
// es5
var config = require('lol-build-manager-config');

// es6
import 'config' from 'lol-build-manager-config';

// es6 with direct property access
import {urlProtocol} from 'lol-build-manager-config';
```

### Publishing
```bash
# Converts from es6 to es5
# Use it before commiting
npm run build
```
