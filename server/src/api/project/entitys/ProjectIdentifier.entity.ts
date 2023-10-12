import { Column, ForeignKey, HasOne, Model, Table, Length, BelongsTo } from 'sequelize-typescript';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';
import { Project } from './Project.entity';

@Table
export class ProjectIdentifier extends Model {
    @ForeignKey(() => Workspace)
    @Column({ allowNull: true })
    workspace_id: number;

    @BelongsTo(() => Workspace)
    workspace: Workspace;

    @ForeignKey(() => Project)
    @Column
    projectId: number;

    @BelongsTo(() => Project)
    project: Project;

    @Length({ max: 12 })
    @Column
    name: string;
}