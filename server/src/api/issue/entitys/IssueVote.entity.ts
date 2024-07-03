import { Column, ForeignKey, Is, Model, Table } from 'sequelize-typescript';
import { Issue } from './Issue.entity';
import { User } from 'src/api/user/entitys/User.entity';
import { VOTE } from 'src/constants/entity-constant';
import { INVALID_VOTE } from 'src/constants/message-constant';
import sequelize from 'sequelize';

@Table({ tableName: 'IssueVotes' })
export class IssueVote extends Model<IssueVote> {
  @Column({
    type: sequelize.UUID,
    defaultValue: sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => Issue)
  @Column({ type: sequelize.UUID, allowNull: true })
  issue: string;

  @ForeignKey(() => User)
  @Column({ allowNull: false, type: sequelize.UUID })
  actor: string;

  @Is('vote', value => {
    if (!VOTE.includes(value)) throw Error(INVALID_VOTE);
  })
  @Column({ defaultValue: 1 })
  vote: string;
}
