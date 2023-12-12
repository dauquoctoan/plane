import sequelize from 'sequelize';
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Project } from 'src/api/project/entitys/Project.entity';
import { User } from 'src/api/user/entitys/User.entity';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';

@Table
export class Notification extends Model<Notification> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;

    @ForeignKey(() => Workspace)
    @Column({ type: sequelize.UUID, allowNull: false })
    workspace_id: string;

    @BelongsTo(() => Workspace, {foreignKey:'workspace_id'})
    workspace: Workspace;

    @ForeignKey(() => Project)
    @Column({ type: sequelize.UUID, allowNull: true })
    project_id: string;

    @BelongsTo(() => Project)
    project: Project;

    @ForeignKey(() => User)
    @Column({ type: sequelize.UUID })
    triggered_by: string;

    @BelongsTo(() => User)
    triggered_by_user: User;

    @ForeignKey(() => User)
    @Column({ allowNull: false, type: sequelize.UUID })
    receiver: string;

    @BelongsTo(() => User)
    receiver_user: User;

    @Column({ type: DataType.JSON })
    data: string;

    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, })
    entity_identifier: string;

    @Column({ allowNull: false })
    entity_name: string;

    @Column({ allowNull: false })
    title: string;

    @Column({ type: DataType.JSON })
    message: string;

    @Column({ defaultValue: "<p></p>" })
    message_html: string;

    @Column
    message_stripped: string;

    @Column
    sender: string;

    @Column
    read_at: Date;

    @Column
    snoozed_till: Date;

    @Column
    archived_at: Date;
}