import { Column, DataType, ForeignKey, Is, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { MODULE_STATUS } from 'src/constants/entity-constant';
import { INVALID_MODULE_STATUS, INVALID_STATUS } from 'src/constants/message-constant';

@Table
export class Module extends Model {
    @ForeignKey(() => User)
    @Column({ allowNull: false })
    lead: string;

    @ForeignKey(() => User)
    @Column
    members: string;

    // @Column({ allowNull: false })
    // name: string;

    // @Column
    // description: string;

    // @Column({ type: DataType.JSON })
    // description_text: string;

    // @Column({ type: DataType.JSON })
    // description_html: string;

    // @Column
    // start_date: Date;

    // @Column
    // target_date: Date;

    // @Is('status', (value) => {
    //     if (!MODULE_STATUS.includes(value)) throw Error(INVALID_MODULE_STATUS)
    // })
    // @Column({ defaultValue: 'planned' })
    // status: string;

    // @Column({ type: DataType.JSON, defaultValue: {} })
    // view_props: string;

    // @Column({ type: DataType.FLOAT })
    // sort_order: number;
}