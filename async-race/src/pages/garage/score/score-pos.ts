import getCarsApi from '../../../common/api/getCarsApi';

const createScorePosition = (id: number, wins: number, time: number, number: number): void => {
  const winnersBlock: HTMLElement = document.querySelector('.winners-page__winners');
  getCarsApi(1, -1).then((res) => {
    const name: string = res[id - 1]?.name;
    const color: string = res[id - 1]?.color;
    winnersBlock.innerHTML
      += `
    <div class="winners-page__winners__winner winners-page__winners__winner-${id}">
      <p class="winners-page__winners__winner__inner winners-page__winners__winner__number winners-page__winners__winner-${id}__number">${number}</p>
      <div class="winners-page__winners__winner__inner">
        <svg id="${id}" class="winners-page__winners__winner__image winners-page__winners__winner__image winners-page__winners__winner-${id}__image" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="1 -160 511.999 511" style="enable-background:new 1 -160 511.999 511;" xml:space="preserve">
          <style type="text/css">
            .st0{fill:none;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .st1{fill:none;stroke:#000000;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;}
          </style>
           <path class='st0'd="m498.542969 80.964844c-28.695313-20.128906-69.269531-24.351563-98.253907-24.351563h-6.351562l-101.007812-47.136719c-12.582032-5.875-26.574219-8.976562-40.457032-8.976562h-89.164062c-8.664063 0-17.09375 1.730469-25.058594 5.140625l-92.566406 39.671875c-5.082032 2.179688-10.460938 3.285156-15.992188 3.285156h-6.160156c-12.972656-.003906-23.53125 10.554688-23.53125 23.53125v50.914063c0 11.238281 8.007812 20.953125 19.039062 23.097656l29.679688 5.773437c3.667969 22.617188 23.324219 39.941407 46.957031 39.941407 17.679688 0 33.125-9.699219 41.328125-24.050781h254.023438c8.203125 14.351562 23.648437 24.050781 41.328125 24.050781 17.675781 0 33.125-9.699219 41.328125-24.050781h14.785156c12.972656 0 23.53125-10.554688 23.53125-23.53125v-37.441407c0-10.285156-5.03125-19.957031-13.457031-25.867187zm-211.957031-57.894532 71.882812 33.542969h-107.035156l-35.242188-41.113281h36.277344c11.710938 0 23.507812 2.617188 34.117188 7.570312zm-90.148438-7.570312 35.242188 41.113281h-12.714844c-4.835938 0-9.417969-2.105469-12.566406-5.78125l-30.285157-35.332031zm-53.960938 137.304688c.503907-2.769532.78125-5.617188.78125-8.53125 0-3.195313-.320312-6.394532-.953124-9.507813-.824219-4.058594-4.78125-6.679687-8.839844-5.859375-4.0625.824219-6.683594 4.785156-5.859375 8.84375.433593 2.128906.652343 4.324219.652343 6.523438 0 17.964843-14.617187 32.578124-32.582031 32.578124-17.964843 0-32.578125-14.613281-32.578125-32.578124 0-17.964844 14.613282-32.582032 32.578125-32.582032 4.550781 0 8.945313.917969 13.070313 2.726563 3.789062 1.660156 8.214844-.066407 9.878906-3.859375 1.664062-3.792969-.0625-8.214844-3.855469-9.878906-6.035156-2.644532-12.460937-3.988282-19.09375-3.988282-23.632812 0-43.289062 17.324219-46.957031 39.941406l-26.816406-5.214843c-4-.777344-6.90625-4.300781-6.90625-8.375v-27.382813h8.535156c4.140625 0 7.5-3.359375 7.5-7.5s-3.359375-7.5-7.5-7.5h-8.53125v-8.53125c0-4.707031 3.828125-8.53125 8.53125-8.53125h6.160156c7.574219 0 14.941406-1.515625 21.902344-4.496094l92.5625-39.671874c4.058594-1.738282 8.273438-2.890626 12.589844-3.476563l38.265625 44.640625c6 7.003906 14.730469 11.019531 23.953125 11.019531h181.324218c20.042969 0 55.804688 2.347657 82.300782 17.0625h-2.136719c-4.144531 0-7.5 3.359375-7.5 7.5 0 4.144531 3.355469 7.5 7.5 7.5h16.238281c.199219 1.03125.308594 2.085938.308594 3.15625v13.910157h-23.316406c-8.203125-14.351563-23.648438-24.046876-41.328125-24.046876-17.679688 0-33.125 9.695313-41.328125 24.046876h-14.78125c-4.144532 0-7.5 3.355468-7.5 7.5 0 4.140624 3.355468 7.5 7.5 7.5h9.308594c-.503907 2.769531-.78125 5.617187-.78125 8.53125 0 2.914062.277343 5.761718.78125 8.53125zm289.878907 24.046874c-17.964844 0-32.582031-14.613281-32.582031-32.578124 0-17.964844 14.617187-32.582032 32.582031-32.582032 17.964843 0 32.582031 14.617188 32.582031 32.582032 0 17.964843-14.617188 32.578124-32.582031 32.578124zm56.113281-24.046874h-9.3125c.503906-2.769532.78125-5.617188.78125-8.53125 0-2.914063-.277344-5.761719-.78125-8.53125h17.84375v8.53125c0 4.703124-3.828125 8.53125-8.53125 8.53125zm0 0"/>
       <path class='st0'd="m344.179688 120.742188h-100.460938l-16.988281-22.652344c-4.421875-5.894532-11.460938-9.414063-18.828125-9.414063h-32.0625c-2.84375 0-5.4375 1.605469-6.707032 4.148438-1.273437 2.539062-1 5.582031.707032 7.851562l19.238281 25.652344c4.417969 5.894531 11.457031 9.414063 18.824219 9.414063h136.277344c4.140624 0 7.5-3.359376 7.5-7.5 0-4.144532-3.359376-7.5-7.5-7.5zm-136.277344 0c-2.671875 0-5.222656-1.277344-6.824219-3.414063l-10.238281-13.652344h17.0625c2.671875 0 5.222656 1.277344 6.828125 3.414063l10.238281 13.652344zm0 0"/>
       <path class='st0'd="m95.675781 128.757812c-8.554687 0-15.515625 6.960938-15.515625 15.515626 0 8.554687 6.960938 15.515624 15.515625 15.515624 8.558594 0 15.515625-6.960937 15.515625-15.515624 0-8.554688-6.957031-15.515626-15.515625-15.515626zm0 0"/>
       <path class='st0'd="m432.355469 128.757812c-8.554688 0-15.515625 6.960938-15.515625 15.515626 0 8.554687 6.960937 15.515624 15.515625 15.515624 8.554687 0 15.515625-6.960937 15.515625-15.515624 0-8.554688-6.960938-15.515626-15.515625-15.515626zm0 0"/>
       <path class='st0'd="m95.675781 128.757812c-8.554687 0-15.515625 6.960938-15.515625 15.515626 0 8.554687 6.960938 15.515624 15.515625 15.515624 8.558594 0 15.515625-6.960937 15.515625-15.515624 0-8.554688-6.957031-15.515626-15.515625-15.515626zm0 0"/>
       <path class='st0'd="m432.355469 128.757812c-8.554688 0-15.515625 6.960938-15.515625 15.515626 0 8.554687 6.960937 15.515624 15.515625 15.515624 8.554687 0 15.515625-6.960937 15.515625-15.515624 0-8.554688-6.960938-15.515626-15.515625-15.515626zm0 0"/>
        </svg>
      </div>
      <p class="winners-page__winners__winner__inner winners-page__winners__winner__id winners-page__winners__winner-${id}__id">${id}</p>
      <p class="winners-page__winners__winner__inner winners-page__winners__winner__name winners-page__winners__winner-${id}__name">${name}</p>
      <p class="winners-page__winners__winner__inner winners-page__winners__winner__wins winners-page__winners__winner-${id}__wins">${wins}</p>
      <p class="winners-page__winners__winner__inner winners-page__winners__winner__best-time winners-page__winners__winner-${id}__best-time">${time}</p>
    </div>
  `;

    const carImage: HTMLElement = document.querySelector(`.winners-page__winners__winner-${id}__image`);
    carImage.style.stroke = `${color}`;
  });
};

export default createScorePosition;