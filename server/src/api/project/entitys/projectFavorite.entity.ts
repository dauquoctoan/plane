import sequelize from 'sequelize';
import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';
import { Project } from './Project.entity';

@Table({tableName:'ProjectFavorites'})
export class ProjectFavorite extends Model<ProjectFavorite> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;
    
    @ForeignKey(() => User)
    @Column({ type: sequelize.UUID })
    user_id: string;

    @ForeignKey(() => Workspace)
    @Column({ type: sequelize.UUID })
    workspace_id: string;

    @ForeignKey(() => Project)
    @Column({ type: sequelize.UUID })
    project_id: string;

    @BelongsTo(() => Project, 'project_id')
    project: Project;

    @BelongsTo(() => User, 'user_id')
    user: User;

    @BelongsTo(() => Workspace, 'workspace_id')
    workspace: Workspace;
}