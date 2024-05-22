

import { Controller,  Request as RequestNest, Body, Post } from '@nestjs/common';
import {  ApiTags } from '@nestjs/swagger';
import { handleResultSuccess } from 'src/helper/handleresult';
import { generatePinDto } from '../dto/User.dto';
import { PinService } from '../service/pin.service';

@Controller('/pin')
@ApiTags('Pin')
export class PinController {
    constructor(
        private readonly pinService: PinService,
    ) { }

    @Post('generate')
    async generatePin(@Body() data:generatePinDto) {
        return handleResultSuccess(await this.pinService.generatePin(data.email))
    }

    @Post('validate')
    async checkPin(@Body() checkPin: {email:string, pin:string}) {
        return handleResultSuccess(await this.pinService.validatePin(checkPin.email, checkPin.pin));
    }
}
