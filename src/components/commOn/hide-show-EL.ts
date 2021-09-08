export const hideEl = (e: HTMLElement) => {
  const el = e;
  el.style.transition = '0.3s';
  el.style.opacity = '0';
  setTimeout(() => { el.style.display = 'none'; }, 300);
};

export const showEl = (e: HTMLElement) => {
  const el = e;
  el.style.display = 'block';
  el.style.transition = '0.3s';
  setTimeout(() => { el.style.opacity = '1'; }, 300);
};
