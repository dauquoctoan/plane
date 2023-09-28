import sequelize from 'sequelize';
import { Column, Model, Table} from 'sequelize-typescript';

@Table
export class WorkspaceMember extends Model{
    @Column
    workspace: string;
    
    @Column
    member:string;
    
    @Column
    role:string;
    
    @Column
    company_role:string;
    
    @Column
    view_props:string;

    @Column
    default_props:string;
}