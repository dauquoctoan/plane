import { BelongsToMany, Column, DataType, ForeignKey, HasOne, Is, Length, Model, Table } from 'sequelize-typescript';
import { CycleIssue } from 'src/api/cycle/entitys/CycleIssue.entity';
import { State } from 'src/api/state/entitys/State.entity';
import { User } from 'src/api/user/entitys/User.entity';
import { PRIORITY } from 'src/constants/entity-constant';
import { INVALID_PRIORITY, INVALID_PROVIDE } from 'src/constants/message-constant';
import { IssueAssignee } from './IssueAssignee.entity';
import { Label } from './Label.entity';
import { IssueLabel } from './IssueLabel.entity';

@Table
export class Issue extends Model {
    // @HasOne(() => CycleIssue)
    // cycleIsue: CycleIssue;

    @Is('PRIORITY_CHOICES', (value) => {
        if (!PRIORITY.includes(value)) throw Error(INVALID_PRIORITY)
    })
    @Column
    PRIORITY_CHOICES: string;

    @ForeignKey(() => Issue)
    @Column
    parent: string;

    @ForeignKey(() => State)
    @Column
    state: string;

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

    @BelongsToMany(() => User, () => IssueAssignee)
    assignees: User[];

    @Column({ defaultValue: 1 })
    sequence_id: number;

    @BelongsToMany(() => Label, () => IssueLabel)
    labels: Label[];

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