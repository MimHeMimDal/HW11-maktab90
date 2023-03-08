import ElementGenerator from "./library/ElementGernerator";
import Header from "./layout/Header/index";
import Main from "./layout/Main/index";
import addModal from "./components/AddModal/index";
import Aside from "./components/Aside/index";

function App() {
  return ElementGenerator({
    element: "div",
    child: [Header(), Main(), addModal(), Aside()],
  });
}

export default App;
