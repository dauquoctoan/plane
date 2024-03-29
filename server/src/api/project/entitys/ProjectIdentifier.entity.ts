import { Column, ForeignKey, HasOne, Model, Table, Length, BelongsTo } from 'sequelize-typescript';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';
import { Project } from './Project.entity';
import sequelize from 'sequelize';

@Table({tableName:'ProjectIdentifiers'})
export class ProjectIdentifier extends Model<ProjectIdentifier> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;

    @ForeignKey(() => Workspace)
    @Column({ type: sequelize.UUID, allowNull: true })
    workspace_id: string;

    @BelongsTo(() => Workspace, {foreignKey:'workspace_id'})
    workspace: Workspace;

    @ForeignKey(() => Project)
    @Column({ type: sequelize.UUID, allowNull: true })
    projectId: string;

    @BelongsTo(() => Project)
    project: Project;

    @Length({ max: 12 })
    @Column
    name: string;
}