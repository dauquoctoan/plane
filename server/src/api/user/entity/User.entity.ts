import sequelize from 'sequelize';
import { Column, Model, Table} from 'sequelize-typescript';

@Table
export class User extends Model{
    @Column({type: sequelize.UUID,defaultValue: sequelize.UUIDV4,allowNull: false, primaryKey: true})
    id: number;

    @Column
    username: string;
        
    @Column
    mobileNumber: string;
    
    @Column
    email: string;
    
    @Column
    first_name: string;
    
    @Column
    last_name:string;
    
    @Column
    avatar:string;
    
    @Column
    cover_image:string;
    
    @Column
    date_joined:string;
    
    @Column
    created_at:string;
    
    @Column
    updated_at:string;
    
    @Column
    last_location:string;
    
    @Column
    created_location:string;
    
    @Column
    is_superuser:string;
    
    @Column
    is_managed:string;
    
    @Column
    is_password_expired:string;
    
    @Column
    is_active:string;
    
    @Column
    is_staff:string;
    
    @Column
    is_email_verified:string;
    
    @Column
    is_password_autoset:string;
    
    @Column
    is_onboarded:string;

    @Column
    token:string;

    @Column
    billing_address_country:string;
    
    @Column
    billing_address:string;
    
    @Column
    has_billing_address:string;
    
    @Column
    USER_TIMEZONE_CHOICES:string;
    
    @Column
    user_timezone:string;

    @Column
    last_active:string;
    
    @Column
    last_login_time:string;
    
    @Column
    last_logout_time:string;
    
    @Column
    last_login_ip:string;
    
    @Column
    last_logout_ip:string;
    
    @Column
    last_login_medium:string;
    
    @Column
    last_login_uagent:string;
    
    @Column
    token_updated_at:string;
    
    @Column
    last_workspace_id:string;
    
    @Column
    my_issues_prop:string;
    
    @Column
    role:string;
    
    @Column
    is_bot:string;
    
    @Column
    theme:string;
    
    @Column
    display_name:string;
    
    @Column
    is_tour_completed:string;
    
    @Column
    onboarding_step:string;

    @Column
    USERNAME_FIELD:string;

    @Column
    REQUIRED_FIELDS:string;
}