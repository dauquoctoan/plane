export class CreateAuthDto {}

export class AuthenEndPointDto {
  type: string;
  audience?: string;
  idToken: string;
}
