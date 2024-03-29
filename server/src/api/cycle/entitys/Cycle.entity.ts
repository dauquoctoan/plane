import { BelongsTo, Column, DataType, ForeignKey, HasMany, Length, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { CycleIssue } from './CycleIssue.entity';
import { CycleFavorite } from './CycleFavorite.entity';
import sequelize from 'sequelize';
import { Project } from 'src/api/project/entitys/Project.entity';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';
import { CycleUserProperties } from './CycleUserProperties';

@Table({tableName:'Cycles'})
export class Cycle extends Model<Cycle> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;

    @ForeignKey(() => User)
    @Column({ type: sequelize.UUID})
    owned_by: string;

    @ForeignKey(() => User)
    @Column({ type: sequelize.UUID })
    created_by: string;

    @ForeignKey(() => Project)
    @Column({ type: sequelize.UUID })
    project_id: string;

    @ForeignKey(() => Workspace)
    @Column({ type: sequelize.UUID })
    workspace_id: string;

    /* ================================================== */

    @BelongsTo(() => User, {foreignKey: 'owned_by'})
    user: User;

    @BelongsTo(() => Project, {
        foreignKey: 'project_id',
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    })
    project: Project;

    @BelongsTo(() => Workspace, {foreignKey: 'workspace_id'})
    workspace: Workspace;

    @BelongsTo(() => User, {foreignKey: 'created_by'})
    user_created: User;

    @HasMany(() => CycleIssue, {foreignKey: 'cycle_id'})
    cycle_issues: CycleIssue[];

    @HasMany(() => CycleUserProperties, {foreignKey: 'cycle_id'})
    cycle_user_properties: CycleUserProperties[];

    @HasMany(() => CycleFavorite, {foreignKey: 'cycle_id'})
    cycle_favorites: CycleFavorite[];

    @Length({ max: 255 })
    @Column({ allowNull: false })
    name: string;

    @Column({ type: DataType.TEXT })
    description: string;

    @Column
    start_date: Date;

    @Column
    end_date: Date;

    @Column({ type: DataType.JSON, defaultValue: {} })
    view_props: string;

    @Column({ defaultValue: 65535, type: DataType.FLOAT })
    sort_order: number;
}