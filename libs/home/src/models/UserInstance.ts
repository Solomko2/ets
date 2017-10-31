import {UserFactory} from "./UserFactory";

export class UserInstance extends UserFactory {
  id: number;
  email: string;

  constructor() {
    super();
  }
}
