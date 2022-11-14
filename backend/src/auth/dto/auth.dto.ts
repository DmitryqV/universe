import { IsString } from "class-validator";

export class AuthSignInDTO {
  @IsString()
  email: string;
  
  @IsString()
  password: string;
}

export class AuthSignUpDTO {
  @IsString()
  email: string;
  
  @IsString()
  password: string;

  @IsString()
  repassword: string;
}