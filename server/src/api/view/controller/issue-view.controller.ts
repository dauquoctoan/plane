import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('issue-view')
@ApiTags('Issue View')
export class IssueViewController { }
