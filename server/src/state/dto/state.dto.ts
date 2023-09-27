import { IsEmail, IsNotEmpty } from 'class-validator';

export class StateDto {
    @IsNotEmpty()
    name: string;

    description: string;
    
    @IsNotEmpty()
    color: string;

    @IsNotEmpty()
    slug: string;
    
    sequence: number;
    
    @IsNotEmpty()
    group: string;
    
    default: boolean;
}