import sequelize from 'sequelize';
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Is, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { MODULE_STATUS } from 'src/constants/entity-constant';
import { INVALID_MODULE_STATUS, INVALID_STATUS } from 'src/constants/message-constant';
import { ModuleIssue } from './ModuleIssue.entity';
import { ModuleLink } from './ModuleLink.entity';
import { ModuleMember } from './ModuleMember.entity';

@Table
export class Module extends Model<Module> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;

    @ForeignKey(() => User)
    @Column({ allowNull: false, type: sequelize.UUID })
    lead: string;

    @BelongsTo(() => User)
    user_lead: User;

    @HasMany(() => ModuleIssue)
    module_issues: ModuleIssue[];

    @HasMany(() => ModuleLink)
    module_links: ModuleIssue[];

    @HasMany(() => ModuleMember)
    module_members: ModuleMember[];

    @ForeignKey(() => User)
    @Column({ type: sequelize.UUID, allowNull: true })
    member: string;

    @BelongsTo(() => User)
    user_member: User;

    @Column({ allowNull: false })
    name: string;

    @Column
    description: string;

    @Column({ type: DataType.JSON })
    description_text: string;

    @Column({ type: DataType.JSON })
    description_html: string;

    @Column
    start_date: Date;

    @Column
    target_date: Date;

    @Is('status', (value) => {
        if (!MODULE_STATUS.includes(value)) throw Error(INVALID_MODULE_STATUS)
    })
    @Column({ defaultValue: 'planned' })
    status: string;

    @Column({ type: DataType.JSON, defaultValue: {} })
    view_props: string;

    @Column({ type: DataType.FLOAT })
    sort_order: number;
}