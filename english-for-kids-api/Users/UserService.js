import User from "./User.js";
import AuthData from "./../AuthData.js";



class UserService {

  async create(user) {
    const createdUser = await User.create({ ...user });
    AuthData.id = user._id
    return createdUser
  }

  async getById(id) {
    if (!id) {
      throw new Error('id не найден')
    }
    const user = await User.findById(id);
    return user
  }

  async delete(id) {
    try {
      if (!id) {
        throw new Error('id не найден')
      }
      const user = await User.findByIdAndDelete(id)
      return user
    } catch (error) {
      res.status(500).json(error)
    }
  }





}

export default new UserService();
