var copy = require("recursive-copy");

function root(pth){
	return __dirname + "/../" + pth;
}

function nm(pth){
	return root("node_modules/" + pth);
}

function copySelf(dest){
	function toDest(pth){
		return dest + "/node_modules/can-ssr-plugin-react/" + pth;
	}

	copy(root("package.json"), toDest("package.json"));
	copy(root("dom.js"), toDest("dom.js"));
	copy(nm("can"), toDest("node_modules/can"));
	copy(nm("jquery"), toDest("node_modules/jquery"));
}

copy(nm("react"), root("test/tests/users/node_modules/react"));
copy(nm("react-dom"), root("test/tests/users/node_modules/react-dom"));
copySelf(root("test/tests/users"));
