import { IsEmail, IsNotEmpty, IsString, MinLength, IsEnum, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ example: 'user@dassault.fr' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'Password123!' })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @ApiProperty({ example: 'Jean' })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ example: 'Dupont' })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ enum: ['DASSAULT_ADMIN', 'DASSAULT_USER', 'TATA_ADMIN', 'TATA_USER'] })
  @IsEnum(['DASSAULT_ADMIN', 'DASSAULT_USER', 'TATA_ADMIN', 'TATA_USER'])
  @IsNotEmpty()
  role: string;

  @ApiProperty({ enum: ['FR', 'IN'] })
  @IsEnum(['FR', 'IN'])
  @IsNotEmpty()
  country: string;

  @ApiProperty({ enum: ['fr', 'en'], default: 'en' })
  @IsEnum(['fr', 'en'])
  @IsOptional()
  language?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  department?: string;
}
