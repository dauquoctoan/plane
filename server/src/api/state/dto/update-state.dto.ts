import { PartialType } from '@nestjs/mapped-types';
import { CreateStateDto } from './create-state.dto';

export class UpdateStateDto extends PartialType(CreateStateDto) {
    color?: string;
    description?: string;
    default?: boolean;
    group?: 'backlog' | 'unstarted' | 'started' | 'completed' | 'cancelled';
    name?: string;
    sequence?: number;
    slug?: string;
}
