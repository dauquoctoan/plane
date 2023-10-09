import sequelize from 'sequelize';
import { BelongsToMany, Column, CreatedAt, DataType, Length, Model, Table } from 'sequelize-typescript';
import { Issue } from 'src/api/issue/entitys/Issue.entity';
import { IssueAssignee } from 'src/api/issue/entitys/IssueAssignee.entity';
import { Team } from 'src/api/workspace/entitys/Team.entity';
import { TeamMember } from 'src/api/workspace/entitys/TeamMember.entity';
import { DEFAULT_ONBOARDING } from 'src/constants/entity-constant';

@Table
export class User extends Model {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: number;

    @BelongsToMany(() => Team, () => TeamMember)
    Team: Team[];

    @BelongsToMany(() => Issue, () => IssueAssignee)
    issue: Issue[];

    @Length({ min: 0, max: 128 })
    @Column({ allowNull: false, unique: true })
    username: string;

    @Length({ min: 0, max: 255 })
    @Column
    mobileNumber: string;

    @Length({ min: 0, max: 255 })
    @Column({ unique: true })
    email: string;

    @Length({ min: 0, max: 255 })
    @Column
    first_name: string;

    @Length({ min: 0, max: 255 })
    @Column
    last_name: string;

    @Length({ min: 0, max: 255 })
    @Column
    avatar: string;

    @Length({ min: 0, max: 800 })
    @Column
    cover_image: string;

    @Length({ min: 0, max: 255 })
    @Column
    last_location: string;

    @Length({ min: 0, max: 255 })
    @Column
    created_location: string;

    @Column({ defaultValue: false })
    is_superuser: boolean;

    @Column({ defaultValue: false })
    is_managed: boolean;

    @Column({ defaultValue: false })
    is_password_expired: boolean;

    @Column({ defaultValue: true })
    is_active: boolean;

    @Column({ defaultValue: false })
    is_staff: boolean;

    @Column({ defaultValue: false })
    is_email_verified: boolean;

    @Column({ defaultValue: false })
    is_password_autoset: boolean;

    @Column({ defaultValue: false })
    is_onboarded: boolean;

    @Length({ min: 0, max: 64 })
    @Column
    token: string;

    @Length({ min: 0, max: 255 })
    @Column({ defaultValue: 'VIETNAMESE' })
    billing_address_country: string;

    @Column
    billing_address: string;

    @Column
    has_billing_address: string;

    // @Column
    // USER_TIMEZONE_CHOICES:string;

    // @Column
    // user_timezone:string;

    @CreatedAt
    last_active: Date;

    @CreatedAt
    last_login_time: Date;

    @CreatedAt
    last_logout_time: Date;

    @Length({ min: 0, max: 255 })
    @Column
    last_login_ip: string;

    @Length({ min: 0, max: 255 })
    @Column
    last_logout_ip: string;

    @Length({ min: 0, max: 20 })
    @Column({ defaultValue: 'email' })
    last_login_medium: string;

    @Column
    last_login_uagent: string;

    @Column
    token_updated_at: Date;

    @Column({ type: DataType.BIGINT })
    last_workspace_id: number;

    @Column({ type: DataType.JSON })
    my_issues_prop: string;

    @Length({ min: 0, max: 300 })
    @Column
    role: string;

    @Column({ defaultValue: false })
    is_bot: boolean;

    @Column({ type: DataType.JSON, defaultValue: {} })
    theme: string;

    @Length({ min: 0, max: 300 })
    @Column({ defaultValue: '' })
    display_name: string;

    @Column({ defaultValue: false })
    is_tour_completed: boolean;

    @Column({ type: DataType.JSON, defaultValue: DEFAULT_ONBOARDING })
    onboarding_step: string;
}