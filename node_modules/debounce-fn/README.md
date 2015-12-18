## debounce-fn

Return a debounced version of the given function

## Install

```bash
$ npm install debounce-fn
```

## Usage

```js
var debounce = require('debounce-fn')
var yo = debounce(printYo, 250) // debounce for 250ms

yo()
yo()
yo()
setTimeout(yo, 300)

// first two calls will be debounced, and will give two outputs:
// "yo"
// "yo"

function printYo () {
  console.log('yo')
}
```
