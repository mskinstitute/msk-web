
const kits = ["crash", "kick", "snare", "tom"];

const container = document.querySelector(".container");

kits.forEach((item) => {
  const btn_tag = document.createElement("button");
  btn_tag.classList.add("btn");
  btn_tag.innerText = item;
  btn_tag.style.backgroundImage = "url(images/" + item + ".png)";

  container.appendChild(btn_tag);

  const audio_tag = document.createElement("audio");
  audio_tag.src = "sounds/" + item + ".mp3";
  container.appendChild(audio_tag);
  
  btn_tag.addEventListener("click", () => {
    audio_tag.play();
  });
  

  
  window.addEventListener("keydown", (event) => {
    if (event.key === item.slice(0, 1)) {
      audio_tag.play();
      btn_tag.style.transform = "scale(.9)";
      setTimeout(() => {
        btn_tag.style.transform = "scale(1)";
      }, 100);
    }
  });



});
