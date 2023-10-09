import { BelongsToMany, Column, DataType, ForeignKey, Is, Length, Model, Table } from 'sequelize-typescript';
import { Label } from 'src/api/issue/entitys/Label.entity';
import { User } from 'src/api/user/entitys/User.entity';
import { ACCESS } from 'src/constants/entity-constant';
import { INVALID_ACCESS } from 'src/constants/message-constant';
import { PageLabel } from './PageLabel.entity';

@Table
export class Page extends Model {
    @ForeignKey(() => User)
    @Column
    owned_by: string;

    @BelongsToMany(() => Label, () => PageLabel)
    labels: Label[];

    // @Length({ max: 255 })
    // @Column({ allowNull: false })
    // name: string;

    // @Column({ defaultValue: {} })
    // description: string;

    // @Column({ defaultValue: '<p></p>' })
    // description_html: string;

    // @Column({ type: DataType.TEXT })
    // description_stripped: string;

    // @Is('access', (value) => {
    //     if (!ACCESS.includes(value)) throw Error(INVALID_ACCESS);
    // })
    // @Column
    // access: string;

    // @Column
    // color: string;
}