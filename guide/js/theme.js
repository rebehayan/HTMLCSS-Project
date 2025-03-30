// 프레임CSS
const frameCSS = () => {
  const frame = document.querySelector('iframe');

  const html = frame.contentWindow.document.documentElement;
  const isDark = html.classList.toggle('dark');
  html.style.setProperty('color-scheme', isDark ? 'dark' : 'light');
};

export const Theme = (selector) => {
  const button = document.querySelector(selector);

  if (!button) return;

  const handleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');

    document.documentElement.style.setProperty('color-scheme', isDark ? 'dark' : 'light');
    frameCSS();
  };

  button.addEventListener('click', handleTheme);
};
