import { Column, ForeignKey, HasOne, Model, Table, Length, BelongsTo } from 'sequelize-typescript';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';
import { Project } from './Project.entity';

@Table
export class ProjectIdentifier extends Model {
    @ForeignKey(() => Workspace)
    @Column({ allowNull: true })
    workspace: number;

    // @BelongsTo(() => Project)
    // @Column
    // project: Project;

    // @Length({ max: 12 })
    // @Column
    // name: string;
}