import mongoose from 'mongoose'
import AuthData from './../AuthData.js';

const category = new mongoose.Schema({
  _id: { type: String, required: true },
  CategoryData: { type: Object, required: true },
  userId: { type: String, required: true },
})

console.log(AuthData.id);
const Category = mongoose.model(`${AuthData.id}Category`, category)


export default Category