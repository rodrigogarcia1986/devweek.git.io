var dark = false;


function DarkMode() {

    var darkBtn = document.getElementById("darkBtn");

    if (dark == false) {
        document.body.classList.toggle("dark");
        darkBtn.innerHTML = "Modo claro";
        dark = true;
    } else if (dark == true) {
        document.body.classList.toggle("dark")
        darkBtn.innerHTML = "Modo escuro";
        dark = false;
    }


}