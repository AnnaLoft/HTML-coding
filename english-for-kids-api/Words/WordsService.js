import Word from "./Word.js";

class WordsService {

  async create(words, userId) {

    const createdWord = await Word.create({ ...words, userId: userId });
    return createdWord
  }

  async getOne(id, userId) {
    if (!id) {
      throw new Error('id не найден')
    }
    const word = await Word.findById(id);
    if (word.WordData.userId === userId) {
      return word
    } else { return null }
  }

  async delete(id) {
    try {
      if (!id) {
        throw new Error('id не найден')
      }
      const word = await Word.findByIdAndDelete(id)
      return word
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async getAll(userId) {
    try {
      const words = await Word.find();
      const filtredWords = words.filter((word) => word.userId === userId)
      return filtredWords
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async getAllOfCategory(CategoryId, userId) {
    try {
      console.log(CategoryId, userId);
      const words = await Word.find();

      let filtredWords = []
      words.map((word) => {
        if (word.WordData.category === CategoryId) {
          filtredWords.push(word)
        }
      })
      const filtredByUserIdWords = filtredWords.filter((filtredWord) => filtredWord.userId === userId)
      return filtredByUserIdWords
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async update(word, params) {
    console.log('params.id', params.id);
    if (!word) {
      throw new Error('слово не найдено')
    }
    if (!params.id) {
      throw new Error('id не найден')
    }
    const updatedWord = await Word.findByIdAndUpdate(params.id, word, { new: true })
    return updatedWord;
  }

}


export default new WordsService();