import ElementGenerator from "../../library/ElementGernerator";
import Form from "../Form/index";
import InputContainer from "../Input-Container/index";
import Button from "../Button/index";
import RenderTable from "../../library/RenderTable";

function EditModal(item, disabled) {
  return ElementGenerator({
    element: "div",
    id: "edit-modal",
    // hidden: "false",
    className:
      "absolute w-screen h-screen top-0 bg-transparent z-10 text-black",
    child: [
      ElementGenerator({
        element: "div",
        onclick: (e) => {
          e.stopPropagation();
          const editModal = document.getElementById("edit-modal");
          editModal.parentNode.removeChild(editModal);
        },
        className: "absolute w-full h-full bg-slate-500 opacity-50 z-20",
      }),
      Form({
        id: item.id,
        className:
          "flex flex-col justify-between gap-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl z-30 text-black bg-white text-black rounded w-2/5 h-2/3 px-4 py-3",
        child: [
          ElementGenerator({ element: "h3", child: "New Task" }),
          InputContainer({
            id: "editTaskNameInput",
            disabled: disabled || null,
            placeholder: "Task Name",
            type: "text",
            value: item.taskNameInput,
            parentClass: "",
            labelChild: "",
            name: "",
            className: `border w-full px-2 py-1 rounded ${
              disabled ? "text-slate-500" : "text-black"
            }`,
          }),
          ElementGenerator({
            element: "div",
            className: "flex justify-between",
            child: [
              ElementGenerator({
                element: "select",
                disabled: disabled || null,
                className: " text-start w-32",
                name: "Priority",
                child: [
                  ElementGenerator({
                    element: "option",
                    child: item.priority,
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
                disabled: disabled || null,
                className: " text-start w-32",
                name: "Status",
                child: [
                  ElementGenerator({
                    element: "option",
                    child: item.status,
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
                id: "editDateInput",
                disabled: disabled || null,
                type: "date",
                value: item.dateInput,
                parentClass: "",
                labelChild: "",
                name: "",
              }),
            ],
          }),
          ElementGenerator({
            element: "textarea",
            name: "textareaInput",
            value: item.textareaInput,
            disabled: disabled || null,
            className: `h-2/5 border p-2 placeholder:text-xs ${
              disabled ? "text-slate-500" : "text-black"
            }`,
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
                  e.stopPropagation();
                  e.preventDefault();
                  const {
                    editTaskNameInput,
                    Status,
                    Priority,
                    editDateInput,
                    textareaInput,
                  } = e.target.closest("form").elements;
                  editTaskNameInput.value = "";
                  Status.value = "Status";
                  Priority.value = "Priority";
                  textareaInput.value = "";
                  editDateInput.value = "";
                  const editModal = document.getElementById("edit-modal");
                  editModal.parentNode.removeChild(editModal);
                },
              }),
              Button({
                type: "submit",
                disabled: disabled || null,
                className: `border ${
                  disabled ? "bg-slate-400" : "bg-blue-500"
                } text-white px-3 py-1 rounded text-xs`,
                child: "SAVE",
                onclick: (e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  const {
                    editTaskNameInput,
                    Status,
                    Priority,
                    editDateInput,
                    textareaInput,
                  } = e.target.closest("form").elements;
                  //   const tempObj = {
                  //     taskNameInput: taskNameInput.value,
                  //     status: Status.value,
                  //     priority: Priority.value,
                  //     dateInput: dateInput.value,
                  //     textareaInput: textareaInput.value,
                  //     id: item.id,
                  //   };
                  // mainData.push(tempObj);
                  const oldState = JSON.parse(
                    localStorage.getItem("state")
                  ).map((el) => {
                    if (+el.id === +item.id) {
                      el.taskNameInput = editTaskNameInput.value;
                      el.status = Status.value;
                      el.priority = Priority.value;
                      el.dateInput = editDateInput.value;
                      el.textareaInput = textareaInput.value;
                      el.id = item.id;
                      return el;
                    } else {
                      return el;
                    }
                  });
                  localStorage.setItem("state", JSON.stringify([...oldState]));

                  editTaskNameInput.value = "";
                  Status.value = "Status";
                  Priority.value = "Priority";
                  textareaInput.value = "";
                  editDateInput.value = "";
                  const editModal = document.getElementById("edit-modal");
                  editModal.parentNode.removeChild(editModal);
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

export default EditModal;
