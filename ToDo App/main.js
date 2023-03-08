import "./src/styles/index.css";
import App from "./src/App";
import RenderTable from "./src/library/RenderTable";

document.body.appendChild(App());
RenderTable(JSON.parse(localStorage.getItem("state")));
