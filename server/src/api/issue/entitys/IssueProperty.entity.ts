import sequelize from 'sequelize';
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';

@Table
export class IssueProperty extends Model<IssueProperty> {
    @ForeignKey(() => User)
    @Column({ allowNull: false, type: sequelize.UUID })
    user_id: string;

    @BelongsTo(() => User, {foreignKey:'user_id'})
    user: User;

    @Column({ allowNull: false, type: DataType.JSON, defaultValue: {} })
    properties: string;
}