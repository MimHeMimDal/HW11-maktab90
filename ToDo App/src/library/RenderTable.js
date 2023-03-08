import Button from "./../components/Button/index";
import ElementGenerator from "./ElementGernerator";

function RenderTable(data) {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";

  if (data) {
   data.map((item) => {
      const tr = ElementGenerator({ element: "tr" });
      const deleteBtn = Button({
        className: "flex items-center rounded p-1 bg-red-600",
        child: ElementGenerator({
          element: "ion-icon",
          name: "trash",
          className: "text-white",
        }),
      });
      deleteBtn.dataset.action = "delete";
      const editBtn = Button({
        className: "flex items-center rounded p-1 bg-blue-600",
        child: ElementGenerator({
          element: "ion-icon",
          name: "pencil",
          className: "text-white",
        }),
      });
      editBtn.dataset.action = "edit";
      const showBtn = Button({
        className: "flex items-center rounded p-1 bg-gray-500",
        child: ElementGenerator({
          element: "ion-icon",
          name: "eye",
          className: "text-white",
        }),
      });
      showBtn.dataset.action = "show";
      tr.setAttribute("id", item.id);
      const taskTd = ElementGenerator({
        element: "td",
        className: "border px-2 py-2",
        child: ElementGenerator({
          element: "div",
          className: "",
          child: item.taskNameInput,
        }),
      });

      const priorityTd = ElementGenerator({
        element: "td",
        className: "border text-center text-sm",
        child: ElementGenerator({
          element: "span",
          variant: item.priority,
          child: item.priority,
        }),
      });
      const statusTd = ElementGenerator({
        element: "td",
        className: "border text-center text-sm",
        child: ElementGenerator({
          element: "span",
          variant: item.status,
          child: item.status,
        }),
      });

      const deadlineTd = ElementGenerator({
        element: "td",
        className: "border text-center text-sm px-3",
        child: ElementGenerator({
          element: "div",
          className: "border border-blue-300 rounded-2xl py-1",
          child: item.dateInput,
        }),
      });
      const actionTd = ElementGenerator({
        element: "td",
        className:
          "flex gap-2 justify-center text-center items-center h-11 border",
        child: [deleteBtn, editBtn, showBtn],
      });
      // actionTd.append(deleteBtn, editBtn, showBtn);
      tr.append(taskTd, priorityTd, statusTd, deadlineTd, actionTd);
      tbody.append(tr);
      return null;
    });
  }
  //   console.log(JSON.parse(localStorage.getItem("state")));
  return tbody;
}

export default RenderTable;
