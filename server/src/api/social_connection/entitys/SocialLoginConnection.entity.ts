import { Column, Model, Table} from 'sequelize-typescript';

@Table
export class SocialLoginConnection extends Model{
    @Column
    medium: string;
    
    @Column
    last_login_at: string;

    @Column
    last_received_at: string;

    @Column
    user: string;

    @Column
    token_data: string;

    @Column
    extra_data: string;
}