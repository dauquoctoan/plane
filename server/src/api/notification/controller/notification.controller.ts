import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NotificationService } from '../service/notification.service';
import { CreateNotificationDto, UpdateNotificationDto } from '../dto/Notification.dto';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller()
@ApiTags('Notification')
export class NotificationController {
    constructor(private readonly notificationService: NotificationService) { }
    @Post()
    create(@Body() notification: CreateNotificationDto) {
        return handleResultSuccess(this.notificationService.create(notification));
    }

    @Get()
    findAll() {
        return handleResultSuccess(this.notificationService.findAll());
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return handleResultSuccess(this.notificationService.findOneById(+id));
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateWorkspaceDto: UpdateNotificationDto) {
        return handleResultSuccess(this.notificationService.updateById(+id, updateWorkspaceDto));
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return handleResultSuccess(this.notificationService.removeById(+id));
    }
}
