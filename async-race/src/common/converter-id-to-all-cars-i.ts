import Car from '../pages/entity/car';

const eIdtoDbCarsI = (DbCarsArr: Car[], id: number): number => {
  let i = 0;
  let index:number;
  DbCarsArr.forEach((DbCar: Car) => {
    if (id === DbCar.id) {
      index = i;
    }
    i += 1;
  });
  return index;
};

export default eIdtoDbCarsI;
