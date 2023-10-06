import { BelongsTo, Column, DataType, ForeignKey, Is, Length, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Estimate } from 'src/api/estimate/entitys/Estimate.entity';
import { State } from 'src/api/state/entitys/state.entity';
import { User } from 'src/api/user/entitys/User.entity';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';
import { INVALID_NETWORK, NETWORK } from 'src/constants/entity-constant';
import { ProjectIdentifier } from './ProjectIdentifier.entity';

@Table
export class Project extends Model {
    @Length({ min: 0, max: 225 })
    @Column({ allowNull: false })
    name: string;

    @Column
    description: string;

    @Column({ type: DataType.JSON })
    description_text: string;

    @Column({ type: DataType.JSON })
    description_html: string;

    @Is('NETWORK_CHOICES', (value) => {
        if (!NETWORK.includes(value)) {
            throw new Error(INVALID_NETWORK);
        }
    })
    @Column({ defaultValue: 1 })
    @Column
    network: string;

    @ForeignKey(() => Workspace)
    @Column({ allowNull: false })
    workspace: string;

    @Length({ max: 12 })
    @Column({ allowNull: false })
    identifier: string;

    @ForeignKey(() => User)
    @Column
    default_assignee: string;

    @ForeignKey(() => User)
    @Column
    project_lead: string;

    @Length({ min: 0, max: 225 })
    @Column
    emoji: string;

    @Column({ type: DataType.JSON })
    icon_prop: string;

    @Column({ defaultValue: true })
    module_view: boolean;

    @Column({ defaultValue: true })
    cycle_view: boolean;

    @Column({ defaultValue: true })
    issue_views_view: boolean;

    @Column({ defaultValue: true })
    page_view: boolean;

    @Column({ defaultValue: true })
    inbox_view: boolean;

    @Length({ max: 800 })
    @Column({ type: DataType.TEXT })
    cover_image: string;

    @ForeignKey(() => Estimate)
    @Column({ allowNull: false })
    estimate: string;

    @Column({ defaultValue: 0, type: DataType.INTEGER })
    archive_in: number;

    @Column({ defaultValue: 0, type: DataType.INTEGER })
    close_in: number;

    @ForeignKey(() => State)
    @Column({ allowNull: false })
    default_state: string;
}