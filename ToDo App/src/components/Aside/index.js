import ElementGenerator from "./../../library/ElementGernerator";
import Button from "./../Button/index";
import RenderTable from "./../../library/RenderTable";
function Aside() {
  return ElementGenerator({
    element: "div",
    id: "asideContainer",
    hidden: "true",
    className:
      "absolute top-0 right-0 z-10 transition h-screen w-screen bg-tranparent",
    child: [
      ElementGenerator({
        element: "div",
        className: "absolute z-20 top-0 h-full w-full bg-slate-600 opacity-50",
        onclick: () => {
          document.getElementById("asideContainer").hidden =
            !document.getElementById("asideContainer").hidden;
        },
      }),
      ElementGenerator({
        element: "div",
        className:
          "absolute duration-1000 z-30 top-0 right-0 h-full w-1/4 bg-white px-4 py-3 flex flex-col gap-3",
        child: [
          ElementGenerator({
            element: "div",
            className: "flex justify-between",
            child: [
              ElementGenerator({
                element: "div",
                child: "Filters",
                className: "font-bold",
              }),
              Button({
                child: [
                  ElementGenerator({ element: "ion-icon", name: "close" }),
                ],
                className: "flex items-center",
                onclick: () => {
                  document.getElementById("asideContainer").hidden =
                    !document.getElementById("asideContainer").hidden;
                },
              }),
            ],
          }),
          ElementGenerator({
            element: "div",
            className: "flex flex-col gap-2",
            child: [
              ElementGenerator({
                element: "div",
                child: "Priority:",
                className: "text-sm",
              }),
              ElementGenerator({
                element: "select",
                onchange: (e) => {
                  if (e.target.value !== "All") {
                    RenderTable(
                      JSON.parse(localStorage.getItem("state")).filter(
                        (item) => item.priority === e.target.value
                      )
                    );
                  } else {
                    RenderTable(JSON.parse(localStorage.getItem("state")));
                  }
                },
                className: " text-start w-full border px-2 py-1",
                name: "Priority",
                child: [
                  ElementGenerator({
                    element: "option",
                    child: "All",
                    name: "All",
                    value: "All",
                  }),
                  ElementGenerator({
                    element: "option",
                    child: "Low",
                    name: "Low",
                    value: "Low",
                  }),
                  ElementGenerator({
                    element: "option",
                    child: "Medium",
                    name: "Medium",
                    value: "Medium",
                  }),
                  ElementGenerator({
                    element: "option",
                    child: "High",
                    name: "High",
                    value: "High",
                  }),
                ],
              }),
            ],
          }),
          ElementGenerator({
            element: "div",
            className: "flex flex-col gap-2",
            child: [
              ElementGenerator({
                element: "div",
                child: "Status:",
                className: "text-sm",
              }),
              ElementGenerator({
                element: "select",
                onchange: (e) => {
                  if (e.target.value !== "All") {
                    RenderTable(
                      JSON.parse(localStorage.getItem("state")).filter(
                        (item) => item.status === e.target.value
                      )
                    );
                  } else {
                    RenderTable(JSON.parse(localStorage.getItem("state")));
                  }
                },
                className: " text-start w-full border px-2 py-1",
                name: "Status",
                child: [
                  ElementGenerator({
                    element: "option",
                    child: "All",
                    name: "All",
                    value: "All",
                  }),
                  ElementGenerator({
                    element: "option",
                    child: "ToDo",
                    name: "ToDo",
                    value: "ToDo",
                  }),
                  ElementGenerator({
                    element: "option",
                    child: "Doing",
                    name: "Doing",
                    value: "Doing",
                  }),
                  ElementGenerator({
                    element: "option",
                    child: "Done",
                    name: "Done",
                    value: "Done",
                  }),
                ],
              }),
            ],
          }),
          ElementGenerator({
            element: "div",
            className: "flex flex-col gap-2",
            child: [
              ElementGenerator({
                element: "div",
                child: "Deadline:",
                className: "text-sm",
              }),
              ElementGenerator({
                element: "select",
                className: " text-start w-full border px-2 py-1",
                name: "Deadline",
                child: [
                  ElementGenerator({
                    element: "option",
                    child: "All",
                    name: "All",
                    value: "All",
                  }),
                  ElementGenerator({
                    element: "option",
                    child: "ToDo",
                    name: "ToDo",
                    value: "ToDo",
                  }),
                  ElementGenerator({
                    element: "option",
                    child: "Doing",
                    name: "Doing",
                    value: "Doing",
                  }),
                  ElementGenerator({
                    element: "option",
                    child: "Done",
                    name: "Done",
                    value: "Done",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

export default Aside;
