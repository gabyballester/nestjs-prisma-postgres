import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { CryptoProvider } from '../providers/encrypt/encrypt.provider';

@Module({
  controllers: [UserController],
  providers: [UserService, CryptoProvider],
})
export class UserModule {}