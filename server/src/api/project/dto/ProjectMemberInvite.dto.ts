export class CreateProjectMemberInviteDto {
    email: string;
    accepted: boolean;
    token: string;
    message: string;
    responded_at: Date;
    role: number;
}
export class UpdateProjectMemberInviteDto {

}