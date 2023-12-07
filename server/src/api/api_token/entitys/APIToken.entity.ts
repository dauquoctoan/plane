import sequelize from 'sequelize';
import { BelongsTo, Column, ForeignKey, HasMany, Is, Model, Table } from 'sequelize-typescript';
import { Importer } from 'src/api/importer/entitys/Importer.entity';
import { User } from 'src/api/user/entitys/User.entity';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';
import { USER_TYPE } from 'src/constants/entity-constant';
import { INVALID_USER_TYPE } from 'src/constants/message-constant';

@Table
export class APIToken extends Model<APIToken> {
    /**
    * !FK
    */

    @ForeignKey(() => Workspace)
    @Column
    workspace_id: number;

    @ForeignKey(() => User)
    @Column({ type: sequelize.UUID })
    user_id: string;

    /**
    * ! RELATIONSHIP
    */

    @BelongsTo(() => Workspace, {foreignKey:'workspace_id'})
    workspace: Workspace;

    @BelongsTo(() => User, {foreignKey:'user_id'})
    user: User;

    @HasMany(() => Importer)
    importers: Importer[];

    /**
    * ! PR
    */

    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4 })
    token: string;

    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4 })
    label: string;

    @Is('user_type', (value) => {
        if (!USER_TYPE.includes(value)) throw Error(INVALID_USER_TYPE)
    })
    @Column
    user_type: number;
}