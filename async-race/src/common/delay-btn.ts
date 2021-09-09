const delayOfBtn = (button: HTMLElement):void => {
  const btn = button;
  btn.style.pointerEvents = 'none';
  setTimeout(() => { btn.style.pointerEvents = 'unset'; }, 700);
};

export default delayOfBtn;
