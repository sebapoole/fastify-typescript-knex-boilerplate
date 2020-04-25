/**
 * Wraps Controllers for easy import from other modules
 */
import AuthController from './auth/auth.controller';
import UserController from './user/user.controller'

export default [
  AuthController,
  UserController,
];
