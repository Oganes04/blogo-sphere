$(document).ready(function() {
    const aboutSwiper = new Swiper('.aboutSwiper', {
        direction: 'horizontal',
        loop: true,
        speed: 500,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.aboutSwiper-next'
        }
    });



    const aboutSwiperBloggers = new Swiper('.aboutSwiperBloggers', {
        direction: 'horizontal',
        loop: true,
        speed: 500,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.aboutSwiper-next'
        }
    });


    // Создаем наблюдатель
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Добавляем класс visible когда элемент виден
                    entry.target.classList.add('visible');
                    // Отключаем наблюдение после показа
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            // Настройки наблюдателя
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        }
    );
  
    // Ищем все элементы с классом fade-in и начинаем наблюдение
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
    
    document.querySelectorAll('.fade-left').forEach(element => {
        observer.observe(element);
    });
    
    document.querySelectorAll('.fade-right').forEach(element => {
        observer.observe(element);
    });
    
});



