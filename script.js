const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // Prevenir comportamiento predeterminado del enlace
    const sectionId = link.getAttribute('href'); // Obtener el ID de la sección a la que se desplazará
    const section = document.querySelector(sectionId); // Obtener la sección con el ID correspondiente
    section.scrollIntoView({ behavior: 'smooth' }); // Hacer que la página se desplace suavemente hacia la sección
  });
});


//swiper 

 