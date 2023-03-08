import EditModal from "./../components/EditModal/index";

function HandleEdit(e) {
  const trID = +e.target.closest("tr").getAttribute("id");
  const itemForEdit = JSON.parse(localStorage.getItem("state")).filter(
    (item) => item.id === trID
  );
  document.body.append(EditModal(itemForEdit[0]));
}

export default HandleEdit;
