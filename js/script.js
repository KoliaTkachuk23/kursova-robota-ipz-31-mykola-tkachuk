document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.header_nav');

    burger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Закриття меню при кліку за його межами
    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !burger.contains(event.target)) {
            navMenu.classList.remove('active');
        }
    });
});
