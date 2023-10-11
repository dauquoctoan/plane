import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Get('signin')
  async signin() {
    const client = new OAuth2Client();
    const ticket = await client.verifyIdToken({ idToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk3NTU3NTAwLCJpYXQiOjE2OTY5NTI3MDAsImp0aSI6IjdmNjBlZjkzZDVhYTRiMmQ4NGMzNzZmYzI3NTU2MzJmIiwidXNlcl9pZCI6ImE1NzM4ZjhkLTA5OWItNDgwMS04YTllLTljMjE1YTg2NTZlZiJ9.4NT1MeYVCnFJSH-AeaYprYaSxOj-Im3Rf2oBcK8B3D0' });
    return ticket;
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
