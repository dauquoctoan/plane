import { Column, ForeignKey, HasOne, Model, Table, Length } from 'sequelize-typescript';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';
import { Project } from './Project.entity';

@Table
export class ProjectIdentifier extends Model {
    @ForeignKey(() => Workspace)
    @Column({ allowNull: true })
    workspace: string;

    @HasOne(() => Project)
    @Column
    project: string;

    @Length({ max: 12 })
    @Column
    name: string;
}