import Router from 'express'
import wordsController from './WordsController.js'

const wordsRouter = new Router()



wordsRouter.post(`/words/:userId`, wordsController.create)
wordsRouter.get('/words/:userId/:id', wordsController.getOne)
wordsRouter.get('/words/all/:userId/:CategoryId', wordsController.getAllOfCategory)
wordsRouter.get('/words/:userId/', wordsController.getAll)
wordsRouter.put('/words/:userId/:id', wordsController.update)
wordsRouter.delete('/words/:userId/:id', wordsController.delete)

export default wordsRouter




