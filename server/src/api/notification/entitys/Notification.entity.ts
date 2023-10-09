import sequelize from 'sequelize';
import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Project } from 'src/api/project/entitys/Project.entity';
import { User } from 'src/api/user/entitys/User.entity';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';

@Table
export class Notification extends Model {
    @ForeignKey(() => Workspace)
    @Column({ allowNull: false })
    workspace: number;

    @ForeignKey(() => Project)
    @Column
    project: number;

    @ForeignKey(() => User)
    @Column
    triggered_by: string;

    @ForeignKey(() => User)
    @Column({ allowNull: false })
    receiver: string;

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