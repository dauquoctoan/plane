import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';

@Table
export class IssueProperty extends Model {
    @ForeignKey(() => User)
    @Column({ allowNull: false })
    user: string;
    //thieu

    @Column({ allowNull: false, type: DataType.JSON, defaultValue: {} })
    properties: string;
}