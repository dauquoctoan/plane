import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { Cycle } from './Cycle.entity';
import sequelize from 'sequelize';

@Table({tableName:'CycleFavorites'})
export class CycleFavorite extends Model<CycleFavorite> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;
    /**
    * !FK
    */

    @ForeignKey(() => User)
    @Column({ type: sequelize.UUID, allowNull: true })
    user_id: string;

    @ForeignKey(() => Cycle)
    @Column({ type: sequelize.UUID, allowNull: true })
    cycle_id: string;

    /**
    * ! RELATIONSHIP
    */

    @BelongsTo(() => User,{foreignKey:'user_id'})
    user: User;

    @BelongsTo(() => Cycle, {foreignKey:'cycle_id'})
    cycle: Cycle;
}