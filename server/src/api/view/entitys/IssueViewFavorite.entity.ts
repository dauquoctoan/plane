import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { IssueView } from './IssueView.entity';
import sequelize from 'sequelize';

@Table({tableName:'IssueViewFavorites'})
export class IssueViewFavorite extends Model<IssueViewFavorite> {
    /**
    * ! table GlobalView
    * @ForeignKey User, IssueView
    * @HasMany IssueViewFavorite
    */

    @ForeignKey(() => User)
    @Column({ type: sequelize.UUID })
    user_id: string;
   
    /* ================================================== */

    @BelongsTo(() => User,{foreignKey:'user_id'})
    user: User;

    @ForeignKey(() => IssueView)
    @Column({ type: sequelize.UUID, allowNull: true })
    view: string;

    @BelongsTo(() => IssueView)
    issue_view: IssueView;
}

