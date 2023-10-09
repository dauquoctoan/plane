import { Column, DataType, ForeignKey, Is, Model, Table } from 'sequelize-typescript';
import { APIToken } from 'src/api/api_token/entitys/APIToken.entity';
import { User } from 'src/api/user/entitys/User.entity';
import { SERVICE, STATUS } from 'src/constants/entity-constant';
import { INVALID_SERVICE, INVALID_STATUS } from 'src/constants/message-constant';

@Table
export class Importer extends Model {
    @Is('service', (value) => {
        if (!SERVICE.includes(value)) throw Error(INVALID_SERVICE)
    })
    @Column
    service: string;

    @Is('status', (value) => {
        if (!STATUS.includes(value)) throw Error(INVALID_STATUS)
    })
    @Column
    status: string;

    @ForeignKey(() => User)
    @Column({ allowNull: false })
    initiated_by: string;

    @Column({ type: DataType.JSON, defaultValue: {} })
    metadata: string;

    @Column({ type: DataType.JSON, defaultValue: {} })
    @Column
    config: string;

    @Column({ type: DataType.JSON, defaultValue: {} })
    @Column
    data: string;

    @ForeignKey(() => APIToken)
    @Column
    token: number;

    @Column({ type: DataType.JSON })
    imported_data: string;
}