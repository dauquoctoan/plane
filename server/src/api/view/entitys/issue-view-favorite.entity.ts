import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { IssueView } from './issue-view.entity';

@Table
export class IssueViewFavorite extends Model {
    @ForeignKey(() => User)
    @Column
    user: string;

    @ForeignKey(() => IssueView)
    @Column
    view: string;
}

