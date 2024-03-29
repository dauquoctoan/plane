import { BelongsTo, Column, DataType, ForeignKey, Length, Model, Table } from 'sequelize-typescript';
import { Issue } from './Issue.entity';
import sequelize from 'sequelize';

@Table({tableName:'IssueLinks'})
export class IssueLink extends Model<IssueLink> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;
    /**
    * ! FK
    */
    @ForeignKey(() => Issue)
    @Column({ type: sequelize.UUID, allowNull: true })
    issue_id: string;

    /**
    * ! RELATIONSHIP
    */

    @BelongsTo(() => Issue)
    issue: Issue;

    @Length({ max: 255 })
    @Column
    title: string;

    @Column
    url: string;

    @Column({ type: DataType.JSON, defaultValue: {} })
    metadata: string;
}