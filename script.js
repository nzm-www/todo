let form = document.querySelector("form");
let input = document.querySelector("#task-box");
let task_list = document.querySelector("#task-list");
let done = document.querySelector(".undone");
let undone = document.querySelector(".done");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  your_task = input.value;

  if (!your_task) {
    alert("anthing krthing");
  } else {
    addNew();
  }
});

function addNew() {
  let task = document.createElement("div");
  task.id = "task";
  task_list.append(task);

  p = document.createElement("input");
  p.value = your_task;
  p.setAttribute("yozsh", "yozsh");
  p.id = "main-task";
  task.append(p);

  let edit = document.createElement("button");

  edit.innerHTML = "Edit";
  edit.id = "edit";
  edit.title = "Clcik here to edit";

  let deletes = document.createElement("button");
  deletes.innerHTML = "Delete";
  deletes.id = "delete";
  deletes.title = "Click here to delete";

  let done = document.createElement("button");
  done.innerHTML = "Done";
  done.className = "done";
  done.id = "done";
  done.title = "Clcik here if you finished";

  task.append(edit, deletes, done);

  deletes.addEventListener("click", function (e) {
    deleteAction(e);
  });

  edit.addEventListener("click", function (e) {
    editAction(e);
  });

  done.addEventListener("click", function (e) {
    doneAction(e);
  });

  your_task = "";
  reCalculate();
}
//dalet qilish uchun //deleteAction//
deleteAction = (e) => {
  let x = e.target.parentNode;
  x.remove();
  reCalculate();
};

//uzgartirish uchun Action
editAction = (e) => {
  let x = e.target.parentNode;
  let t = x.querySelector("input");
  let b = x.querySelector("#edit");

  if (b.innerHTML == "edit") {
    t.removeAttribute("yozsh");
    b.innerHTML = "saqlash";
  } else if (b.innerHTML == "saqlash") {
    t.setAttribute("yozsh", "yozsh");
    b.innerHTML = "edit";
  }

  console.log(t);
};

function doneAction(e) {
  let x = e.target.parentNode;
  let t = x.querySelector("input");
  let b = x.querySelector(".done");

  if (b.innerHTML == "Done") {
    t.classList.add("done-text");

    b.innerHTML = "Undone";
    b.id = "undone";
    reCalculate();
  } else if (b.innerHTML == "Undone") {
    b.innerHTML = "Done";
    t.classList.remove("done-text");
    b.id = "done";
    reCalculate();
  }

  p.innerHTML = `<del>${your_task}</del>`;
}

reCalculate = () => {
  let x = document.querySelectorAll("#done");
  let y = document.querySelectorAll("#undone");
  let xx = document.querySelector("#task-list");
  let xxx = xx.firstElementChild;
  console.log(xxx);
};
