// Переключение вкладок
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Удаляем активный класс у всех кнопок
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // Добавляем активный класс текущей кнопке
        button.classList.add('active');

        // Скрываем все вкладки
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });

        // Показываем выбранную вкладку
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Кастомный курсор в виде сердечка
const cursor = document.querySelector('.heart-cursor');

// Следим за движением мыши
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Анимация при клике
document.addEventListener('mousedown', () => {
    cursor.classList.add('click');
});

document.addEventListener('mouseup', () => {
    cursor.classList.remove('click');
});

// Пульсация сердечка при наведении на интерактивные элементы
const interactiveElements = document.querySelectorAll('button, a, .gallery-item');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('pulse');
    });

    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('pulse');
    });
});
