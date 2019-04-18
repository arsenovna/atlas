import Base from "./base";
import { getAllUsersAPI } from "./API/index";

const baseService = new Base();

export class UserService {
  getUsers =  () => baseService.getJson(getAllUsersAPI);
}
