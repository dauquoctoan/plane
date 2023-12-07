import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Is, Length, Model, Table } from 'sequelize-typescript';
import { Label } from 'src/api/issue/entitys/Label.entity';
import { User } from 'src/api/user/entitys/User.entity';
import { ACCESS } from 'src/constants/entity-constant';
import { INVALID_ACCESS } from 'src/constants/message-constant';
import { PageLabel } from './PageLabel.entity';
import sequelize from 'sequelize';
import { PageBlock } from './PageBlock.entity';
import { PageFavorite } from './PageFavorite.entity';

@Table
export class Page extends Model<Page> {
    @ForeignKey(() => User)
    @Column({ type: sequelize.UUID })
    owned_by: string;

    @BelongsTo(() => User, {foreignKey:'owned_by'})
    user: User;

    @HasMany(() => PageBlock)
    page_blocks: PageBlock[];

    @HasMany(() => PageFavorite)
    page_favorites: PageFavorite[];

    @BelongsToMany(() => Label, () => PageLabel)
    labels: Label[];

    @Length({ max: 255 })
    @Column({ allowNull: false })
    name: string;

    @Column({ type: DataType.JSON, defaultValue: {} })
    description: string;

    @Column({ defaultValue: '<p></p>' })
    description_html: string;

    @Column({ type: DataType.TEXT })
    description_stripped: string;

    @Is('access', (value) => {
        if (!ACCESS.includes(value)) throw Error(INVALID_ACCESS);
    })
    @Column
    access: string;

    @Column
    color: string;
}