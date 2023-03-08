import ElementGenerator from "./../../library/ElementGernerator";

function InputContainer({ id, parentClass, labelChild, name, ...rest }) {
  return ElementGenerator({
    element: "div",
    className: parentClass,
    child: [
      ElementGenerator({
        element: "label",
        className: "flex items-center",
        for: id,
        name,
        child: labelChild,
      }),
      ElementGenerator({
        element: "input",
        className: "w-full",
        id,
        name,
        ...rest,
      }),
    ],
  });
}

export default InputContainer;
