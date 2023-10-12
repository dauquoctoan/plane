import { Column, ForeignKey, Length, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { IssueComment } from './IssueComment.entity';
import sequelize from 'sequelize';

@Table
export class CommentReaction extends Model {
    @ForeignKey(() => User)
    @Column({ type: sequelize.UUID })
    actor: string;

    @ForeignKey((() => IssueComment))
    @Column
    comment: number;

    @Length({ max: 255 })
    @Column
    reaction: string;
}