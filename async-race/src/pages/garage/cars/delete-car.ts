import createGarage from '../create-garage';
import deleteCarApi from '../../../common/api/deleteCarApi';
import { HandlerT } from '../../types/types';

const deleteCarBtnsHandler: HandlerT = (e) => {
  const target = e.target as HTMLElement;
  const carInScore: HTMLElement = document.querySelector(`.winners-page__winners__winner-${target.id}`);
  deleteCarApi(target.id).then(() => {
    createGarage();
    carInScore?.remove();
  });
};
export default deleteCarBtnsHandler;
