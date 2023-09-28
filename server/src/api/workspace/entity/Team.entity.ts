import sequelize from 'sequelize';
import { Column, Model, Table} from 'sequelize-typescript';

@Table
export class Team extends Model{
    @Column
    name: string;
    
    @Column
    description:string;
    
    @Column
    members:string;
    
    @Column
    workspace:string;
}