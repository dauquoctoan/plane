import { Column, DataType, HasMany, Is, Length, Model, Table } from 'sequelize-typescript';
import { ACCESS, ROLE } from 'src/constants/entity-constant';
import { INVALID_ACCESS } from 'src/constants/message-constant';
import { IssueViewFavorite } from './IssueViewFavorite.entity';

@Table
export class IssueView extends Model {
    @Length({ max: 255 })
    @Column({ allowNull: false })
    name: string;

    @HasMany(() => IssueViewFavorite)
    issue_view_favorites: IssueViewFavorite[];

    @Column
    description: string;

    @Column({ type: DataType.JSON })
    query: String;

    @Is('access', (value) => {
        if (!ACCESS.includes(value)) {
            throw new Error(INVALID_ACCESS);
        }
    })
    @Column({ defaultValue: 1 })
    access: number;

    @Column({ type: DataType.JSON, defaultValue: {} })
    query_data: string;
}