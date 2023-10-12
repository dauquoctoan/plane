import { Column, ForeignKey, Is, Model, Table } from 'sequelize-typescript';
import { Issue } from './Issue.entity';
import { User } from 'src/api/user/entitys/User.entity';
import { VOTE } from 'src/constants/entity-constant';
import { INVALID_VOTE } from 'src/constants/message-constant';
import sequelize from 'sequelize';

@Table
export class IssueVote extends Model {
    @ForeignKey(() => Issue)
    @Column({ allowNull: false })
    issue: number;

    @ForeignKey(() => User)
    @Column({ allowNull: false, type: sequelize.UUID })
    actor: string;

    @Is('vote', (value) => {
        if (!VOTE.includes(value)) throw Error(INVALID_VOTE)
    })
    @Column({ defaultValue: 1 })
    vote: string;
}