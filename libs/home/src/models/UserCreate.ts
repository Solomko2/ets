import {UserFactory} from "./UserFactory";

export class UserCreate extends UserFactory {
  email: string;
  password: string;

  constructor() {
    super();
  }
}
