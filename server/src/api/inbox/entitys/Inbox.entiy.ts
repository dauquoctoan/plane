import { Column, DataType, HasMany, Length, Model, Table } from 'sequelize-typescript';
import { InboxIssue } from './InboxIssue.entity';
import { ProjectDeployBoard } from 'src/api/project/entitys/ProjectDeployBoard.entity';
import sequelize from 'sequelize';

@Table
export class Inbox extends Model<Inbox> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;
    /**
    * ! RELATIONSHIP
    */

    @HasMany(() => InboxIssue)
    inbox_issues: InboxIssue[];

    @HasMany(() => ProjectDeployBoard)
    project_deploy_boards: ProjectDeployBoard[];


    @Length({ max: 255 })
    @Column
    name: string;

    @Column({ type: DataType.TEXT })
    description: string;

    @Column({ defaultValue: false })
    is_default: boolean;

    @Column({ type: DataType.JSON, defaultValue: {} })
    view_props: string;
}