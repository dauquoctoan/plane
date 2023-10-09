import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { Cycle } from './Cycle.entity';

@Table
export class CycleFavorite extends Model {
    @ForeignKey(() => User)
    @Column
    user: string;

    @ForeignKey(() => Cycle)
    @Column
    cycle: number;
}