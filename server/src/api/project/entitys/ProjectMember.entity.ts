import sequelize from 'sequelize';
import { BelongsTo, Column, DataType, ForeignKey, Is, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { DEFAULT_PREFERENCES, DEFAULT_PROPS, ROLE } from 'src/constants/entity-constant';
import { INVALID_ROLE } from 'src/constants/message-constant';

@Table
export class ProjectMember extends Model<ProjectMember> {
    @ForeignKey(() => User)
    @Column({ allowNull: false, type: sequelize.UUID })
    member: string;

    @BelongsTo(() => User,{foreignKey:'member'})
    user: User;

    @Column
    comment: string;

    @Is('role', (value) => {
        if (!ROLE.includes(value)) {
            throw Error(INVALID_ROLE)
        }
    })
    @Column({ defaultValue: 10 })
    role: string;

    @Column({ type: DataType.JSON, defaultValue: DEFAULT_PROPS })
    view_props: string;

    @Column({ type: DataType.JSON, defaultValue: DEFAULT_PROPS })
    default_props: string;

    @Column({ type: DataType.JSON, defaultValue: DEFAULT_PREFERENCES })
    preferences: string;

    @Column({ defaultValue: 65535 })
    sort_order: string;
}