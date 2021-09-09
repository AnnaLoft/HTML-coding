import { HandlerT } from '../pages/types/types';

const removeAddHandler = (element: HTMLElement, event: string, handler: HandlerT): void => {
  element.removeEventListener(event, handler);
  element.addEventListener(event, handler);
};

export default removeAddHandler;
