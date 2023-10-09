import { PartialType } from "@nestjs/swagger";

export class CreateCycleFavoriteDto {
    user: string;
    cycle: number;
}
export class UpdateCycleFavoriteDto extends PartialType(CreateCycleFavoriteDto) { }