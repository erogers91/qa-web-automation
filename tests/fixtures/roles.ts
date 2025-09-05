export type Role = 'admin' | 'user';

export const roles: Record<Role, { username: string; password: string }> = {
  admin: {
    username: process.env.ADMIN_USER || 'standard_user',
    password: process.env.ADMIN_PASS || 'secret_sauce'
  },
  user: {
    username: process.env.USER_USER || 'problem_user',
    password: process.env.USER_PASS || 'secret_sauce'
  }
};
