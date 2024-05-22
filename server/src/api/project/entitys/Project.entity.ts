import { BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Is, Length, Model, Table } from 'sequelize-typescript';
import { Notification } from 'src/api/notification/entitys/Notification.entity';
import { Estimate } from 'src/api/estimate/entitys/Estimate.entity';
import { State } from 'src/api/state/entitys/state.entity';
import { User } from 'src/api/user/entitys/User.entity';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';
import { NETWORK } from 'src/constants/entity-constant';
import { INVALID_NETWORK } from 'src/constants/message-constant';
import { ProjectIdentifier } from './ProjectIdentifier.entity';
import sequelize from 'sequelize';
import { Issue } from 'src/api/issue/entitys/Issue.entity';
import { Label } from 'src/api/issue/entitys/Label.entity';
import { ProjectMember } from './ProjectMember.entity';
import { Cycle } from 'src/api/cycle/entitys/Cycle.entity';
import { Module } from 'src/api/module/entitys/Module.entity';
import { CycleUserProperties } from 'src/api/cycle/entitys/CycleUserProperties';
import { ModuleUserProperties } from 'src/api/module/entitys/ModuleUserProperties.entity';
import { ProjectFavorite } from './projectFavorite.entity';
import { ProjectView } from 'src/api/view/entitys/ProjectView.entity';
import { Page } from 'src/api/page/entitys/Page.entity';

@Table({tableName:'Projects'})
export class Project extends Model<Project> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;

    @HasOne(() => ProjectIdentifier, { foreignKey: 'projectId' })
    project: ProjectIdentifier;

    @HasMany(() => Label, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE", 
        foreignKey: 'project_id'
    })
    label: Label[];

    @HasMany(() => CycleUserProperties, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE", 
        foreignKey: 'project_id'
    })
    cycle_user_properties: CycleUserProperties[];

    @HasMany(() => Module, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        foreignKey: 'project_id'
    })
    module: Module[];


    @HasMany(() => ProjectFavorite, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        foreignKey: 'project_id'
    })
    project_favorite: ProjectFavorite[];

    
    @HasMany(() => ProjectFavorite, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        foreignKey: 'project_id'
    })
    pages: Page[];

    @HasMany(() => ProjectView, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        foreignKey: 'project_id'
    })
    project_views: ProjectView[];

    @HasMany(() => ModuleUserProperties, {
        foreignKey: 'project_id'
    })
    module_user_properties: ModuleUserProperties[];

    @HasMany(() => Cycle, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE", 
        foreignKey: 'project_id'
    })
    cycle: Cycle[];

    @HasMany(() => State, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE", foreignKey: 'project_id'
    })
    state: State[];

    @HasMany(() => Issue, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE", foreignKey: 'project_id'
    })
    issue: Issue[];

    @HasMany(() => ProjectMember, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE", foreignKey: 'project_id'
    })
    project_member: ProjectMember[];

    @HasMany(() => Notification, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    notifications: Notification[];

    @ForeignKey(() => User)
    @Column({ type: sequelize.UUID, allowNull: false })
    created_by: string;

    @BelongsTo(() => User, 'created_by')
    created_by_user: User;

    @ForeignKey(() => Estimate)
    @Column({ type: sequelize.UUID, allowNull: true })
    estimate_id: string;

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
    @Column({ type: sequelize.UUID, allowNull: false })
    workspace_id: string;

    @BelongsTo(() => Workspace, { foreignKey: 'workspace_id' })
    workspaces: Workspace;

    @Length({ max: 225 })
    @Column({ allowNull: false })
    name: string;

    @Column
    description: string;

    @Column({ type: DataType.JSON })
    description_text: string;

    @Column({ type: DataType.TEXT, defaultValue: "<p></p>" })
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