import bcrypt from "bcrypt";

const saltRounds = 10;

export default class {
  public static hashPassword(plaintext: string) {
    return bcrypt.hashSync(plaintext, saltRounds);
  }

  public static checkpassword(plaintext: string, hashed: string) {
    return bcrypt.compareSync(plaintext, hashed);
  }
}