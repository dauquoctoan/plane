import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';

@Table
export class ProjectPublicMember extends Model {
    @ForeignKey(() => User)
    @Column({ allowNull: false })
    member: string;
}