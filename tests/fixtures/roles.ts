export type Role = 'standard_user' | 'locked_out_user' | 'problem_user' | 'performance_glitch_user' | 'error_user' | 'visual_user';

export const roles: Record<Role, { username: string; password: string }> = {
  standard_user: {
    username: process.env.STANDARD_USER || 'standard_user',
    password: process.env.STANDARD_PASS || 'secret_sauce'
  },
  locked_out_user: {
    username: process.env.LOCKED_OUT_USER || 'locked_out_user',
    password: process.env.LOCKED_OUT_PASS || 'secret_sauce'
  },
  problem_user: {
    username: process.env.PROBLEM_USER || 'problem_user',
    password: process.env.PROBLEM_PASS || 'secret_sauce'
  },
  performance_glitch_user: {
    username: process.env.PERFORMANCE_GLITCH_USER || 'performance_glitch_user',
    password: process.env.PERFORMANCE_GLITCH_PASS || 'secret_sauce'
  },
  error_user: {
    username: process.env.ERROR_USER || 'error_user',
    password: process.env.ERROR_PASS || 'secret_sauce'
  },
  visual_user: {
    username: process.env.VISUAL_USER || 'visual_user',
    password: process.env.VISUAL_PASS || 'secret_sauce'
  },

};
