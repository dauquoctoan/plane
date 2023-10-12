import { BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Is, Length, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Estimate } from 'src/api/estimate/entitys/Estimate.entity';
import { State } from 'src/api/state/entitys/State.entity';
import { User } from 'src/api/user/entitys/User.entity';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';
import { NETWORK } from 'src/constants/entity-constant';
import { INVALID_NETWORK } from 'src/constants/message-constant';
import { ProjectIdentifier } from './ProjectIdentifier.entity';
import sequelize from 'sequelize';
import { Notification } from 'src/api/notification/entitys/Notification.entity';

@Table
export class Project extends Model {
    @HasOne(() => ProjectIdentifier, { foreignKey: 'projectId' })
    project: ProjectIdentifier;

    @HasMany(() => Notification)
    notifications: Notification[];

    @ForeignKey(() => Estimate)
    @Column({ allowNull: false })
    estimate_id: number;

    @BelongsTo(() => Estimate)
    estimate: Estimate;

    @ForeignKey(() => State)
    @Column({ allowNull: false })
    default_state: number;

    @BelongsTo(() => State)
    state: State;

    @ForeignKey(() => User)
    @Column({ type: sequelize.UUID })
    default_assignee: string;

    @BelongsTo(() => User)
    default_assignee_user: User;

    @ForeignKey(() => User)
    @Column({ type: sequelize.UUID })
    project_lead: string;

    @BelongsTo(() => User)
    project_lead_user: User;


    @ForeignKey(() => Workspace)
    @Column({ allowNull: false })
    workspace: number;

    @BelongsTo(() => Workspace)
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
    network: string;

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

    @Column({ defaultValue: 0, type: DataType.INTEGER })
    archive_in: number;

    @Column({ defaultValue: 0, type: DataType.INTEGER })
    close_in: number;
}