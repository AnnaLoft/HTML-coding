const ColorRandom = (): string => {
  const randomNumber = 16777215;
  const randomColor = Math.floor(Math.random() * randomNumber).toString(16);
  return `#${randomColor}`;
};

export default ColorRandom;
