const createHeader = (): void => {
  const body: HTMLElement = document.querySelector('body');

  body.innerHTML
    += `
  <header class="pages">
  <h2>Async Race</h2>
    <button class="to-garage" type="submit">to garage</button>
    <button class="to-winners" type="submit">to winners</button>
  </header>
  `;
};

export default createHeader;
