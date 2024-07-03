import { PartialType } from '@nestjs/swagger';

export class CreateIssueLinkDto {
  issue: number;
  title: string;
  url: string;
  metadata: string;
}

export class UpdateIssueLinkDto extends PartialType(CreateIssueLinkDto) {}
