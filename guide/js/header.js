const mobileSize = 1280;
const frame = document.querySelector('iframe');
const button = document.querySelector('.btn-mobile');
const linkTag = document.querySelector('.blank');

const initNewTab = (links) => {
  if (!linkTag || !button) return;

  const initHref = links[0].getAttribute('href');
  const frameSrc = sessionStorage.getItem('src');
  const responsiveText = sessionStorage.getItem('responsive') || '타블렛 보기';

  button.textContent = responsiveText;

  frame.removeAttribute('style');
  linkTag.setAttribute('href', frameSrc || initHref);
};

const newTab = (link) => {
  if (!linkTag) return;
  linkTag.setAttribute('href', link.getAttribute('href'));
};

const viewSize = (e) => {
  if (!frame || !e.target) return;

  const text = e.target.textContent;

  switch (text) {
    case '모바일 보기':
      frame.style.width = '360px';
      e.target.textContent = '웹 보기';
      break;
    case '타블렛 보기':
      frame.style.width = '720px';
      e.target.textContent = '모바일 보기';
      break;
    case '웹 보기':
      frame.removeAttribute('style');
      e.target.textContent = '타블렛 보기';
      break;
  }
};

const viewMobile = () => {
  if (!button) return;

  button.addEventListener('click', (e) => {
    sessionStorage.setItem('responsive', e.target.textContent);
    viewSize(e);
  });
};

const resizeButton = () => {
  if (!button) return;
  button.style.display = window.innerWidth < mobileSize ? 'none' : 'flex';
};

window.addEventListener('resize', resizeButton);
window.addEventListener('load', resizeButton);

export const header = (links) => {
  initNewTab(links);

  links.forEach((link) => {
    link.addEventListener('click', () => {
      newTab(link);
    });
  });

  viewMobile();
};
