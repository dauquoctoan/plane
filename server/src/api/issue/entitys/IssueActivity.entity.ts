import { BelongsTo, Column, ForeignKey, Length, Model, Table } from 'sequelize-typescript';
import { Issue } from './Issue.entity';
import { IssueComment } from './IssueComment.entity';
import { User } from 'src/api/user/entitys/User.entity';
import sequelize from 'sequelize';

@Table({tableName:'IssueActivitys'})
export class IssueActivity extends Model<IssueActivity> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;
    /**
    * ! FK
    */
    @ForeignKey(() => Issue)
    @Column({ type: sequelize.UUID, allowNull: true })
    issue_id: string;

    @ForeignKey((() => IssueComment))
    @Column({ type: sequelize.UUID, allowNull: true })
    issue_comment_id: string;

    @ForeignKey(() => User)
    @Column({ type: sequelize.UUID, allowNull: true })
    actor: string;

    /**
    * ! RELATIONSHIP
    */

    @BelongsTo(() => IssueComment,{foreignKey:'issue_comment_id'})
    issue_comment: IssueComment;

    @BelongsTo(() => User, {foreignKey:'actor'})
    user: User;

    @BelongsTo(() => Issue,{foreignKey:'issue_id'})
    issue: Issue;

    /**
    * ! PR
    */

    @Length({ max: 255 })
    @Column({ defaultValue: "created" })
    verb: string;

    @Length({ max: 255 })
    @Column
    field: string;

    @Column
    old_value: string;

    @Column
    new_value: string;

    @Column
    comment: string;

    @Column
    attachments: string;

    @Column({ type: sequelize.UUID })
    old_identifier: string;

    @Column({ type: sequelize.UUID })
    new_identifier: string;

    @Column
    epoch: number;
}