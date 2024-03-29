import sequelize, { Optional } from 'sequelize';
import { BelongsTo, Column, DataType, ForeignKey, Is, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { DEFAULT_PREFERENCES, DEFAULT_PROPS, ROLE } from 'src/constants/entity-constant';
import { INVALID_ROLE } from 'src/constants/message-constant';
import { Project } from './Project.entity';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';

@Table({tableName:'ProjectMembers'})
export class ProjectMember extends Model<ProjectMember> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;

    @ForeignKey(() => User)
    @Column({ allowNull: false, type: sequelize.UUID })
    member: string;

    @ForeignKey(() => Project)
    @Column({ type: sequelize.UUID, allowNull: true })
    project_id: string;

    @ForeignKey(() => Workspace)
    @Column({ type: sequelize.UUID, allowNull: true })
    workspace_id: string;

    /* =================================== */

    @BelongsTo(() => Workspace, { foreignKey: 'workspace_id' })
    workspace: Workspace;

    @BelongsTo(() => Project, { foreignKey: 'project_id' })
    project: Project;

    @BelongsTo(() => User, { foreignKey: 'member' })
    user: User;

    @Column
    comment: string;

    @Is('role', (value) => {
        if (!ROLE.includes(value)) {
            throw Error(INVALID_ROLE)
        }
    })
    @Column({ defaultValue: 10 })
    role: number;

    @Column({ type: DataType.JSON, defaultValue: DEFAULT_PROPS })
    view_props: string;

    @Column({ type: DataType.JSON, defaultValue: DEFAULT_PROPS })
    default_props: string;

    @Column({ type: DataType.JSON, defaultValue: DEFAULT_PREFERENCES })
    preferences: string;

    @Column({ defaultValue: 65535 })
    sort_order: string;
}