import {IsNotEmpty } from 'class-validator';

export class CreateStateDto {
    @IsNotEmpty()
    name: string;

    description: string;
    
    @IsNotEmpty()
    color: string;

    slug: string;
    
    sequence: number;
    
    @IsNotEmpty()
    group: 'backlog'|'unstarted'|'started'|'completed'|'cancelled';
    
    default: boolean;
}