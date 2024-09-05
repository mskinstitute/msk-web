
const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const rm_wo_co = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter()

function updateCounter() {
  totalCounterEl.innerText = textareaEl.value.length;
  rm_wo_co.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}
