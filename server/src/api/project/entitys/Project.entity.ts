import { AllowNull, BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Is, Length, Model, Table } from 'sequelize-typescript';
import { Notification } from 'src/api/notification/entitys/Notification.entity';
import { Estimate } from 'src/api/estimate/entitys/Estimate.entity';
import { State } from 'src/api/state/entitys/State.entity';
import { User } from 'src/api/user/entitys/User.entity';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';
import { NETWORK } from 'src/constants/entity-constant';
import { INVALID_NETWORK } from 'src/constants/message-constant';
import { ProjectIdentifier } from './ProjectIdentifier.entity';
import sequelize from 'sequelize';
import { Issue } from 'src/api/issue/entitys/Issue.entity';
import { Label } from 'src/api/issue/entitys/Label.entity';

@Table
export class Project extends Model {
    @HasOne(() => ProjectIdentifier, { foreignKey: 'projectId' })
    project: ProjectIdentifier;

    @HasMany(() => Label, { foreignKey: 'project_id' })
    label: Label[];

    @HasMany(() => State, { foreignKey: 'project_id' })
    state: State[];

    @HasMany(() => Issue, { foreignKey: 'project_id' })
    issue: Issue[];

    @HasMany(() => Notification)
    notifications: Notification[];

    @ForeignKey(() => User)
    @Column({ type: sequelize.UUID, allowNull: false })
    created_by: string;

    @BelongsTo(() => User, 'created_by')
    created_by_user: User;

    @ForeignKey(() => Estimate)
    @Column({ allowNull: true })
    estimate_id: number;

    @BelongsTo(() => Estimate, { foreignKey: 'estimate_id' })
    estimate: Estimate;

    @ForeignKey(() => User)
    @Column({ type: sequelize.UUID, allowNull: true })
    default_assignee: string;

    @BelongsTo(() => User, { foreignKey: 'default_assignee' })
    default_assignee_user: User;

    @ForeignKey(() => User)
    @Column({ type: sequelize.UUID, allowNull: true })
    project_lead: string;

    @BelongsTo(() => User, { foreignKey: 'project_lead' })
    project_lead_user: User;


    @ForeignKey(() => Workspace)
    @Column({ allowNull: false })
    workspace_id: number;

    @BelongsTo(() => Workspace, { foreignKey: 'workspace_id' })
    workspaces: Workspace;

    @Length({ max: 225 })
    @Column({ allowNull: false })
    name: string;

    @Column
    description: string;

    @Column({ type: DataType.JSON })
    description_text: string;

    @Column({ type: DataType.JSON })
    description_html: string;

    @Is('network', (value) => {
        if (!NETWORK.includes(value)) {
            throw new Error(INVALID_NETWORK);
        }
    })
    @Column({ defaultValue: 1 })
    network: number;

    @Length({ max: 12 })
    @Column({ allowNull: false })
    identifier: string;

    @Length({ max: 225 })
    @Column
    emoji: string;

    @Column({ type: DataType.JSON })
    icon_prop: string;

    @Column({ defaultValue: true })
    module_view: boolean;

    @Column({ defaultValue: true })
    cycle_view: boolean;

    @Column({ defaultValue: true })
    issue_views_view: boolean;

    @Column({ defaultValue: true })
    page_view: boolean;

    @Column({ defaultValue: true })
    inbox_view: boolean;

    @Length({ max: 800 })
    @Column({ type: DataType.TEXT })
    cover_image: string;

    @Column({ defaultValue: 0 })
    archive_in: number;

    @Column({ defaultValue: 0 })
    close_in: number;
}