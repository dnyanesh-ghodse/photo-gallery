const dark_btn = document.querySelector(".checkbox");

function switchTheme(){
    document.body.classList.toggle("dark-mode")
}

dark_btn.addEventListener('click', switchTheme)