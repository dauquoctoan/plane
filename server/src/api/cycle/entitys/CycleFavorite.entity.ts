import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { Cycle } from './Cycle.entity';

@Table
export class CycleFavorite extends Model {
    @ForeignKey(() => User)
    @Column
    user: string;
    //thieu

    @ForeignKey(() => Cycle)
    @Column
    cycle_id: number;

    @BelongsTo(() => Cycle)
    cycle: Cycle;
}