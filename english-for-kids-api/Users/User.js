import mongoose from 'mongoose'

const User = new mongoose.Schema({
  _id: { type: String, required: true },
  password: { type: String, required: true },
})

export default mongoose.model('User', User)