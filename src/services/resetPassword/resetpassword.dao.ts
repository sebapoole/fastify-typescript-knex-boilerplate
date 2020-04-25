import Knex from 'knex';

import { IResetPassword } from '../../services/resetPassword/resetpassword.dto';
import { IResetPasswordDao } from './resetpassword.interface';

export default class ResetPasswordDataAccess implements IResetPasswordDao {
  constructor(private readonly knex: Knex) {}

  async getOneByTokenTrx(trx: Knex.Transaction, token: string): Promise<IResetPassword> {
    return trx.select('*').from('reset_passwords').where({ token }).first();
  }

  async deleteTrx(
    trx: Knex.Transaction,
    user_id: IResetPassword['user_id']
  ): Promise<void> {
    await trx.from('reset_passwords').where({ user_id }).del();
  }

  async create(resetPassword: IResetPassword): Promise<void> {
    await this.knex.insert(resetPassword).into('reset_passwords').returning('id');
  }
}
