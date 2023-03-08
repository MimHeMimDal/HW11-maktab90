import ElementGenerator from "./../../library/ElementGernerator";

function Form({ className, child }) {
  return ElementGenerator({ element: "form", className, child });
}

export default Form;
