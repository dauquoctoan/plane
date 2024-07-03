import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../entitys/User.entity';
import { BaseService } from 'src/api/Base.service';
import { Repository } from 'sequelize-typescript';
import bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { sendPinToMail } from 'src/helper/sendmail';

@Injectable()
export class PinService extends BaseService<User> {
  constructor(
    @InjectModel(User)
    public repository: Repository<User>,
    private jwtService: JwtService,
  ) {
    super(repository);
  }

  async generatePin(email: string) {
    try {
      const info = await this.repository.findOne({
        where: {
          email: email,
        },
      });

      if (info) {
        let pin = Math.floor(Math.random() * 10000)
          .toString()
          .padStart(4, '0');

        await this.updateById(info.id, {
          pin: pin,
          pin_time_expired: new Date().getTime(),
        });

        sendPinToMail({ email: info.email, pin: pin });

        return 1;
      }
      throw new UnauthorizedException();
    } catch (error) {
      throw new UnauthorizedException();
    }
  }

  async validatePin(email: string, pin: string) {
    try {
      const info = await this.repository.findOne({
        where: {
          email: email,
        },
      });

      if (info) {
        if (
          info.pin === pin &&
          new Date().getTime() - info.pin_time_expired < 60000 * 10
        ) {
          return this.createToken({ email: info.email, id: info.id });
        }
      }

      throw new UnauthorizedException();
    } catch (error) {
      throw new UnauthorizedException();
    }
  }

  createToken(payload: { id: string; email: string }) {
    return {
      access_token: this.jwtService.sign({ payload }),
      refresh_token: this.jwtService.sign(
        { payload },
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRATION },
      ),
    };
  }
}
