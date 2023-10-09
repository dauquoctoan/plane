import { Column, ForeignKey, Is, Model, Table } from 'sequelize-typescript';
import { Issue } from './Issue.entity';
import { User } from 'src/api/user/entitys/User.entity';
import { VOTE } from 'src/constants/entity-constant';
import { INVALID_VOTE } from 'src/constants/message-constant';

@Table
export class IssueVote extends Model {
    @ForeignKey(() => Issue)
    @Column({ allowNull: false })
    issue: string;

    @ForeignKey(() => User)
    @Column({ allowNull: false })
    actor: string;

    @Is('vote', (value) => {
        if (!VOTE.includes(value)) throw Error(INVALID_VOTE)
    })
    @Column({ defaultValue: 1 })
    vote: string;
}