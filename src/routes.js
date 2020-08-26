import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (request, response) => {
  const user = await User.create({
    name: 'Luiz Moura',
    email: 'luizhom@Outlook.com',
    password_hash: '12345678',
  });

  return response.json(user);
});

export default routes;
