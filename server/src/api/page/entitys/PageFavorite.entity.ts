import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { Page } from './Page.entity';

@Table
export class PageFavorite extends Model {
    @ForeignKey(() => User)
    @Column
    user: string;

    @ForeignKey(() => Page)
    @Column
    page: number;
}