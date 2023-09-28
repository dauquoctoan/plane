import sequelize from 'sequelize';
import { Column, Model, Table} from 'sequelize-typescript';

@Table
export class WorkspaceMemberInvite extends Model{
    @Column
    workspace: string;
    
    @Column
    email:string;
    
    @Column
    accepted:string;
    
    @Column
    token:string;
    
    @Column
    message:string;

    @Column
    responded_at:string;

    @Column
    role:string;
}