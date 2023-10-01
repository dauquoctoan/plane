import sequelize from 'sequelize';
import { Column, Model, Table, Length, DataType, BelongsToMany, ForeignKey} from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { TeamMember } from './TeamMember.entity';
import { Workspace } from './Workspace.entity';

@Table
export class Team extends Model{
    @Length({min:0, max:225})
    @Column({allowNull:false})
    name: string;
    
    @Column({type: DataType.TEXT})
    description:string;
    
    @BelongsToMany(()=> User,()=> TeamMember)
    @Column({allowNull:false})
    members: User[];
    
    @ForeignKey(()=> Workspace)
    @Column({allowNull:false})
    workspace: number;
}