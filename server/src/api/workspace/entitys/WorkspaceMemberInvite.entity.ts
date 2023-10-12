import { Column, ForeignKey, Model, Table, Length, DataType, Is, BelongsTo } from 'sequelize-typescript';
import { Workspace } from './Workspace.entity';
import { ROLE } from 'src/constants/entity-constant';
import { INVALID_ROLE } from 'src/constants/message-constant';

@Table
export class WorkspaceMemberInvite extends Model {
    @ForeignKey(() => Workspace)
    @Column({ allowNull: false })
    workspace_id: number;

    @BelongsTo(() => Workspace)
    workspace: Workspace;

    @Length({ max: 255 })
    @Column({ allowNull: false })
    email: string;

    @Column({ defaultValue: false })
    accepted: boolean;

    @Length({ max: 255 })
    @Column({ allowNull: false })
    token: string;

    @Column({ type: DataType.TEXT })
    message: string;

    @Column
    responded_at: Date;

    @Is('role', (value) => {
        if (!ROLE.includes(value)) {
            throw new Error(INVALID_ROLE);
        }
    })
    @Column
    role: string;
}