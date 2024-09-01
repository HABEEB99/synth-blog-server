import dotenv from "dotenv";

dotenv.config({});

class Config {
  public JWT_TOKEN: string | undefined;
  public NODE_ENV: string | undefined;
  public SECRET_KEY_ONE: string | undefined;
  public SECRET_KEY_TWO: string | undefined;
  public CLIENT_URL: string | undefined;

  constructor() {
    this.JWT_TOKEN = process.env.JWT_TOKEN || "98843";
    this.NODE_ENV = process.env.NODE_ENV || "";
    this.SECRET_KEY_ONE = process.env.SECRET_KEY_ONE || "";
    this.SECRET_KEY_TWO = process.env.SECRET_KEY_TWO || "";
  }

  public validateConfig(): void {
    for (const [key, value] of Object.entries(this)) {
      if (value === undefined) {
        throw new Error(`Configuration ${key} is undefined`);
      }
    }
  }
}

export const config: Config = new Config();
