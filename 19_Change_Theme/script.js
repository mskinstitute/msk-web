const elBotao = document.querySelector("button");
const elCheckbox = document.querySelector("#elemento__checkbox");

const mudarCorBackground = () => {
  const isPressed = elBotao.getAttribute("aria-pressed") === "true";
  
  if (isPressed) {
    document.body.style.backgroundColor = "#fff";
    document.querySelector("header").style.color = "#000";
    elBotao.setAttribute("aria-pressed", "false");
  } else {
    document.body.style.backgroundColor = "#000";
    document.querySelector("header").style.color = "#fff";
    elBotao.setAttribute("aria-pressed", "true");
  }
};

elBotao.addEventListener("click", mudarCorBackground);
