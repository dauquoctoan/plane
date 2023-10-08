import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';

@Table
export class ProjectFavorite extends Model {
    @ForeignKey(() => User)
    @Column({ allowNull: false })
    user: string;
}