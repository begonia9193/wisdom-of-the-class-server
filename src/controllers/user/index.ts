import get from './get';
import update from './update';
import register from './register';
import sendValidateCode from './sendValidateCode';
import activateAccount from './activateAccount';
import getValidateCode from './getValidateCode';
import login from './login';

class User {
  constructor() {
  }

  public register = register
  public get = get
  public sendValidateCode = sendValidateCode
  public activateAccount = activateAccount
  public getValidateCode = getValidateCode
  public login = login
  public update = update
}

export default new User()
