import WordsApi from './../wordsApi/wordsApi';
import Statistics from './../../statistics/Statistics';

const ChangeScoreApi = {
  addWrong: (id: string, gameWordsData: any) => {
    gameWordsData.forEach((word: any) => {
      if (word._id === id) {
        WordsApi.getSingleWord(id).then((word: any) => {
          word.WordData.Statistics.wrong += 1
          WordsApi.putWord(id, {
            ...word
          }).then((res) => {
            ChangeScoreApi.addPersent(id, res)
          })
        })
      }
    });
  },

  addRight: (id: string, gameWordsData: any) => {
    gameWordsData.forEach((word: any) => {
      if (word._id === id) {
        WordsApi.getSingleWord(id).then((word: any) => {
          word.WordData.Statistics.right += 1
          WordsApi.putWord(id, {
            ...word
          }).then((res) => {
            ChangeScoreApi.addPersent(id, res)
          })
        })
      }
    });
  },

  addClick: (id: string, gameWordsData: any) => {
    gameWordsData.forEach((word: any) => {
      if (word._id === id) {
        WordsApi.getSingleWord(id).then((word: any) => {
          word.WordData.Statistics.clicks += 1
          WordsApi.putWord(id, {
            ...word
          })
        })
      }
    });
  },

  addPersent: (id: string, wordBody: any) => {
    wordBody.WordData.Statistics.percent = Math.floor(((Number(wordBody.WordData.Statistics.right) * 100) /
      (Number(wordBody.WordData.Statistics.wrong + Number(wordBody.WordData.Statistics.right)))))
    if (wordBody.WordData.Statistics.percent === Infinity || Number.isNaN(wordBody.WordData.Statistics.percent)) {
      wordBody.WordData.Statistics.percent = 0
    }
   
    WordsApi.putWord(id, {
      ...wordBody
    }).then((res) => {
     
    })
  }

}


export default ChangeScoreApi