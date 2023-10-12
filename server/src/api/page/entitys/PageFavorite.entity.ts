import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { Page } from './Page.entity';
import sequelize from 'sequelize';

@Table
export class PageFavorite extends Model {
    @ForeignKey(() => User)
    @Column({ type: sequelize.UUID })
    user_id: string;

    @BelongsTo(() => User)
    user: User;

    @ForeignKey(() => Page)
    @Column
    page_id: number;

    @BelongsTo(() => Page)
    page: Page;
}