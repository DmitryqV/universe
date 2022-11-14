import { Controller, Post, Body, HttpCode, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthSignInDTO, AuthSignUpDTO } from './dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post("singin")
  async signIn(@Body() dto: AuthSignInDTO) {
    await this.authService.findUser(dto.email);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(201)
  @Post("singup")
  async signUp(@Body() dto: AuthSignUpDTO) {
    await this.authService.createUser(dto);
  }
}
