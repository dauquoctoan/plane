import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class ProjectPublicMember extends Model{
    @Column
    member: string;
}