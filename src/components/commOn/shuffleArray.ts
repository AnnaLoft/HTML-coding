const shuffleArray = (array: Array<unknown>) => {
  let currentIndex = array.length; let
    randomIndex;
  const newArr = array;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    [newArr[currentIndex], newArr[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return newArr;
};

export default shuffleArray;
