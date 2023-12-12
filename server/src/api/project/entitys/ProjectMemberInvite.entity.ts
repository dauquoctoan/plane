import sequelize from 'sequelize';
import { Column, DataType, Is, Length, Model, Table } from 'sequelize-typescript';
import { ROLE } from 'src/constants/entity-constant';
import { INVALID_ROLE } from 'src/constants/message-constant';

@Table
export class ProjectMemberInvite extends Model<ProjectMemberInvite> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;
    
    @Length({ max: 225 })
    @Column({ allowNull: false })
    email: string;

    @Column({ defaultValue: false })
    accepted: boolean;

    @Length({ max: 225 })
    @Column({ allowNull: false })
    token: string;

    @Column({ type: DataType.TEXT })
    message: string;

    @Column
    responded_at: Date;

    @Is('role', (value) => {
        if (!ROLE.includes(value)) {
            throw Error(INVALID_ROLE)
        }
    })
    @Column({ defaultValue: 10 })
    role: number;
}