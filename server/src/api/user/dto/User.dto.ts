import { PartialType } from '@nestjs/swagger';

export class CreateUserDto {
    username: string;
    mobileNumber: string;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export class generatePinDto {
    email: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {
}