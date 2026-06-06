const dotenv = require('dotenv');
dotenv.config();

export const ENV = {
  baseURL:         process.env.BASE_URL || 'https://www.saucedemo.com',
  standardUser:    process.env.STANDARD_USER || 'standard_user',
  lockedOutUser:   process.env.LOCKED_OUT_USER || 'locked_out_user',
  problemUser:     process.env.PROBLEM_USER || 'problem_user',
  performanceUser: process.env.PERFORMANCE_USER || 'performance_glitch_user',
  password:        process.env.PASSWORD || 'secret_sauce',
};