import sequelize from 'sequelize';
import { UUIDV4 } from 'sequelize';
import { Column, DataType, ForeignKey, Length, Model, Table } from 'sequelize-typescript';
import { Inbox } from 'src/api/inbox/entitys/Inbox.entiy';
import { DEFAULT_VIEWS } from 'src/constants/entity-constant';

@Table
export class ProjectDeployBoard extends Model {
    @ForeignKey(() => Inbox)
    @Column
    inbox: number;

    @Column({ defaultValue: UUIDV4, type: sequelize.UUID })
    anchor: string;

    @Column({ defaultValue: false })
    comments: boolean;

    @Column({ defaultValue: false })
    reactions: boolean;

    @Column({ defaultValue: false })
    votes: boolean;

    @Column({ type: DataType.JSON, defaultValue: DEFAULT_VIEWS })
    views: string;
}