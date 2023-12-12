import { BelongsTo, Column, DataType, ForeignKey, HasMany, Length, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { CycleIssue } from './CycleIssue.entity';
import { CycleFavorite } from './CycleFavorite.entity';
import sequelize from 'sequelize';

@Table
export class Cycle extends Model<Cycle> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;

    @ForeignKey(() => User)
    @Column({ type: sequelize.UUID, allowNull: true })
    owned_by: string;

    /* ================================================== */

    @BelongsTo(() => User, {foreignKey:'owned_by'})
    user: User;

    @HasMany(() => CycleIssue)
    cycle_issues: CycleIssue[];

    @HasMany(() => CycleFavorite)
    cycle_favorites: CycleFavorite[];

    @Length({ max: 255 })
    @Column({ allowNull: false })
    name: string;

    @Column({ type: DataType.TEXT })
    description: string;

    @Column
    start_date: Date;

    @Column
    end_date: Date;

    @Column({ type: DataType.JSON, defaultValue: {} })
    view_props: string;

    @Column({ defaultValue: 65535, type: DataType.FLOAT })
    sort_order: number;
}