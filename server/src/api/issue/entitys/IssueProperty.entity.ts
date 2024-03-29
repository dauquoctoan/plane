import sequelize from 'sequelize';
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { DEFAULT_PROPS } from 'src/constants/entity-constant';

@Table({tableName:'IssuePropertys'})
export class IssueProperty extends Model<IssueProperty> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;

    @ForeignKey(() => User)
    @Column({ allowNull: false, type: sequelize.UUID })
    user_id: string;

    @BelongsTo(() => User, { foreignKey: 'user_id' })
    user: User;

    @Column({
        allowNull: false, type: DataType.JSON, defaultValue: DEFAULT_PROPS.display_properties
    })
    display_properties: string;

    @Column({
        allowNull: false, type: DataType.JSON, defaultValue: DEFAULT_PROPS.display_filters
    })
    display_filters: string;

    @Column({
        allowNull: false, type: DataType.JSON, defaultValue: DEFAULT_PROPS.filters
    })
    filters: string;
}