import { Column, Model, Table} from 'sequelize-typescript';

@Table
export class WorkspaceTheme extends Model{
    @Column
    workspace: string;
    
    @Column
    name:string;
    
    @Column
    actor:string;
    
    @Column
    colors:string;
}