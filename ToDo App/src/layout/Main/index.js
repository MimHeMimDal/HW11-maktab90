import ElementGenerator from "./../../library/ElementGernerator";
import Table from "./../../components/Table/index";


function Main() {
  return ElementGenerator({
    element: "div",
    className: "px-4 py-3",
    child: [Table()],
  });
}

export default Main;
