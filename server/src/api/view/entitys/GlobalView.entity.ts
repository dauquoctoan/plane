import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';

@Table
export class GlobalView extends Model {
    @ForeignKey(() => Workspace)
    @Column
    workspace: string;

    @Column
    name: string;

    @Column
    description: string;

    @Column
    query: string;

    @Column
    access: string;

    @Column
    query_data: string;
}