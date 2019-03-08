import React from "react";
import ReactDOM from "react-dom";

const template = <p>THURRAY</p>;

class NewSyntax {
  name = "jane";
}

const newSyntax = new NewSyntax();

console.log(newSyntax);

ReactDOM.render(template, document.getElementById("app"));
