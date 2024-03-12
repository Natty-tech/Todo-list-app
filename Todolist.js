//global variable for edit
var g1 = "";

//get form value
let formvalue = document.querySelector(".todo input");

//get ul
let ul = document.querySelector(".lists ul");
//btn
let btn = document.querySelector(".todo button");
btn.addEventListener("click", (e) => {
  if (formvalue.value == "") {
    alert("Please enter a todo first!");
  }
  while (formvalue.value != "") {
    e.preventDefault();
    let input = formvalue.value;
    //create li
    let li = document.createElement("li");
    li.innerText += input;
    //create a delete button and give it name
    let delbtn = document.createElement("button");
    delbtn.textContent = "Delete";
    delbtn.className = "deletebtn";
    delbtn.style.backgroundColor = "#d2122e";
    delbtn.addEventListener("mouseenter", (e) => {
      delbtn.style.backgroundColor = "#E32636";
    });
    delbtn.addEventListener("mouseleave", (e) => {
      delbtn.style.backgroundColor = "#d2122e";
    });
    //create edit button and give it content
    let editbtn = document.createElement("button");
    editbtn.textContent = "Edit";
    editbtn.className = "editbtn";

    //add li to ul
    ul.appendChild(li);
    //create and add a div inside li
    let div = document.createElement("div");
    div.style.display = "flex";
    div.style.marginRight = "10%";
    li.appendChild(div);
    //add editbtn to ul
    div.appendChild(editbtn);
    //add delbtn to ul
    div.appendChild(delbtn);

    //making the form empty

    formvalue.value = "";
  }
});

//delete button function
ul.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.className == "deletebtn") {
    let parentofli = e.target.parentElement;
    parentofli.parentElement.remove();
  }
});

//edit button function for bringing the form
ul.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.className == "editbtn") {
    //get the editwrapper
    let editwrapper = document.querySelector(".editwrapper");
    let editbtnparent = e.target.parentElement;
    g1 = editbtnparent.parentElement;
    editwrapper.className = "editon";
    console.log(g1.textContent);
  }
});
//accepting the edited and replacing it with the current li
let editwrapper = document.querySelector(".editwrapper");
let input2 = document.querySelector(".editwrapper input");
let form2 = document.querySelector(".editwrapper form");
editwrapper.addEventListener("click", (e) => {
  e.preventDefault();
});
form2.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.className == "submitbtn") {
    g1.textContent = input2.value;
    console.log(g1);

    //get the editon
    let editon = document.querySelector(".editon");
    editon.className = "editwrapper";

    //create a delete button and give it name
    let delbtn = document.createElement("button");
    delbtn.textContent = "Delete";
    delbtn.className = "deletebtn";
    delbtn.style.backgroundColor = "#d2122e";
    delbtn.addEventListener("mouseenter", (e) => {
      delbtn.style.backgroundColor = "#E32636";
    });
    delbtn.addEventListener("mouseleave", (e) => {
      delbtn.style.backgroundColor = "#d2122e";
    });
    //create edit button and give it content
    let editbtn = document.createElement("button");
    editbtn.textContent = "Edit";
    editbtn.className = "editbtn";

    //create and add a div inside li
    let div = document.createElement("div");
    div.style.display = "flex";
    div.style.marginRight = "10%";
    div.appendChild(editbtn);
    div.appendChild(delbtn);

    g1.appendChild(div);
    input2.value = "";
  }
});
