import sequelize from 'sequelize';
import { Column, DataType, ForeignKey, Is, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';
import { USER_TYPE } from 'src/constants/entity-constant';
import { INVALID_USER_TYPE } from 'src/constants/message-constant';

@Table
export class APIToken extends Model {
    @ForeignKey(() => Workspace)
    @Column
    workspace: number;

    @ForeignKey(() => User)
    @Column
    user: string;

    // @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4 })
    // token: string;

    // @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4 })
    // label: string;

    // @Is('user_type', (value) => {
    //     if (!USER_TYPE.includes(value)) throw Error(INVALID_USER_TYPE)
    // })
    // @Column
    // user_type: number;
}