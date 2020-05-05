import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

class UserController {
  async index(req: Request, res: Response) {
    const users = [
      { name: 'abc', email: 'abc@email.com' },
    ];
    return res.json(users);
  }

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail(
      { name: 'abc', email: 'email@email.com' },
      { subject: 'Bem-vindo ao sistema', body: 'Olá' },
    );

    return res.send();
  }
}

export default new UserController();
