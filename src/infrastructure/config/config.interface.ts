export interface Config {
  MODE: 'DEV' | 'PROD';
  DB_HOST: string;
  DB_PORT: string;
  DB_NAME: string;
  DB_USER: string;
  DB_PASSWORD: string;
}
