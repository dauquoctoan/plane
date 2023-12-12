import { Column, ForeignKey, Length, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { IssueComment } from './IssueComment.entity';
import sequelize from 'sequelize';

@Table
export class CommentReaction extends Model<CommentReaction> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;

    @ForeignKey(() => User)
    @Column({ type: sequelize.UUID, allowNull: true })
    actor: string;

    @ForeignKey((() => IssueComment))
    @Column({ type: sequelize.UUID, allowNull: true })
    comment: string;

    @Length({ max: 255 })
    @Column
    reaction: string;
}