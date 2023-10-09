import { Column, ForeignKey, Length, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { IssueComment } from './IssueComment.entity';

@Table
export class CommentReaction extends Model {
    @ForeignKey(() => User)
    @Column
    actor: string;

    @ForeignKey((() => IssueComment))
    @Column
    comment: number;

    @Length({ max: 255 })
    @Column
    reaction: string;
}