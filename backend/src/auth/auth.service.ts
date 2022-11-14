import { Injectable } from '@nestjs/common';
import { AuthSignUpDTO } from './dto/auth.dto';

@Injectable()
export class AuthService {
  async createUser(dto: AuthSignUpDTO) {
    return dto;
  }
  async findUser(email: string) {
    return email;
  }
}
