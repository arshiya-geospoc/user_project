import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
 
  @IsNotEmpty()
  @IsString()
  username: string;
 
  @IsNotEmpty()
  @IsEmail()
  email: String;

  @IsNotEmpty()
  @IsNotEmpty()
  password: String;
 
}