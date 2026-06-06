import { ENV } from '../config/env';

export const validUsers = [
  {
    username: ENV.standardUser,
    password: ENV.password,
    description: 'standard user'
  },
  {
    username: ENV.problemUser,
    password: ENV.password,
    description: 'problem user'
  },
  {
    username: ENV.performanceUser,
    password: ENV.password,
    description: 'performance glitch user'
  },
];

export const invalidUsers = [
  {
    username: ENV.lockedOutUser,
    password: ENV.password,
    description: 'locked out user',
    errorMessage: 'Epic sadface: Sorry, this user has been locked out.'
  },
  {
    username: 'invalid_user',
    password: 'wrong_password',
    description: 'invalid credentials',
    errorMessage: 'Epic sadface: Username and password do not match any user in this service'
  },
  {
    username: '',
    password: '',
    description: 'empty credentials',
    errorMessage: 'Epic sadface: Username is required'
  },
];