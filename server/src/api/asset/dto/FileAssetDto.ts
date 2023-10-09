import { PartialType } from "@nestjs/mapped-types";

export class CreateFileAssetDto {
    workspace: number;
    attributes: string;
    asset: string;
}
export class UpdateFileAssetDto extends PartialType(CreateFileAssetDto) {

}