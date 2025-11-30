function login(element) {
    element.preventDefault();

    const password = document.getElementById("floatingPassword").value.trim();
    const errorMessage = document.getElementById("loginError");

    const correctPassword = "ryug25";

    if (password === correctPassword) {
        window.location.href = "index.html";
    } else {
        errorMessage.style.display = "block";
    }
}
