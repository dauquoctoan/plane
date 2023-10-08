import { Column, DataType, ForeignKey, Is, Model, Table, UpdatedAt } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { MEDIUM } from 'src/constants/entity-constant';
import { INVALID_MEDIUM } from 'src/constants/message-constant';

@Table
export class SocialLoginConnection extends Model {
    @Is('medium', (value) => {
        if (!MEDIUM.includes(value)) throw Error(INVALID_MEDIUM)
    })
    @Column
    medium: string;

    @UpdatedAt
    @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
    last_login_at: Date;

    @UpdatedAt
    @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
    last_received_at: Date;

    @ForeignKey(() => User)
    @Column({ allowNull: false })
    user: string;

    @Column({ type: DataType.JSON })
    token_data: string;

    @Column({ type: DataType.JSON })
    extra_data: string;
}