const tryToConvertB64src = (imgSrc: string, soundSrc: string) => {
  let wordImgSrc, wordSoundSrc
  try { wordImgSrc = atob(imgSrc) } catch
  { wordImgSrc = imgSrc }
  try { wordSoundSrc = atob(soundSrc) } catch
  { wordSoundSrc = soundSrc }
  return [wordImgSrc, wordSoundSrc]
}

export default tryToConvertB64src