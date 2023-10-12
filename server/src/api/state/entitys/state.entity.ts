import { ApiTags } from '@nestjs/swagger';
import { Column, Model, Table, Length, Is, DataType, HasMany, } from 'sequelize-typescript';
import { Issue } from 'src/api/issue/entitys/Issue.entity';
import { GROUP } from 'src/constants/entity-constant';
import { INVALID_GROUP } from 'src/constants/message-constant';

@Table
@ApiTags('workspace')
export class State extends Model {
    @HasMany(() => Issue)
    issue: Issue[];

    @Length({ min: 1, max: 255 })
    @Column({ allowNull: false })
    name: string;

    @Column({ type: DataType.TEXT })
    description: string;

    @Length({ min: 1, max: 255 })
    @Column({ allowNull: false })
    color: string;

    @Length({ max: 100 })
    @Column
    slug: string;

    @Column({ defaultValue: 65535, type: DataType.FLOAT })
    sequence: number;

    @Is('group', (value) => {
        if (!GROUP.includes(value)) {
            throw new Error(INVALID_GROUP);
        }
    })
    @Column({ allowNull: false })
    group: string;

    @Column({ defaultValue: false })
    default: boolean;
}