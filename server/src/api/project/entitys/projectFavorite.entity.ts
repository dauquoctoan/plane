import sequelize from 'sequelize';
import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';

@Table
export class ProjectFavorite extends Model<ProjectFavorite> {
    @ForeignKey(() => User)
    @Column({ allowNull: false, type: sequelize.UUID })
    user_id: string;

    @BelongsTo(() => User,'user_id')
    user: User;
}