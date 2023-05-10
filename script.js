



//nav bar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
}

// Obtener todos los enlaces del navbar
const navLinks = document.querySelectorAll('nav ul li a');

// Agregar un evento de clic a cada enlace del navbar
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // Prevenir comportamiento predeterminado del enlace
    const sectionId = link.getAttribute('href'); // Obtener el ID de la sección a la que se desplazará
    const section = document.querySelector(sectionId); // Obtener la sección con el ID correspondiente
    section.scrollIntoView({ behavior: 'smooth' }); // Hacer que la página se desplace suavemente hacia la sección
  });
});

