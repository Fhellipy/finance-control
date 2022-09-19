export interface User {
  id: number;
  name: string;
  lastName: string;
  surname: string;
  email: string;
}

export interface Login {
  email: string;
  password: string;
}
