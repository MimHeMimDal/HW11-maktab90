import RenderTable from "./RenderTable";

function HandleDelete(e) {
  const trID = +e.target.closest("tr").getAttribute("id");
  const newState = JSON.parse(localStorage.getItem("state")).filter(
    (item) => item.id !== trID
  );
  localStorage.setItem("state", JSON.stringify(newState));
  RenderTable(localStorage.getItem("state"));
}

export default HandleDelete;
