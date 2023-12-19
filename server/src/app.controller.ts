import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('send-mail')
  async sendMail(){
    return await this.appService.sendMail();
  }

  @Post('test')
  async test(@Body() body:any){
    return await body;
  }
}
  