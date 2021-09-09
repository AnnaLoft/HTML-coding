const createPagesBlocks = (): void => {
  const body: HTMLElement = document.querySelector('body');

  body.innerHTML
    += `
        <div class="winners-page"></div>
        <div class="garage-page"></div>   
       `;
};

export default createPagesBlocks;
