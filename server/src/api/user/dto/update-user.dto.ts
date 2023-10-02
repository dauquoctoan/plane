import { PartialType } from "@nestjs/mapped-types";
import { CreateStateDto } from "src/api/state/dto/create-state.dto";

export class UpdateUserDto extends PartialType(CreateStateDto) { }