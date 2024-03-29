import sequelize from 'sequelize';
import { BelongsTo, Column, ForeignKey, HasOne, Is, Length, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Estimate } from 'src/api/estimate/entitys/Estimate.entity';
import { Test1 } from 'src/api/test1/entities/test1.entity';

@Table({tableName:'Tests'})
export class Test extends Model {
    @ForeignKey(() => Test1)
    @Column({ type: sequelize.UUID, allowNull: true })
    authorId: string;

    @ForeignKey(() => Test1)
    @Column({ type: sequelize.UUID, allowNull: true })
    proofreaderId: string;

    @BelongsTo(() => Test1, 'authorId')
    author: Test1;

    @BelongsTo(() => Test1, 'proofreaderId')
    proofreader: Test1;

    @Column
    name: string;
}