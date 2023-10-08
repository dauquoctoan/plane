import { BelongsToMany, Column, Model, Table } from 'sequelize-typescript';
import { Page } from 'src/api/page/entitys/Page.entity';
import { PageLabel } from 'src/api/page/entitys/PageLabel.entity';

@Table
export class Label extends Model {
    @BelongsToMany(() => Page, () => PageLabel)
    page: Page[];

    @Column
    parent: string;

    @Column
    name: string;

    @Column
    description: string;

    @Column
    color: string;
}