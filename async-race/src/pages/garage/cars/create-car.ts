import CarView from './car-view';

const createCar = (name: string, id: number): string => {
  const newCar = `
  <div class="car car-${id}">
    <div class="car__buttons car-${id}__buttons">
      <button class="car__buttons__select car-${id}__buttons__select" id="${id}">select</button>
      <button class="car__buttons__remove car-${id}__buttons__remove" id="${id}">remove</button>
      <p class="car__buttons__brand car-${id}__buttons__brand">${name}</p>
    </div>
    <div class="car__engine-buttons">
      <button id="${id}" class="car__engine-buttons__start car-${id}__engine-buttons__start">start</button>
      <button id="${id}" class="car__engine-buttons__stop car-${id}__engine-buttons__stop">stop</button>
    </div>
    <div class="car__track car-${id}__track">
        ${CarView(id)}
      <div class="car__finish-flag"></div>
    </div>
  </div>
  `;

  return newCar;
};

export default createCar;
