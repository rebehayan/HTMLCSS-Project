const mobileSize = 1280;
const frame = document.querySelector('iframe');
const button = document.querySelector('.btn-mobile');
const linkTag = document.querySelector('.blank');
const gnb = document.querySelector('#gnb');
const links = gnb.querySelectorAll('a');

const initNewTab = () => {
  const initHref = links[0].getAttribute('href');

  linkTag.setAttribute('href', initHref);
};

const newTab = (link) => {
  linkTag.setAttribute('href', link);
};

const viewMobild = () => {
  button.addEventListener('click', (e) => {
    switch (e.target.textContent) {
      case '모바일 보기':
        frame.style.width = 360 + 'px';
        e.target.textContent = '웹 보기';
        break;
      case '타블렛 보기':
        frame.style.width = 720 + 'px';
        e.target.textContent = '모바일 보기';
        break;
      case '웹 보기':
        frame.removeAttribute('style');
        e.target.textContent = '타블렛 보기';
        break;
    }
  });
};

const resizeButton = () => {
  if (window.innerWidth < mobileSize) {
    button.style.display = 'none';
  } else {
    button.style.display = 'flex';
  }
};

window.addEventListener('resize', resizeButton);
window.addEventListener('load', resizeButton);

export const header = () => {
  initNewTab();

  links.forEach((link) => {
    link.addEventListener('click', () => {
      newTab(link);
    });
  });

  viewMobild();
};
