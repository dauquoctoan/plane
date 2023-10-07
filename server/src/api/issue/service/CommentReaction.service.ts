import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CommentReaction } from '../entitys/CommentReaction.entity';
import { BaseService } from 'src/api/Base.service';

@Injectable()
export class CommentReactionService extends BaseService {
    constructor(
        @InjectModel(CommentReaction)
        private commentReaction: typeof CommentReaction,
    ) {
        super(commentReaction)
    }
}
