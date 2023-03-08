import ElementGenerator from "../../library/ElementGernerator";
import Form from "../Form/index";
import InputContainer from "../Input-Container/index";
import Button from "../Button/index";
import RenderTable from "../../library/RenderTable";

function addModal(type) {
  return ElementGenerator({
    element: "div",
    id: "add-modal",
    hidden: "true",
    className:
      "absolute w-screen h-screen top-0 bg-transparent z-10 text-black",
    child: [
      ElementGenerator({
        element: "div",
        onclick: (e) => {
          e.stopPropagation();
          document.getElementById("add-modal").hidden =
            !document.getElementById("add-modal").hidden;
        },
        className: "absolute w-full h-full bg-slate-500 opacity-50 z-20",
      }),
      Form({
        className:
          "flex flex-col justify-between gap-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl z-30 text-black bg-white text-black rounded w-2/5 h-2/3 px-4 py-3",
        child: [
          ElementGenerator({ element: "h3", child: "New Task" }),
          InputContainer({
            id: "taskNameInput",
            placeholder: "Task Name",
            type: "text",
            parentClass: "",
            labelChild: "",
            name: "",
            className: "border w-full px-2 py-1 rounded ",
          }),
          ElementGenerator({
            element: "div",
            className: "flex justify-between",
            child: [
              ElementGenerator({
                element: "select",
                className: " text-start w-32",
                name: "Priority",
                child: [
                  ElementGenerator({
                    element: "option",
                    child: "Priority",
                    name: "Priority",
                    value: "Priority",
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
              ElementGenerator({
                element: "select",
                className: " text-start w-32",
                name: "Status",
                child: [
                  ElementGenerator({
                    element: "option",
                    child: "Status",
                    name: "Status",
                    value: "Status",
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

              InputContainer({
                id: "dateInput",
                type: "date",
                parentClass: "",
                labelChild: "",
                name: "",
              }),
            ],
          }),
          ElementGenerator({
            element: "textarea",
            name: "textareaInput",
            className: "h-2/5 border p-2 placeholder:text-xs",
            placeholder: "Details (Optional)",
          }),
          ElementGenerator({
            element: "div",
            className: "flex justify-between",
            child: [
              Button({
                type: "submit",
                className: "border text-blue-500 px-3 py-1 rounded text-xs",
                child: "CANCEL",
                onclick: (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log(e.target.closest("form").elements);
                  const { taskNameInput } = e.target.closest("form").elements;
                  taskNameInput.value = "";
                  document.getElementById("add-modal").hidden =
                    !document.getElementById("add-modal").hidden;
                },
              }),
              Button({
                type: "submit",
                className:
                  "border bg-blue-500 text-white px-3 py-1 rounded text-xs",
                child: "SAVE",
                onclick: (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  const {
                    taskNameInput,
                    Status,
                    Priority,
                    dateInput,
                    textareaInput,
                  } = e.target.closest("form").elements;
                  const tempObj = {
                    taskNameInput: taskNameInput.value,
                    status: Status.value,
                    priority: Priority.value,
                    dateInput: dateInput.value,
                    textareaInput: textareaInput.value,
                    id: Date.now(),
                  };
                  // mainData.push(tempObj);
                  const oldState = JSON.parse(localStorage.getItem("state"));
                  localStorage.setItem(
                    "state",
                    JSON.stringify([...oldState, tempObj])
                  );

                  taskNameInput.value = "";
                  Status.value = "Status";
                  Priority.value = "Priority";
                  textareaInput.value = "";
                  dateInput.value = "";
                  document.getElementById("add-modal").hidden =
                    !document.getElementById("add-modal").hidden;
                  RenderTable(JSON.parse(localStorage.getItem("state")));
                },
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

export default addModal;
