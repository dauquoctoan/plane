import { Controller, Post, Body } from '@nestjs/common';
import { StateService } from './state.service';
import { StateDto } from './dto/state.dto';


interface Iname{
    name: string
}

@Controller('state')
export class StateController {
    constructor(private readonly appService: StateService) {}

    @Post('create')
    createState(@Body() stateDto: StateDto): any{
        return  this.appService.addOne(stateDto);
    }
}
