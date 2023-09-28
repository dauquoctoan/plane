import { Column, Model, Table} from 'sequelize-typescript';

@Table
export class TeamMember extends Model{
    @Column
    workspace: string;
    
    @Column
    team:string;
    
    @Column
    member:string;
}