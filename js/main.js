document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector(".header__toggle");
    const menu = document.querySelector(".header__menu");
    const header = document.querySelector(".header"); // Referencia al header
    const logo = document.querySelector(".header__logo img"); // Imagen del logo
    const menuItems = document.querySelectorAll(".header__item a"); // Enlaces dentro de <li>

    toggleButton.addEventListener("click", function() {
        const isActive = menu.classList.toggle("header__menu--active");
        menu.classList.toggle("menu--dark", isActive);

        toggleButton.classList.toggle("header__toggle--active", isActive);
        header.classList.toggle("header--active", isActive);

        // Cambiar el color del ícono hamburguesa
        toggleButton.style.color = isActive ? "white" : "black";
        toggleButton.setAttribute("aria-expanded", isActive);

        // Cambiar la imagen del logo
        if (isActive) {
            logo.src = "../images/icono_logo.png"; // Imagen cuando el menú está abierto
        } else {
            logo.src = "../images/icono-logo_black.jpg"; // Imagen cuando el menú está cerrado
        }

        // Cambiar los estilos de los enlaces dentro de los <li>
        menuItems.forEach(item => {
            item.style.color = isActive ? "white" : "black";
            item.parentElement.style.backgroundColor = isActive ? "black" : "white";
        });
    });

    // Cerrar el menú cuando se hace clic en un enlace
    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            menu.classList.remove("header__menu--active");
            toggleButton.classList.remove("header__toggle--active");
            header.classList.remove("header--active");

            toggleButton.style.color = "black"; // Restaurar color original
            logo.src = "../images/icono-logo_black.jpg"; // Restaurar logo original

            // Restaurar estilos de los <li> y enlaces
            menuItems.forEach(item => {
                item.style.color = "black";
                item.parentElement.style.backgroundColor = "white";
            });
        });
    });
});
