
const month_tag = document.getElementById("month");
const day_tag = document.getElementById("day");
const date_tag = document.getElementById("date");
const year_tag = document.getElementById("year");


const date = new Date();

date_tag.innerText = date.getDate();
year_tag.innerText = date.getFullYear();


const now_month = date.toLocaleString("en", { month: "long",});
const now_weekday = date.toLocaleString("en", { weekday: "long",});

month_tag.innerText = now_month;
day_tag.innerText = now_weekday;
