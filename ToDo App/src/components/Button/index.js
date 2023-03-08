import ElementGenerator from "./../../library/ElementGernerator";

function Button({ ...rest }) {
  return ElementGenerator({ element: "button", ...rest });
}

export default Button;
