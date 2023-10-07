import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { Label } from '../entitys/Label.entity';

@Injectable()
export class LabelService extends BaseService {
    constructor(
        @InjectModel(Label)
        private label: typeof Label,
    ) {
        super(label)
    }
}
