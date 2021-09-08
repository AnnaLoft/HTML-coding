import Router from 'express'
import categoriesController from './CategoriesController.js'

const categoriesRouter = new Router()

categoriesRouter.post('/categories/:userId/', categoriesController.create)
categoriesRouter.put('/categories/:userId/:id', categoriesController.update)
categoriesRouter.get('/categories/:userId/', categoriesController.getAll)
categoriesRouter.get('/categories/:userId/:id', categoriesController.getOne)
categoriesRouter.delete('/categories/:userId/:id', categoriesController.delete)

export default categoriesRouter




