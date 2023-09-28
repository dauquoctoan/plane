import sequelize from 'sequelize';
import { Column, Model, Table} from 'sequelize-typescript';

@Table
export class Workspace extends Model{
    @Column
    name: string;
    
    @Column
    logo:string;
    
    @Column
    owner:string;
    
    @Column
    slug:string;
    
    @Column
    organization_size:string;
}