interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  position: string[];
  roles: string[];
  rate: number;
  locked: number;
  created_at: string;
  updated_at: string;
  token: string;
}

export class User implements IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  position: string[];
  roles: string[];
  rate: number;
  locked: number;
  created_at: string;
  updated_at: string;
  token: string;

  constructor() {}
}
