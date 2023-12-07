import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { Cycle } from './Cycle.entity';
import sequelize from 'sequelize';

@Table
export class CycleFavorite extends Model<CycleFavorite> {
    /**
    * !FK
    */

    @ForeignKey(() => User)
    @Column({ type: sequelize.UUID })
    user_id: string;

    @ForeignKey(() => Cycle)
    @Column
    cycle_id: number;

    /**
    * ! RELATIONSHIP
    */

    @BelongsTo(() => User,{foreignKey:'user_id'})
    user: User;


    @BelongsTo(() => Cycle,{foreignKey:'cycle_id'})
    cycle: Cycle;
}