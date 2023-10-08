import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateStateDto {
    @IsNotEmpty()
    name: string;

    description: string;

    @IsNotEmpty()
    color: string;

    slug: string;

    sequence: number;

    @IsNotEmpty()
    group: 'backlog' | 'unstarted' | 'started' | 'completed' | 'cancelled';

    default: boolean;
}

export class UpdateStateDto extends PartialType(CreateStateDto) {
    color?: string;
    description?: string;
    default?: boolean;
    group?: 'backlog' | 'unstarted' | 'started' | 'completed' | 'cancelled';
    name?: string;
    sequence?: number;
    slug?: string;
}
