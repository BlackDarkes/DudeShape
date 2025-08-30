import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: "",
      signOptions: { expiresIn: "1h" },
    }),
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
