import { Controller, Post, Body } from '@nestjs/common';
import { StateService } from './state.service';
import { StateDto } from './dto/state.dto'

@Controller('state')
export class StateController {
    constructor(private readonly stateService: StateService) {}

    @Post('create')
    createState(@Body() stateDto: StateDto): any{

        return  this.stateService.addOne(stateDto);
    }
}
