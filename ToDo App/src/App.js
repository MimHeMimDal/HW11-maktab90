import ElementGenerator from "./library/ElementGernerator";
import Header from "./layout/Header/index";
import Main from "./layout/Main/index";
import addModal from "./components/AddModal/index";

function App() {
  return ElementGenerator({
    element: "div",
    child: [Header(), Main(), addModal()],
  });
}

export default App;
