# can-ssr-plugin-react

[![Greenkeeper badge](https://badges.greenkeeper.io/canjs/can-ssr-plugin-react.svg)](https://greenkeeper.io/)

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
