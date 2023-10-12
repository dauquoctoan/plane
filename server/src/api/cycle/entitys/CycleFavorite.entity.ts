import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { Cycle } from './Cycle.entity';
import sequelize from 'sequelize';

@Table
export class CycleFavorite extends Model {
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

    @BelongsTo(() => User)
    user: User;


    @BelongsTo(() => Cycle)
    cycle: Cycle;
}