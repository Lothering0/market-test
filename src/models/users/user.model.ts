export class User {
  id!: number;
  password!: string;
  accessToken!: string;
  balance!: number;

  validatePassword(password: string) {
    const PASSWORD_MIN_LENGTH = 8;
    return password.length >= PASSWORD_MIN_LENGTH;
  }

  setPassword(newPassword: string) {
    this.password = newPassword;
  }

  verifyPassword(password: string): boolean {
    return this.password === password;
  }

  canBuyItemWithPrice(price: number) {
    return this.balance >= price;
  }

  decreaseBalance(amount: number) {
    if (!this.canBuyItemWithPrice(amount)) {
      return;
    }

    this.balance -= amount;
  }
}
