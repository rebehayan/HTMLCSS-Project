export const Theme = (selector) => {
  const button = document.querySelector(selector);

  if (!button) return;

  const handleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');

    document.documentElement.style.setProperty('color-scheme', isDark ? 'dark' : 'light');
  };

  button.addEventListener('click', handleTheme);
};
