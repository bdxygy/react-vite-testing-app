export type UserDomainT = {
  name: string;
  age: number;
  email: string;
};

export class UserDomain {
  constructor(newUser: UserDomainT) {
    Object.assign(this, newUser);
  }
}
