import { Optional } from '@nestjs/common';
import { PartialType } from '@nestjs/swagger';
import { Length, IsJWT, IsJSON, IsBoolean, IsNotEmpty, IsEmpty, IsOptional, IsEmail, isNotEmpty } from 'class-validator';

export class CreateUserDto {
    username: string;
    mobileNumber: string;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) { }