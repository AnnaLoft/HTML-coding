import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import userRouter from './Users/user-router.js';
import wordsRouter from './Words/wordsRouter.js';
import categoriesRouter from './Categories/categoriesRouter.js';
import postRouter from './Posts/posts-router.js';
import AuthData from './AuthData.js';

const port = '5000'
const DB_URL = 'mongodb+srv://annaloft:123321@cluster0.csp8m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express()

const Routers = [postRouter, categoriesRouter, wordsRouter, userRouter]

app.use(express.json())
app.use(cors())
app.use(express.static('static'))
app.use(fileUpload({}))

app.use(`/api`, Routers)



async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }).then((res) => {
      AuthData.db = res
    })
    app.listen(port, () => {
      console.log('AnnaLoft\'s server started on port:', port);
    })

  } catch (error) {
  }
}

startApp()



