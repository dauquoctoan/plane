import { Column, Model, Table} from 'sequelize-typescript';

@Table
export class IssueView extends Model{
    @Column
    name: string;
    
    @Column
    description:string;
    
    @Column
    query:string;
    
    @Column
    access:string;

    @Column
    query_data:string;
}