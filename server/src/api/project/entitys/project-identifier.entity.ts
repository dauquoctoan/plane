import { Column, ForeignKey, HasOne, Model, Table, Length, BelongsTo } from 'sequelize-typescript';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';
import { Project } from './project.entity';

@Table
export class ProjectIdentifier extends Model {
    @ForeignKey(() => Workspace)
    @Column({ allowNull: true })
    workspace: string;

    @BelongsTo(() => Project, 'id')
    project: Project;

    @Length({ max: 12 })
    @Column
    name: string;
}