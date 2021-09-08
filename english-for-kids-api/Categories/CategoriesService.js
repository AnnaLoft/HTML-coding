import AuthData from '../AuthData.js';
import Category from './Category.js';

class CategoriesService {

  async create(category, userId) {
    const createdCategory = await Category.create({ ...category, userId: userId });
    return createdCategory
  }

  async getOne(id, userId) {
    if (!id) {
      throw new Error('id не найден')
    }
    const category = await Category.findById(id);
    if (category.userId === userId) {
      return category
    } 
  }

  async delete(id) {
    try {
      if (!id) {
        throw new Error('id не найден')
      }
      const category = await Category.findByIdAndDelete(id)
      return category
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async getAll(userId) {
    try {
      const categories = await Category.find();
      const filtderCategories = categories.filter((category) => category.userId === userId)
      return filtderCategories
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async update(category, id) {
    if (!id) {
      throw new Error('id не найден')
    }
    const updatedCategory = await Category.findByIdAndUpdate(id, category, { new: true })
    return updatedCategory;
  }




}

export default new CategoriesService();
