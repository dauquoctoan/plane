import { Column, DataType, ForeignKey, Is, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { DEFAULT_PREFERENCES, DEFAULT_PROPS, INVALID_ROLE, ROLE } from 'src/constants/entity-constant';

@Table
export class ProjectMember extends Model {
    @ForeignKey(() => User)
    @Column({ allowNull: false })
    member: string;

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