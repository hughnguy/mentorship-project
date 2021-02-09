const ROOT_URL = '/';
const ERROR_URL = '/error';

export class Url {
  private readonly language: string;

  constructor(language = 'en') {
    this.language = language;
  }

  error() {
    return ERROR_URL;
  }

  root() {
    return ROOT_URL;
  }
}
