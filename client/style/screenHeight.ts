export default () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

export const get100viewHeight = () => `calc(var(--vh, 1vh) * 100)`;
