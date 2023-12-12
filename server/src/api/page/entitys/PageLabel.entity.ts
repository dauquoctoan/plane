import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Label } from 'src/api/issue/entitys/Label.entity';
import { Page } from './Page.entity';
import sequelize from 'sequelize';

@Table
export class PageLabel extends Model<PageLabel> {
    @ForeignKey(() => Label)
    @Column({ type: sequelize.UUID, allowNull: true })
    label: number;

    @ForeignKey(() => Page)
    @Column({ type: sequelize.UUID, allowNull: true })
    page: number;
}