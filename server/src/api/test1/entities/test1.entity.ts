import sequelize from 'sequelize';
import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import BaseModel from 'src/api/base.model';
import { Test } from 'src/api/test/entities/test.entity';
import { text } from 'stream/consumers';

@Table
export class Test1 extends Model {
    @HasMany(() => Test, 'authorId')
    writtenBooks: Test[];

    @HasMany(() => Test, 'proofreaderId')
    proofedBooks: Test[];

    @Column
    name: string;
}
