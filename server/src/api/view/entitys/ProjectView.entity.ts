import sequelize from 'sequelize';
import { BelongsTo, Column, DataType, ForeignKey, Is, Length, Model, Table } from 'sequelize-typescript';
import { Project } from 'src/api/project/entitys/Project.entity';
import { User } from 'src/api/user/entitys/User.entity';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';
import { ACCESS } from 'src/constants/entity-constant';
import { INVALID_ACCESS } from 'src/constants/message-constant';

@Table({tableName:'ProjectViews'})
export class ProjectView extends Model<ProjectView> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;
    /**
    * ! table GlobalView
    * @ForeignKey Workspace
    */

    /* ================================================== */

    @ForeignKey(() => Workspace)
    @Column({ type: sequelize.UUID, allowNull: false })
    workspace_id: string;

    @ForeignKey(() => User)
    @Column({ type: sequelize.UUID, allowNull: false  })
    created_at: string;

    @BelongsTo(() => User, {foreignKey:'created_at'})
    creator : User;

    @BelongsTo(() => Workspace, { foreignKey: 'workspace_id' })
    workspace: Workspace;

    @ForeignKey(() => Project)
    @Column({ type: sequelize.UUID, allowNull: false })
    project_id: string;

    @BelongsTo(() => Project, { foreignKey: 'project_id' })
    project: Project;

    @Length({ max: 255 })
    @Column({ type: sequelize.UUID, allowNull: false })
    name: string;

    @Column
    description: string;

    @Column({ type: DataType.JSON })
    query: string;

    @Is('access', (value) => {
        if (!ACCESS.includes(value)) {
            throw new Error(INVALID_ACCESS);
        }
    })
    @Column({ defaultValue: 1 })
    access: string;

    @Column({ type: DataType.JSON, defaultValue: {} })
    query_data: string;
}