import wordsService from './WordsService.js'

class WordsController {

  async create(req, res) {
    try {
      const word = await wordsService.create(req.body, req.params.userId)
      res.json(word)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }

  async getOne(req, res) {
    try {
      const word = await wordsService.getOne(req.params.id);
      return res.json(word)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }

  async delete(req, res) {
    try {
      const word = await wordsService.delete(req.params.id)
      return res.json(word)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }

  async getAll(req, res) {
    try {
      const words = await wordsService.getAll(req.params.userId);
      return res.json(words)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }

  async getAllOfCategory(req, res) {
    try {
      console.log(req.params);
      const words = await wordsService.getAllOfCategory(req.params.CategoryId, req.params.userId);
      return res.json(words)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }



  async update(req, res) {
    try {
      console.log('req.params', req.params);
      const updatedWord = await wordsService.update(req.body, req.params)
      return res.json(updatedWord);
    } catch (error) {
      res.status(500).json(error.message)
    }
  }



}

export default new WordsController();


