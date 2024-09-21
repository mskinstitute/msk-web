
function click_btn() {
    var otp = Math.floor(1000 + Math.random() * 9000); // Always 4 digits
    document.getElementById('result').value = otp;
}
