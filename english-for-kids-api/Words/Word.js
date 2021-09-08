import mongoose from 'mongoose'


const word = new mongoose.Schema({
  _id: { type: String, required: true },
  WordData: { type: Object, required: true },
  userId: { type: String, required: true },
})

const Word = mongoose.model(`Words`, word)

export default Word