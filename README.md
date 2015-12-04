# can-ssr-plugin-react

A plugin for can-ssr that makes it possible to mount to can-ssr's virtual DOM.

## Install

```js
npm install can-ssr-plugin-react --save
```

## Use

```js
var ssr = require("ssr");

var render = ssr({}, {
	plugins: [
		"react"
	]
});

render("/cart").then( ...
```

## License

MIT
