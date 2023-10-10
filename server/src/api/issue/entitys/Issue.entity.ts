import { BelongsToMany, Column, DataType, ForeignKey, HasOne, Is, Length, Model, Table } from 'sequelize-typescript';
import { CycleIssue } from 'src/api/cycle/entitys/CycleIssue.entity';
import { State } from 'src/api/state/entitys/State.entity';
import { User } from 'src/api/user/entitys/User.entity';
import { IssueAssignee } from './IssueAssignee.entity';
import { Label } from './Label.entity';
import { IssueLabel } from './IssueLabel.entity';
import { PRIORITY } from 'src/constants/entity-constant';
import { INVALID_PRIORITY } from 'src/constants/message-constant';

@Table
export class Issue extends Model {
    @BelongsToMany(() => User, () => IssueAssignee)
    assignees: User[];

    @BelongsToMany(() => Label, () => IssueLabel)
    labels: Label[];

    @ForeignKey(() => Issue)
    @Column
    parent: number;

    @ForeignKey(() => State)
    @Column
    state: number;

    @HasOne(() => CycleIssue, { foreignKey: 'issueId' })
    cycleIsue: CycleIssue;

    @Is('PRIORITY_CHOICES', (value) => {
        if (!PRIORITY.includes(value)) throw Error(INVALID_PRIORITY)
    })
    @Column
    PRIORITY_CHOICES: string;

    @Is('estimate_point', (value) => {
        if (value > 7 && value < 0) throw Error('0 <= estimate_point <= 7')
    })
    @Column
    estimate_point: number;

    @Length({ max: 255 })
    @Column({ allowNull: false })
    name: string;

    @Column({ type: DataType.JSON, defaultValue: {} })
    description: string;

    @Column({ defaultValue: "<p></p>" })
    description_html: string;

    @Column
    description_stripped: string;

    @Is('priority', (value) => {
        if (!PRIORITY.includes(value)) throw Error(INVALID_PRIORITY)
    })
    @Column
    priority: string;

    @Column
    start_date: Date;

    @Column
    target_date: Date;

    @Column({ defaultValue: 1 })
    sequence_id: number;

    @Column({ defaultValue: 65535 })
    sort_order: number;

    @Column({ type: DataType.TIME })
    completed_at: Date;

    @Column({ type: DataType.DATE })
    archived_at: Date;

    @Column({ defaultValue: false })
    is_draft: boolean;

    @Column
    objects: boolean;

    @Column
    issue_objects: string;
}