export const disableBtn = (button: HTMLElement):void => {
  const btn = button;
  btn.style.pointerEvents = 'none';
  btn.style.opacity = '0.3';
};

export const ableBtn = (button: HTMLElement):void => {
  const btn = button;
  btn.style.pointerEvents = 'unset';
  btn.style.opacity = '1';
};

export const disableBtns = (btnsArr: Array<HTMLElement>):void => {
  btnsArr.forEach((button) => {
    const btn = button;
    btn.style.pointerEvents = 'none';
    btn.style.opacity = '0.3';
  });
};

export const ableBtns = (btnsArr: Array<HTMLElement>):void => {
  btnsArr.forEach((button) => {
    const btn = button;
    btn.style.pointerEvents = 'unset';
    btn.style.opacity = '1';
  });
};
