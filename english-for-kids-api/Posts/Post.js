import mongoose from 'mongoose'

const Post = new mongoose.Schema({
  picture: { type: String },
  _id: { type: String, required: true }
})

export default mongoose.model('Post', Post)