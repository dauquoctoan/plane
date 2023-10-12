import sequelize from 'sequelize';
import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { Project } from './Project.entity';

@Table
export class ProjectPublicMember extends Model {
    @ForeignKey(() => User)
    @Column({ allowNull: false, type: sequelize.UUID })
    member: string;

    @BelongsTo(() => User)
    user: User[];
}