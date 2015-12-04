var path = require("path");
var ssr = require("can-ssr");
var assert = require("assert");

describe("Rendering an asynchronous app", function(){
  before(function(){
    this.render = ssr({
      config: __dirname + "/tests/users/package.json!npm"
    }, {
		plugins: [
			"react"
		]
	});
  });

  it("basics works", function(done){
    this.render("/").then(function(result){
		assert(/Matthew/.test(result.html), "Includes the users");
    }).then(done, done);
  });
});
