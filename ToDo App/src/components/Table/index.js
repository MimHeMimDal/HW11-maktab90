import ElementGenerator from "../../library/ElementGernerator";
// import RenderTable from "./../../library/RenderTable";
import HandleDelete from "./../../library/HandleDelete";
import HandleEdit from "./../../library/HandleEdit";
import HandleShow from "./../../library/HandelShow";

function Table() {
  const table = ElementGenerator({
    element: "table",
    className: "w-full border",
    onclick: (e) => {
      switch (e.target.closest("button").dataset.action) {
        case "delete":
          HandleDelete(e);
          break;
        case "edit":
          HandleEdit(e);
          break;
        case "show":
          HandleShow(e);
          break;

        default:
          break;
      }
    },
    child: [
      ElementGenerator({
        element: "thead",
        child: ElementGenerator({
          element: "tr",
          className: "border",
          child: [
            ElementGenerator({
              element: "th",
              className: "text-start  py-1 px-2 w-3/12",
              child: "Task Name",
            }),
            ElementGenerator({
              element: "th",
              className: "border w-2/12",
              child: "Priority",
            }),
            ElementGenerator({
              element: "th",
              className: "border w-2/12",
              child: "Status",
            }),
            ElementGenerator({
              element: "th",
              className: "border w-1/12",
              child: "Deadline",
            }),
            ElementGenerator({
              element: "th",
              className: "border w-3/12",
              child: "Actions",
            }),
          ],
        }),
      }),
      ElementGenerator({ element: "thead", id: "tbody", className: "border" }),
    ],
  });
  return table;
}

export default Table;
