const dbCate = JSON.parse(window.localStorage.getItem("categories")) || [];
console.log(dbCate);
// lay button sang js de tao event
const btnAdd = document.getElementById("add");
console.log(add);
// lay duoc the input
const inputCate = document.getElementById("inputCate");
console.log(inputCate);
// lay gia tri trong in put ra.value
// const
let inputGlobal = "";
let h2 = document.querySelector("h2");
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
  console.log(!inputGlobal);
  //   tao obj cho phan tu moi
  if (!inputGlobal) {
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
  } else {
    const dbCate = JSON.parse(localStorage.getItem("categories")) || [];
    const inputGlobal = JSON.parse(localStorage.getItem("inputGlobal")) || [];
    console.log(inputGlobal);
    let findIndex = dbCate.findIndex((cate) => cate.id == inputGlobal);
    console.log(inputCate.value);
    console.log(findIndex);
    dbCate[findIndex].name = inputCate.value;
    console.log(dbCate);
    window.localStorage.setItem("categories", JSON.stringify(dbCate));
    // inputGlobal = "";
    h2.innerHTML = "THÊM DANH MỤC";
    renderCate();
  }
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
         <button onclick = "update(${dbCate[i].id})">Sửa</button>
         <button onclick="deleteF(${dbCate[i].id})">Xoá</button>
         </td>
      </tr>
    `;
  }
  // + chuoi
  lineCate.innerHTML = stringHTML;

  // inner HTML
}
renderCate();

function deleteF(id) {
  const dbCate = JSON.parse(localStorage.getItem("categories")) || [];
  let findIndex = dbCate.findIndex((cate) => cate.id == id);
  console.log(findIndex);
  console.log(id);
  dbCate.splice(findIndex, 1);
  window.localStorage.setItem("categories", JSON.stringify(dbCate));
  renderCate();
}
function update(id) {
  const dbCate = JSON.parse(localStorage.getItem("categories")) || [];
  let findIndex = dbCate.findIndex((cate) => cate.id == id);
  console.log(findIndex);
  inputCate.value = dbCate[findIndex].name;
  // console.log(inputCate.value);
  h2.innerHTML = "SỬA DANH MỤC";
  inputGlobal = dbCate[findIndex].id;
  window.localStorage.setItem("inputGlobal", JSON.stringify(inputGlobal));
}
