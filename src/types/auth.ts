/** @format */

export interface LoginForm {
  mobile: string | number;
  password: string | number;
}

export interface RegisterForm {
  name: string;
  email: string;
  mobile: string | number;
  password: string | number;
  confirmPassword: string | number;
}
