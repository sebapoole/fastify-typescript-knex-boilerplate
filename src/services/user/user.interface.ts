import Knex from 'knex';
import { IUser } from './user.dto';
import { IAuthService } from '../auth/auth.interface';
import { IEmailService } from '../../services/email/interface';
import { IResetPasswordService } from '../resetPassword/resetpassword.interface';

export interface IUserService {
  create(user: IUserSignUp): Promise<IUserAccount>;
  update(id: IUser['id'], update: Partial<IUser>): Promise<void>;
  getByEmailWithPassword(email: IUser['email']): Promise<IUserWithPassword>;
  getOneById(user_id: string): Promise<IUserAccount>;
  getOneByIdTrx(trx: Knex.Transaction, id: IUser['id']): Promise<IUserWithCustomerToken>;
  updateTrx(
    trx: Knex.Transaction,
    id: IUser['id'],
    update: Partial<IUser>
  ): Promise<void>;
}

interface IUserNames {
  first_name: string;
  last_name: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserSignUp extends IUserLogin, IUserNames {}

export interface IUserAccount extends IUserNames {
  id: string;
  email: string;
  admin: boolean;
}

export interface IUserWithCustomerToken extends IUserAccount {
  customer_token: string;
}

export interface IUserWithToken extends IUserAccount {
  token: string;
}

export interface IUserWithPassword extends IUserAccount {
  password: string;
}

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

export interface IUserDao {
  create(user: IUserSignUp): Promise<IUserAccount>;
  update(id: IUser['id'], update: Partial<IUser>): Promise<void>;
  getByEmailWithPassword(email: IUser['email']): Promise<IUserWithPassword>;
  getOneById(id: IUser['id']): Promise<IUserAccount>;
  // updateProfile(user: IUserWithPassword): Promise<IUserAccount>;
  delete(id: IUser['id']): Promise<IUserAccount['id']>;
  getOneByIdTrx(trx: Knex.Transaction, id: IUser['id']): Promise<IUserWithCustomerToken>;
  updateTrx(
    trx: Knex.Transaction,
    id: IUser['id'],
    update: Partial<IUser>
  ): Promise<void>;
}
