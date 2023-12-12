import { Column, ForeignKey, Model, Table, Length, DataType, Is, BelongsTo, Unique } from 'sequelize-typescript';
import { Workspace } from './Workspace.entity';
import { ROLE } from 'src/constants/entity-constant';
import { INVALID_ROLE } from 'src/constants/message-constant';
import sequelize from 'sequelize';

@Table
export class WorkspaceMemberInvite extends Model<WorkspaceMemberInvite> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;
    /**
    * ! WorkspaceMemberInvite
    * @ForeignKey Workspace
    */
    @ForeignKey(() => Workspace)
    @Column({ type: sequelize.UUID, allowNull: false })
    workspace_id: string;

    /* ================================================== */

    @BelongsTo(() => Workspace, {foreignKey:'workspace_id'})
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
    role: number;
}