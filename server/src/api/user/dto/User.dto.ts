import { PartialType } from '@nestjs/swagger';
import { Length, IsJWT, IsJSON, IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @Length(0, 128)
    username: string;

    @Length(0, 255)
    mobileNumber: string;

    @Length(0, 255)
    email: string;

    @IsOptional()
    @Length(0, 255)
    first_name: string;

    @IsOptional()
    @Length(0, 255)
    last_name: string;

    @IsOptional()
    @Length(0, 255)
    avatar: string;

    @IsOptional()
    @Length(0, 800)
    cover_image: string;

    @IsOptional()
    date_joined: string;

    @IsOptional()
    created_at: string;

    @IsOptional()
    updated_at: string;

    @IsOptional()
    @Length(0, 255)
    last_location: string;

    @IsOptional()
    @Length(0, 255)
    created_location: string;

    @IsOptional()
    @IsBoolean()
    is_superuser: boolean;

    @IsOptional()
    @IsBoolean()
    is_managed: boolean;

    @IsOptional()
    @IsBoolean()
    is_password_expired: boolean;

    @IsOptional()
    @IsBoolean()
    is_active: boolean;

    @IsOptional()
    @IsBoolean()
    is_staff: boolean;

    @IsOptional()
    @IsBoolean()
    is_email_verified: boolean;

    @IsOptional()
    @IsBoolean()
    is_password_autoset: boolean;

    @IsOptional()
    @IsBoolean()
    is_onboarded: boolean;

    @IsOptional()
    @IsJWT()
    @Length(0, 64)
    token: string;

    @IsOptional()
    @Length(0, 255)
    billing_address_country: string;

    @IsOptional()
    billing_address: string;

    @IsOptional()
    has_billing_address: string;

    @IsOptional()
    last_active: Date;

    @IsOptional()
    last_login_time: Date;

    @IsOptional()
    last_logout_time: Date;

    @IsOptional()
    @Length(0, 255)
    last_login_ip: string;

    @IsOptional()
    @Length(0, 255)
    last_logout_ip: string;

    @IsOptional()
    @Length(0, 20)
    last_login_medium: string;

    @IsOptional()
    last_login_uagent: string;

    @IsOptional()
    token_updated_at: Date;

    @IsOptional()
    last_workspace_id: number;

    @IsOptional()
    @IsJSON()
    my_issues_prop: string;

    @IsOptional()
    @Length(0, 300)
    role: string;

    @IsOptional()
    @IsBoolean()
    is_bot: boolean;

    @IsOptional()
    @IsJSON()
    theme: string;

    @IsOptional()
    @Length(0, 300)
    display_name: string;

    @IsOptional()
    @IsBoolean()
    is_tour_completed: boolean;

    @IsOptional()
    @IsJSON()
    onboarding_step: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) { }