export class User {
  id!: number;
  password!: string;
  accessToken!: string;

  verifyPassword(password: string): boolean {
    return this.password === password;
  }
}
