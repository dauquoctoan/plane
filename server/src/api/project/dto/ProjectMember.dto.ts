import { PartialType } from "@nestjs/swagger";

export class CreateProjectMemberDto {
    id?: string;
    member: string;
    project_id: string;
    workspace_id: string;
    role: number;
    comment?: string;
    view_props?: string;
    default_props?: string;
    preferences?: string;
    sort_order?: string;
}
export class UpdateProjectMemberDto extends  PartialType(CreateProjectMemberDto){

}