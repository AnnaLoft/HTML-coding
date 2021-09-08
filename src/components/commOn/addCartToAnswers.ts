type addCartToAnswersT = (
  lineEl: HTMLElement,
  answerLineLength: number,
  tries: number,
  el: string,
) => void

const addCartToAnswers: addCartToAnswersT = (lineEl, answerLineLength, tries, el) => {

  if (tries >= answerLineLength) {
    lineEl.innerHTML += el
    let toRight = (tries + 1 - answerLineLength) * 45
    lineEl.style.right = toRight + 'px'

  } else {
  
    lineEl.innerHTML += el
  }
}

export default addCartToAnswers