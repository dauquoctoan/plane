import { PartialType } from '@nestjs/swagger';

export class CreateAPITokenDto {
  token: string;
  label: string;
  user: string;
  user_type: string;
  workspace: string;
}
export class UpdateAPITokenDto extends PartialType(CreateAPITokenDto) {}
