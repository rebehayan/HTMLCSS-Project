import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const autoplayControl = (swiper, selector) => {
  const toggle = document.querySelector(selector);

  let isToggle = true;

  toggle.addEventListener('click', (e) => {
    if (isToggle) {
      swiper.autoplay.stop(); //정지
      e.target.innerText = '재생';
    } else {
      swiper.autoplay.start(); //재생
      e.target.innerText = '정지';
    }
    isToggle = !isToggle;
  });
};

const slide1 = () => {
  const swiper = new Swiper('.slide1', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: '.slide1 .pagination',
      clickable: true,
      bulletElement: 'button',
      bulletClass: 'btn-paging',
      bulletActiveClass: 'active',
    },
    navigation: {
      nextEl: '.slide1 .next',
      prevEl: '.slide1 .prev',
    },
  });
  autoplayControl(swiper, '.slide1 .btn-slide-toggle');
};

const slide2 = () => {
  const swiper = new Swiper('.slide2', {
    loop: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: '.slide2 .pagination',
    },
    on: {
      slideChange() {
        const pagingItems = document.querySelectorAll('.slide2 .pagination span');
        pagingItems.forEach((item) => {
          item.removeAttribute('style');
        });
      },
      autoplayTimeLeft(slide, time, progress) {
        const pagingItems = document.querySelectorAll('.slide2 .pagination span');
        pagingItems[slide.realIndex].style.setProperty('--progress', (1 - progress) * 100);
      },
    },
  });
  autoplayControl(swiper, '.slide2 .btn-slide-toggle');
};

const slide3 = () => {
  let swiper;

  const initializeSwiper = () => {
    swiper = new Swiper('.slide3', {
      loop: true,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: '.slide3 .pagination',
      },
      navigation: {
        nextEl: '.slide3 .next',
        prevEl: '.slide3 .prev',
      },
    });
  };

  if (window.innerWidth >= 1024) {
    initializeSwiper();
  }

  const handleResize = () => {
    const width = window.innerWidth;

    if (width < 1024) {
      if (swiper) {
        swiper.destroy();
        swiper = null;
      }
    } else {
      if (!swiper) {
        initializeSwiper();
      } else {
        swiper.update();
      }
    }
  };

  window.addEventListener('resize', handleResize);
};

const slide4 = () => {
  let swiper;

  const webSlide = (activeIndex = 0) => {
    if (swiper) {
      swiper.destroy();
    }

    swiper = new Swiper('.slide4', {
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: '.slide4 .pagination',
      },
      slidesPerView: 2,
      navigation: {
        nextEl: '.slide4 .next',
        prevEl: '.slide4 .prev',
      },
    });

    swiper.slideTo(activeIndex, 0);
  };

  const mobileSlide = (activeIndex = 0) => {
    if (swiper) {
      swiper.destroy();
    }

    swiper = new Swiper('.slide4', {
      autoplay: {
        delay: 3000,
      },
      slidesPerView: 1,
    });
    swiper.slideTo(activeIndex, 0);
  };

  const init = () => {
    if (window.innerWidth > 1024) {
      webSlide();
    } else {
      mobileSlide();
    }
  };

  init();

  window.addEventListener('resize', () => {
    const activeIndex = swiper ? swiper.activeIndex : 0;

    if (window.innerWidth > 1024) {
      webSlide(activeIndex);
    } else {
      mobileSlide(activeIndex);
    }
  });
};

slide1();
slide2();
slide3();
slide4();
