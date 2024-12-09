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
document.addEventListener("DOMContentLoaded", () => {
    const mainTitle = document.querySelector(".main_info-title");
    mainTitle.style.opacity = "0";
    mainTitle.style.transform = "translateY(-20px)";
    
    setTimeout(() => {
        mainTitle.style.transition = "opacity 1s ease, transform 1s ease";
        mainTitle.style.opacity = "1";
        mainTitle.style.transform = "translateY(0)";
    }, 300); // Затримка перед анімацією
});
// Отримуємо всі елементи списку меню
const menuItems = document.querySelectorAll(".menu_list-item");

// Додаємо ефект при наведенні на кожен елемент
menuItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        item.style.transform = "translateY(-10px) scale(1.05)"; // Піднімаємо та збільшуємо
        item.style.backgroundColor = "#f9f9f9"; // Додаємо світлий фон
        item.style.transition = "all 0.3s ease"; // Плавність анімації
        const img = item.querySelector("img");
        if (img) img.style.transform = "scale(1.1)"; // Збільшуємо зображення
    });

    item.addEventListener("mouseleave", () => {
        item.style.transform = "translateY(0) scale(1)"; // Повертаємо початковий вигляд
        item.style.backgroundColor = ""; // Повертаємо фон
        const img = item.querySelector("img");
        if (img) img.style.transform = "scale(1)"; // Повертаємо розмір зображення
    });
});

const Items = document.querySelectorAll(".customers_list-item");
Items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        item.style.transform = "translateY(-10px) scale(1.10)"; // Піднімаємо та збільшуємо
        item.style.backgroundColor = "#f9f9f9"; // Додаємо світлий фон
        item.style.transition = "all 0.3s ease"; // Плавність анімації
        const img = item.querySelector("img");
        if (img) img.style.transform = "scale(1.1)"; // Збільшуємо зображення
    });

    item.addEventListener("mouseleave", () => {
        item.style.transform = "translateY(0) scale(1)"; // Повертаємо початковий вигляд
        item.style.backgroundColor = ""; // Повертаємо фон
        const img = item.querySelector("img");
        if (img) img.style.transform = "scale(1)"; // Повертаємо розмір зображення
    });
});
