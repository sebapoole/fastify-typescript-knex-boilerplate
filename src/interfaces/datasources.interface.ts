/**
 * DataSources interface
 */

import { IAuthService } from '../services/auth/auth.interface';
import { IUserService, IUserAccount } from '../services/user/user.interface';
import { IEmailService } from '../services/email/interface';
import { IResetPasswordService } from '../services/resetPassword/resetpassword.interface';

export interface IDataSources {
  authService: IAuthService;
  userService: IUserService;
  emailService: IEmailService;
  resetPasswordService: IResetPasswordService;
}

export interface IUserAndToken {
  user: IUserAccount;
  token: string;
}
