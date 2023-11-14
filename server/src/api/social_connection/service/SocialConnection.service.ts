import { Injectable } from '@nestjs/common';
import { SocialLoginConnection } from '../entitys/SocialLoginConnection.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/api/Base.service';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class SocialLoginConnectionService extends BaseService<SocialLoginConnection> {
    constructor(@InjectModel(SocialLoginConnection) public SocialConnectionModel: typeof SocialLoginConnection) {
        super(SocialConnectionModel)
    }
}
