import sequelize from 'sequelize';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Is,
  Model,
  Table,
} from 'sequelize-typescript';
import { APIToken } from 'src/api/api_token/entitys/APIToken.entity';
import { User } from 'src/api/user/entitys/User.entity';
import { SERVICE, STATUS } from 'src/constants/entity-constant';
import {
  INVALID_SERVICE,
  INVALID_STATUS,
} from 'src/constants/message-constant';

@Table({ tableName: 'Importers' })
export class Importer extends Model<Importer> {
  @Column({
    type: sequelize.UUID,
    defaultValue: sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  })
  id: string;

  /**
   * !Importer
   * @ForeignKey: token, initiated_by
   * @BelongsTo: APIToken, User;
   */

  /* ================================================== */

  /**
   * !FK: token, initiated_by
   */

  @ForeignKey(() => APIToken)
  @Column({ type: sequelize.UUID, allowNull: true })
  token: string;

  @ForeignKey(() => User)
  @Column({ type: sequelize.UUID, allowNull: false })
  initiated_by: string;

  /**
   * ! RELATIONSHIP
   * @BelongsTo: APIToken, User;
   */

  @BelongsTo(() => APIToken, { foreignKey: 'token' })
  api_token: APIToken;

  @BelongsTo(() => User, { foreignKey: 'initiated_by' })
  user: User;

  /**
   * ! PR
   */

  @Is('service', value => {
    if (!SERVICE.includes(value)) throw Error(INVALID_SERVICE);
  })
  @Column
  service: string;

  @Is('status', value => {
    if (!STATUS.includes(value)) throw Error(INVALID_STATUS);
  })
  @Column
  status: string;

  @Column({ type: DataType.JSON, defaultValue: {} })
  metadata: string;

  @Column({ type: DataType.JSON, defaultValue: {} })
  @Column
  config: string;

  @Column({ type: DataType.JSON, defaultValue: {} })
  @Column
  data: string;

  @Column({ type: DataType.JSON })
  imported_data: string;
}
