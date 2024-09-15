
function change_bg() {
    var a = Math.random() * (999999 - 1) + 1;
    var b = '#' + Math.floor(a);
    document.getElementById('result').innerText = b;
    document.body.style.backgroundColor = b;
}