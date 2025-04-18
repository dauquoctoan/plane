import sequelize from 'sequelize';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Is,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { MEDIUM } from 'src/constants/entity-constant';
import { INVALID_MEDIUM } from 'src/constants/message-constant';

@Table({ tableName: 'SocialLoginConnections' })
export class SocialLoginConnection extends Model<SocialLoginConnection> {
  @Column({
    type: sequelize.UUID,
    defaultValue: sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => User)
  @Column({ allowNull: false, type: sequelize.UUID })
  user_id: string;

  @BelongsTo(() => User, { foreignKey: 'user_id' })
  user: User;

  @Is('medium', value => {
    if (!MEDIUM.includes(value)) throw Error(INVALID_MEDIUM);
  })
  @Column
  medium: string;

  @UpdatedAt
  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  last_login_at: Date;

  @UpdatedAt
  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  last_received_at: Date;

  @Column({ type: DataType.JSON })
  token_data: string;

  @Column({ type: DataType.JSON })
  extra_data: string;
}
