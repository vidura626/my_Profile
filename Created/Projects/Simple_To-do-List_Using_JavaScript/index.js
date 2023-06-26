document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newTask input").value.length == 0) {
    alert("Please Enter A Task");
  } else {
    document.querySelector(".tasks").innerHTML += `
    <div class="task">
          <span class="task">
          ${document.querySelector("#newTask input").value}
          </span>
          <button class="delete">
            <i class="fa-solid fa-trash fa-xl"></i>
          </button>
        </div>
    `;
  }
  document.querySelector("#newTask input").value = "";

  let buttonDelete = document.querySelectorAll(".delete");
  for (let button of buttonDelete) {
    button.onclick = function () {
      this.parentNode.remove();
    };
  }

  var taskss = document.querySelectorAll(".task");
  for (let task of taskss) {
    task.onclick = function () {
      task.classList.toggle("completed");
      const views = document.querySelectorAll(".completed");
      document.querySelector(".check div").innerText = `Completed : ${
        views.length / 2
      }`;
    };
  }
};

const viewButton = document.querySelector(".check .button");
viewButton.onclick = function () {};
