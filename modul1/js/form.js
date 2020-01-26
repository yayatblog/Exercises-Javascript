function show() {
    var nilai = document.getElementById('psw').type;
    if (nilai == 'password') {
        document.getElementById('psw').type = 'text';
        document.getElementById('iconeye').innerHTML = '<i class="fa fa-pencil"></i>';
    }
    else {
        document.getElementById('psw').type = 'password';
        document.getElementById('iconeye').innerHTML = '<i class="fa fa-inbox"></i>';
    }
}

var myInput = document.getElementById("psw")

myInput.onfocus = function () {
    document.getElementById("message").style.display = "block";
}

myInput.onblur = function () {
    document.getElementById("message").style.display = "none";
}
var length = document.getElementById("length");
if (myInput.value.length >= 4) {
    length.classList.remove("invalid");
    length.classList.add("valid");
} else {
    length.classList.remove("valid");
    length.classList.add("invalid");
}