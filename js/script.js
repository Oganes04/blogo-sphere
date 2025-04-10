$(document).ready(function() {


    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.fade-left, .fade-right').forEach((img) => {
      const direction = img.classList.contains('fade-left') ? -1 : 1;
    
      gsap.fromTo(img,
        { opacity: 0, x: direction * 150 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: img,
            start: 'top 60%',
            end: 'top 10%',
            scrub: true,
          }
        }
      );
    });


    // gsap.registerPlugin(ScrollTrigger);

    gsap.registerPlugin(ScrollTrigger);

    const images = document.querySelectorAll('.offer__anim img');
    
    gsap.set(images, { opacity: 0 }); // Изначально скрываем все изображения
    
    images.forEach((img, index) => {
      gsap.to(img, {
        opacity: 1, // Изменяем opacity на 1
        scrollTrigger: {
          trigger: img,
          start: 'top 22%', // Начало анимации, когда верх изображения окажется на 90% высоты экрана
          end: 'top 10%', // Конец анимации, когда верх изображения окажется на 30% высоты экрана
          scrub: 0.4, // Плавная анимация с учетом прокрутки
          onEnter: () => {
            // При прокрутке вниз показываем изображение с текущим индексом
            images.forEach((image, idx) => {
              if (idx === index) {
                gsap.to(image, { opacity: 1 });
              } else {
                gsap.to(image, { opacity: 0 });
              }
            });
          },
          onLeaveBack: () => {
            // При прокрутке назад скрываем все изображения, кроме первого
            images.forEach((image, idx) => {
              if (idx === 0) {
                gsap.to(image, { opacity: 1 });
              } else {
                gsap.to(image, { opacity: 0 });
              }
            });
          }
        }
      });
    });
    
    
    
    
});






document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    let currentIndex = 0;
    
    function updateCards() {
        cards.forEach((card, index) => {
            card.classList.remove('active', 'prev', 'next');
            if (index === currentIndex) {
                card.classList.add('active');
            } else if (index === (currentIndex + 1) % cards.length) {
                card.classList.add('prev');
            } else if (index === (currentIndex + 2) % cards.length) {
                card.classList.add('next');
            }
        });
    }

    // Получаем кнопки только после полной загрузки DOM
    setTimeout(() => {
        const nextButtons = document.querySelectorAll('.next-btn');
        nextButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                console.log('click');
                currentIndex = (currentIndex + 1) % cards.length;
                updateCards();
            });
        });
    }, 0);

    // Инициализация
    updateCards();
});



document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card-2');
    let currentIndex = 0;
    
    function updateCards() {
        cards.forEach((card, index) => {
            card.classList.remove('active', 'prev', 'next');
            if (index === currentIndex) {
                card.classList.add('active');
            } else if (index === (currentIndex + 1) % cards.length) {
                card.classList.add('prev');
            } else if (index === (currentIndex + 2) % cards.length) {
                card.classList.add('next');
            }
        });
    }

    // Получаем кнопки только после полной загрузки DOM
    setTimeout(() => {
        const nextButtons = document.querySelectorAll('.next-btn-2');
        nextButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                console.log('click');
                currentIndex = (currentIndex + 1) % cards.length;
                updateCards();
            });
        });
    }, 0);

    // Инициализация
    updateCards();
});
  
  

//========================= Бургер меню ======================

$("#burger_menu").click(function() {
    $(this).toggleClass('open');
    $("#catalogContentAdaptive").toggleClass("open");
    $("html").toggleClass("hidden");
});
