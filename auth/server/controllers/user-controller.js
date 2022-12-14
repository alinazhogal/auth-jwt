import { userService } from "../service/user-service.js";

class UserControler {
  async registration(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await userService.registration(email, password)
      res.cookie('refresh', userData.refreshToken, {maxAge: 30*24*60*60, httpOnly: true})
      return res.json(userData)
    } catch (e) {
      console.log(e)
    }
  }

  async login(req, res, next) {
    try {
    } catch (e) {}
  }

  async logout(req, res, next) {
    try {
    } catch (e) {}
  }

  async activate(req, res, next) {
    try {
    } catch (e) {}
  }

  async refresh(req, res, next) {
    try {
    } catch (e) {}
  }

  async getUsers(req, res, next) {
    try {
      res.json(["dsd", "dsd"]);
    } catch (e) {}
  }
}
export default new UserControler();
