import { Request, Response } from 'express';

class UserController {
  index(req: Request, res: Response) {
    const users = [
      { name: 'abc', email: 'abc@email.com' },
    ];
    return res.json(users);
  }
}

export default new UserController();
