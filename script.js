let inputdata = document.getElementById("inputdata");
let todoboox = document.getElementById("todoboox");

inputdata.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    todoFunction(e.target.value);
    e.target.value = "";
  }
});

const todoFunction = (e) => {
  let listitem = document.createElement("li");
  listitem.innerHTML = `
  ${e}

<i class="fas fa-times"></i> 
  `;
  todoboox.appendChild(listitem);
  listitem.addEventListener("click", () => {
    listitem.classList.toggle("done");
  });
  listitem.querySelector("i").addEventListener("click", () => {
    listitem.remove();
  });
};
