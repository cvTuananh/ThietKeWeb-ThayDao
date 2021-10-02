var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function checklogin() {
    let userName = document.forms["login"]["uname"].value;
    let passWorld = document.forms["login"]["psw"].value;
    let dbUserName = 'anh'
    let dbPassWorld = 1234;
    if (userName == dbUserName && passWorld == dbPassWorld) {
        alert("Login Success , xin chao Tuan Anh");
    } else {
        alert("Pass or User flase , please agian");
    }
}