import MailgunClient from 'mailgun-js';

import IConfig from '../interfaces/config.interface';

export default class Mailgun {
  private connection: MailgunClient.Mailgun;

  constructor(private mailgunClient: any, private config: IConfig) {
    this.connection = this.mailgunClient(this.config.get('infra.mailgun'));
  }

  getConnection(): MailgunClient.Mailgun {
    return this.connection;
  }
}
