import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, HasOne, Is, Length, Model, Table } from 'sequelize-typescript';
import { CycleIssue } from 'src/api/cycle/entitys/CycleIssue.entity';
import { State } from 'src/api/state/entitys/State.entity';
import { User } from 'src/api/user/entitys/User.entity';
import { IssueAssignee } from './IssueAssignee.entity';
import { Label } from './Label.entity';
import { IssueLabel } from './IssueLabel.entity';
import { PRIORITY } from 'src/constants/entity-constant';
import { INVALID_PRIORITY } from 'src/constants/message-constant';
import { InboxIssue } from 'src/api/inbox/entitys/InboxIssue.entity';
import { IssueActivity } from './IssueActivity.entity';
import { IssueAttachment } from './IssueAttachment.entity';
import { IssueBlocker } from './IssueBlocker.entity';
import { IssueComment } from './IssueComment.entity';
import { IssueLink } from './IssueLink.entity';
import { IssueReaction } from './IssueReaction.entity';
import { IssueRelation } from './IssueRelation.entity';
import { IssueSequence } from './IssueSequence.entity';
import { IssueSubscriber } from './IssueSubscriber.entity';
import { ModuleIssue } from 'src/api/module/entitys/ModuleIssue.entity';
import { PageBlock } from 'src/api/page/entitys/PageBlock.entity';
import { Project } from 'src/api/project/entitys/Project.entity';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';
import sequelize from 'sequelize';

@Table
export class Issue extends Model<Issue> {

    /**
   * @ForeignKey: Issue, State
   * @hasMany: InboxIssue, IssueBlocker, PageBlock, ModuleIssue ,IssueAttachment, IssueSubscriber, IssueLink, IssueSequence, IssueRelation, IssueActivity, InboxIssue, IssueComment
   * @HasOne: CycleIssue
   * @BelongsTo: State, Issue
   * @BelongsToMany: User[IssueAssignee], Label[IssueLabel]
   */

    /* ================================================================= */
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;

    /**
    * ! FK : Issue, State
    */
    @ForeignKey(() => Project)
    @Column({ type: sequelize.UUID, allowNull: false })
    project_id: string;

    @ForeignKey(() => User)
    @Column({ type: sequelize.UUID, allowNull: false })
    create_by: string;

    @ForeignKey(() => Workspace)
    @Column({ type: sequelize.UUID, allowNull: false })
    workspace_id: string;

    @ForeignKey(() => Issue)
    @Column({ type: sequelize.UUID, allowNull: true })
    parent: string;

    @ForeignKey(() => State)
    @Column({ type: sequelize.UUID, allowNull: false })
    state_id: string;

    /**
    * ! RELATIONSHIP
    */

    @BelongsTo(() => User, { foreignKey: 'create_by' })
    creator: User;

    @BelongsTo(() => Project, {
        foreignKey: 'project_id',
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    })
    project: Project;

    @BelongsTo(() => Workspace, { foreignKey: 'workspace_id' })
    workspace: Workspace;

    @BelongsTo(() => Issue)
    issue: Issue;

    @BelongsTo(() => State, { foreignKey: 'state_id' })
    state: State;

    @BelongsToMany(() => User, () => IssueAssignee)
    assignees: User[];

    @BelongsToMany(() => Label, () => IssueLabel)
    labels: Label[];

    @HasMany(() => InboxIssue, { foreignKey: 'issue_id' })
    inbox_issues: InboxIssue[];

    @HasMany(() => CycleIssue, { foreignKey: 'issue_id' })
    cycleIssue: CycleIssue[];

    @HasMany(() => IssueBlocker, { foreignKey: 'blocked_bys' })
    blocked_bys: IssueBlocker[];

    @HasMany(() => IssueBlocker, { foreignKey: 'blocks' })
    blocks: IssueBlocker[];

    @HasMany(() => PageBlock)
    page_block: PageBlock[];

    @HasMany(() => ModuleIssue)
    module_issues: ModuleIssue[];

    @HasMany(() => IssueAttachment)
    issue_attachments: IssueAttachment[];

    @HasMany(() => IssueSubscriber)
    issue_subscribers: IssueSubscriber[];

    @HasMany(() => IssueLink)
    issue_links: IssueLink[];

    @HasMany(() => IssueSequence)
    issue_sequences: IssueSequence[];

    @HasMany(() => IssueReaction)
    issue_reactions: IssueReaction[];

    @HasMany(() => IssueRelation, { foreignKey: 'issue_id' })
    issue_relation_ids: IssueRelation[];

    @HasMany(() => IssueRelation, { foreignKey: 'related_issue_id' })
    related_issue_ids: IssueRelation[];

    @HasMany(() => IssueComment)
    issue_comments: IssueComment[];

    @HasMany(() => InboxIssue, { foreignKey: 'id_issue_duplicate_to' })
    inbox_issues_duplicate_to: InboxIssue[];

    @HasMany(() => Issue)
    issues: Issue[];

    @HasMany(() => IssueActivity)
    issue_activitys: IssueActivity[];

    @HasOne(() => CycleIssue, { foreignKey: 'issueId' })
    cycleIsue: CycleIssue;

    /**
    * ! PR
    */
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

    @Column({ type: 'text' })
    description_html: string;

    @Column({ type: DataType.TEXT({ length: 'medium' }) })
    description_stripped: string;

    @Is('priority', (value) => {
        if (!PRIORITY.includes(value)) throw Error(INVALID_PRIORITY)
    })
    @Column
    priority: string;

    @Column({ allowNull: true })
    start_date: Date;

    @Column({ allowNull: true })
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
}