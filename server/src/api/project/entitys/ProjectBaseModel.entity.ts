import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Project } from './Project.entity';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';

@Table
export class ProjectBaseModel extends Model {
    @ForeignKey(() => Project)
    @Column
    project: number;

    @ForeignKey(() => Workspace)
    @Column
    workspace: number;
}