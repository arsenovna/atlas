import Base from "./base";
import { signUpAPI, loginAPI } from "./API/index";
import User from "../Interfaces/User";

const baseService = new Base();

export class AuthService {
  signIn = (data: User) => baseService.postJson(loginAPI, data);

  signUp = (data: User) => baseService.postJson(signUpAPI, data);
}
