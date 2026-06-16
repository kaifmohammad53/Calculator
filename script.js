let mode = document.querySelector("#moon");
let modes = document.querySelector("#sun");
let body = document.querySelector("body");
let container = document.querySelector(".container");
let heading = document.querySelector("h1");
let keys = document.querySelectorAll(".keySpace button");
let resltspace = document.querySelector(".resltSpace");
let icon = document.querySelector(".icon");
let operator = document.querySelectorAll(".operator");
let opt = document.querySelectorAll(".opt");

mode.addEventListener("click", () => {
  body.style.backgroundColor = "whitesmoke";
  container.style.backgroundColor = "#081b31";
  heading.style.color = "#081b31";
  resltspace.style.color = "white";
  icon.style.color = "white";
  icon.style.border = "2px solid rgba(255, 255, 255, 0.3)";
  keys.forEach((button) => {
    button.style.color = "white";
    button.style.backgroundColor = "#081b31";
    button.style.border = "2px solid black";
    operator.forEach((op) => {
      op.style.backgroundColor = "#ffb400";
    });
    opt.forEach((opt) => {
      opt.style.backgroundColor = "white";
      opt.style.color = "grey";
    });
  });
});

modes.addEventListener("click", () => {
  body.style.backgroundColor = "#081b31";
  container.style.backgroundColor = "whitesmoke";
  heading.style.color = "white";
  resltspace.style.color = "black";
  icon.style.color = "black";
  icon.style.border = "2px solid rgba(0, 0, 0, 0.3)";
  keys.forEach((button) => {
    button.style.color = "black";
    button.style.backgroundColor = "white";
    button.style.border = "2px solid white";
    operator.forEach((op) => {
      op.style.backgroundColor = "#ffb400";
    });
    opt.forEach((opt) => {
      opt.style.backgroundColor = "grey";
    });
  });
});

let input = document.querySelector("#input");
let result = document.querySelector("#result");

keys.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.innerText;
    if (
      value !== "AC" &&
      value !== "->" &&
      value !== "=" &&
      value !== "+/-"
    ) {
      input.innerText += value;
    }
    if (value == "AC") {
      input.innerText = "";
      result.innerText = "";
    }
    if(value=="->"){
        let exp=input.innerText;
        exp=exp.slice(0,-1);
        input.innerText=exp;
    }
    if(value=="+/-"){
      let exp = input.innerText;
      if (exp === "") return;
      if (exp.startsWith("-")) {
        input.innerText = exp.slice(1);
      } else {
        input.innerText = "-" + exp;
      }
    }
    if (value == "=") {
      let exp = input.innerText;
      if(exp.includes("+")){
        let parts = exp.split("+");
        let a = Number(parts[0]);
        let b = Number(parts[1]);
        result.innerText = a + b;
      }
      if (exp.includes("-")) {
        let parts = exp.split("-");
        let a = Number(parts[0]);
        let b = Number(parts[1]);
        result.innerText = a - b;
      }
      if (exp.includes("/")) {
        let parts = exp.split("/");
        let a = Number(parts[0]);
        let b = Number(parts[1]);
        result.innerText = (a / b).toFixed(4);
      }
      if (exp.includes("*")) {
        let parts = exp.split("*");
        let a = Number(parts[0]);
        let b = Number(parts[1]);
        result.innerText = a * b;
      }
      
    }
  });
});
