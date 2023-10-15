import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthenEndPointDto, CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { OAuth2Client } from 'google-auth-library';
import { ApiTags } from '@nestjs/swagger';
import { JwtService } from '@nestjs/jwt';
import { handleResultError, handleResultSuccess } from 'src/helper/handleresult';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private jwtService: JwtService) { }

  @Post('sign-in')
  async authEndPoint(@Body() authenEndPointDto: AuthenEndPointDto) {
    const client = new OAuth2Client();
    try {
      const ticket = await client.verifyIdToken({
        idToken: authenEndPointDto?.idToken,
        audience: process.env.CLIENT_ID,
      });

      if (ticket) {
        const access_token = this.jwtService.sign({ payload: ticket.getPayload() });
        return handleResultSuccess(access_token);
      }

      handleResultError({ message: 'Invalid token', statusCode: 403 });
    } catch (error) {
      handleResultError({ message: 'Authen error', statusCode: 403 });
    }
  };

  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}