import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class FileAsset extends Model {
    @Column
    attributes: string;

    @Column
    asset: string;

    @Column
    workspace: string;
}