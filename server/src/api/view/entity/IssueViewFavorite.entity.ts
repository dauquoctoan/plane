import { Column, Model, Table} from 'sequelize-typescript';

@Table
export class IssueViewFavorite extends Model{
    @Column
    user: string;
    
    @Column
    view:string;
}

