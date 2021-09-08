import UserService from './UserService.js'

class UserCotroller {

  async create(req, res) {
    try {
      const user = await UserService.create(req.body)
      res.json(user)
    } catch (error) {
      res.status(400).json(error.message)
    }
  }

  async getOne(req, res) {
    try {
      const user = await UserService.getOne(req.params.id);
      return res.json(user)
    } catch (error) {
      res.status(400).json(error.message)
    }
  }

  async delete(req, res) {
    try {
      const user = await UserService.delete(req.params.id)
      return res.json(user)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }

}

export default new UserCotroller();


