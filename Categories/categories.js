const dbCate = JSON.parse(window.localStorage.getItem("categories")) || [];
console.log(dbCate);
// lay button sang js de tao event
const btnAdd = document.getElementById("add");
console.log(add);
// lay duoc the input
const inputCate = document.getElementById("inputCate");
console.log(inputCate);
// lay gia tri trong in put ra.value

btnAdd.addEventListener("click", () => {
  const dbCate = JSON.parse(localStorage.getItem("categories")) || [];
  const cateName = inputCate.value.trim();
  //   confirm o input co rong k
  if (!cateName) {
    alert("Moi ban nhap thong tin");
    return;
  }

  //   check ten trung
  const index = dbCate.findIndex(
    (cate) => cate.name.toLowerCase() === cateName.toLowerCase()
  );
  if (index !== -1) {
    alert("Ten bi trung");
    return;
  }
  //   tao obj cho phan tu moi
  let id = 1;
  if (dbCate.length > 0) {
    id = dbCate[dbCate.length - 1].id + 1;
  }
  const newCate = {
    id: id,
    name: cateName,
  };
  dbCate.push(newCate);
  window.localStorage.setItem("categories", JSON.stringify(dbCate));
  inputCate.value = "";
  renderCate();
});

const lineCate = document.getElementById("lineCate");
function renderCate() {
  // lay db

  const dbCate = JSON.parse(window.localStorage.getItem("categories")) || [];
  // for lap
  let stringHTML = "";
  for (let i = 0; i < dbCate.length; i++) {
    stringHTML += `
    <tr class="add-area">
         <td>${dbCate[i].id}</td>
         <td id="nameCate">${dbCate[i].name}</td>
         <td>
         <button>Sửa</button>
         <button>Xoá</button>
         </td>
      </tr>
    `;
  }
  // + chuoi
  lineCate.innerHTML = stringHTML;
  // inner HTML
}
renderCate();
