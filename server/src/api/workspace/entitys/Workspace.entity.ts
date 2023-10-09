import { Column, Model, Table, Length, ForeignKey, Index, DataType } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';

@Table
export class Workspace extends Model {
    @ForeignKey(() => User)
    @Column({ allowNull: false })
    owner: string;

    // @Length({ min: 0, max: 80 })
    // @Column({ allowNull: false })
    // name: string;

    // @Column
    // logo: string;

    // // @Index('workspace-slug')
    // @Length({ min: 0, max: 48 })
    // @Column({ unique: true, type: DataType.TEXT })
    // slug: string;

    // @Length({ min: 0, max: 20 })
    // @Column
    // organization_size: string;
}