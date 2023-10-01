import { Column, ForeignKey, Model, Table, Is, DataType} from 'sequelize-typescript';
import { Workspace } from './Workspace.entity';
import { User } from 'src/api/user/entitys/User.entity';
import { DEFAULT_PROPS, INVALID_ROLE, ROLE } from 'src/constants/entity-constant';

@Table
export class WorkspaceMember extends Model{
    @ForeignKey(() => Workspace)
    @Column({allowNull:false})
    workspace: number;
    
    @ForeignKey(() => User)
    @Column({allowNull:false})
    member: number;
    
    @Is('role', (value) => {
        if (!ROLE.includes(value)) {
        throw new Error(INVALID_ROLE);
        }
    })
    @Column({defaultValue: 10})
    role: number;
    
    @Column({type: DataType.TEXT})
    company_role:string;
    
    @Column({type: DataType.JSON, defaultValue: DEFAULT_PROPS})
    view_props:string;

    @Column({type: DataType.JSON, defaultValue: DEFAULT_PROPS})
    default_props:string;
}