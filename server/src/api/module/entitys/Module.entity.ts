import sequelize from 'sequelize';
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Is, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { MODULE_STATUS } from 'src/constants/entity-constant';
import { INVALID_MODULE_STATUS, INVALID_STATUS } from 'src/constants/message-constant';
import { ModuleIssue } from './ModuleIssue.entity';
import { ModuleLink } from './ModuleLink.entity';
import { ModuleMember } from './ModuleMember.entity';
import { Project } from 'src/api/project/entitys/Project.entity';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';
import { ModuleUserProperties } from './ModuleUserProperties.entity';

@Table
export class Module extends Model<Module> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;

    @ForeignKey(() => User)
    @Column({ allowNull: true, type: sequelize.UUID })
    lead: string;

    @BelongsTo(() => User, {foreignKey: 'lead'})
    user_lead: User;

    @ForeignKey(() => Project)
    @Column({ type: sequelize.UUID, allowNull: false })
    project_id: string;

    @BelongsTo(() => Project, {foreignKey: 'project_id'})
    project: Project;

    @ForeignKey(() => Workspace)
    @Column({ type: sequelize.UUID, allowNull:false})
    workspace_id: string;

    @BelongsTo(() => Workspace, {foreignKey: 'workspace_id'})
    workspace: Workspace;

    @HasMany(() => ModuleIssue)
    module_issues: ModuleIssue[];

    @HasMany(() => ModuleLink)
    module_links: ModuleIssue[];

    @HasMany(() => ModuleMember)
    module_members: ModuleMember[];

    @HasMany(() => ModuleUserProperties,{foreignKey:'module_id'})
    module_user_properties: ModuleUserProperties[];

    @ForeignKey(() => User)
    @Column({ type: sequelize.UUID, allowNull: true })
    member: string;

    @BelongsTo(() => User,{foreignKey: 'member'})
    user_member: User;

    @Column({ allowNull: false })
    name: string;

    @Column({allowNull:true})
    description: string;

    @Column({ type: DataType.JSON, allowNull: true})
    description_text: string;

    @Column({ type: DataType.JSON, allowNull: true })
    description_html: string;

    @Column({allowNull: true})
    start_date: Date;

    @Column({allowNull:true})
    target_date: Date;

    @Is('status', (value) => {
        if (!MODULE_STATUS.includes(value)) throw Error(INVALID_MODULE_STATUS)
    })
    @Column({ defaultValue: 'planned' })
    status: string;

    @Column({ type: DataType.JSON, defaultValue: {} })
    view_props: string;

    @Column({ type: DataType.FLOAT, allowNull:true })
    sort_order: number;
}