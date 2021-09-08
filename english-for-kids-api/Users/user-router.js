import Router from 'express'
import UserController from './UserController.js'

const userRouter = new Router()

userRouter.post('/users/', UserController.create)
userRouter.get('/users/:id', UserController.getOne)
userRouter.delete('/users/:id', UserController.delete)

export default userRouter