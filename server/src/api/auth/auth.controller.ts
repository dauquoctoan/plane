import { Controller, Get, Post, Body, Patch, Param, Delete, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthenEndPointDto, CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { OAuth2Client } from 'google-auth-library';
import { ApiTags } from '@nestjs/swagger';
import { JwtService } from '@nestjs/jwt';
import { handleResultSuccess } from 'src/helper/handleresult';
import { UserService } from '../user/service/User.service';

@Controller()
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private jwtService: JwtService, public userService: UserService) { }
  @Post('sign-in')
  async authEndPoint(@Body() authenEndPointDto: AuthenEndPointDto) {
    const client = new OAuth2Client();

    try {
      const ticket = await client.verifyIdToken({
        idToken: authenEndPointDto?.idToken,
        audience: process.env.CLIENT_ID,
      });

      if (ticket) {
        const payload = ticket.getPayload();
        // Kiểm tra người dùng tồn tại
        const user = await this.userService.findOne({ where: { email: payload.email } });
        // xử lý lưu người dùng khi người dùng chưa tạo
        if (!user) {
          const info = await this.userService.create({
            username: payload.email,
            email: payload.email,
            avatar: payload.picture
          });
          if (info) return handleResultSuccess(this.createToken({ id: info.id || '', email: info.email || '' }));
        }
        return handleResultSuccess(this.createToken({ id: user.id || '', email: user.email || '' }));
      }
      throw new UnauthorizedException();
    } catch (error) {
      throw new UnauthorizedException();
    }
  };

  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return handleResultSuccess(this.authService.create(createAuthDto));
  }

  @Get()
  findAll() {
    return handleResultSuccess(this.authService.findAll());
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return handleResultSuccess(this.authService.findOne(+id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return handleResultSuccess(this.authService.update(+id, updateAuthDto));
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return handleResultSuccess(this.authService.remove(+id));
  }

  createToken(payload) {
    return {
      access_token: this.jwtService.sign({ payload }),
      refresh_token: this.jwtService.sign({ payload }, { expiresIn: process.env.REFRESH_TOKEN_EXPIRATION })
    }
  }
}
