import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { Label } from '../entitys/Label.entity';
import { CreateLabelDto } from '../dto/Label.dto';
import { handleResultError } from 'src/helper/handleresult';
import { messageCreateFail, messageFindFail } from 'src/helper/message.create';

@Injectable()
export class LabelService extends BaseService<Label> {
    constructor(
        @InjectModel(Label)
        private label: typeof Label,
    ) {
        super(label)

    }

    async createLabel(label: CreateLabelDto, userId: string) {
        try {
            return await this.repository.create({ ...label, created_at: userId });
        } catch (error) {
            handleResultError({ message: messageCreateFail(this.repository.getTableName()), messageDetail: error });
        }
    }

    async findLabelByWorspaceIdAndProjectId(projectId: string) {
        try {
            return await this.repository.findAll({ where: { project_id: projectId } });
        } catch (error) {
            handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: error });
        }
    }
}
