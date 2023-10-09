import { Column, Model, Table, Length, ForeignKey, Index, DataType } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';

@Table
export class Workspace extends Model {
    @ForeignKey(() => User)
    @Column({ allowNull: false })
    owner: string;

    @Length({ max: 80 })
    @Column({ allowNull: false })
    name: string;

    @Column
    logo: string;

    @Index('slug-index')
    @Length({ max: 48 })
    @Column({ type: DataType.CHAR, unique: true })
    slug: string;

    @Length({ max: 20 })
    @Column
    organization_size: string;
}