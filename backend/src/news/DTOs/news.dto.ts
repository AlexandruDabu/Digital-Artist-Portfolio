import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateNewsUserDto{
    @IsNotEmpty()
    @IsEmail()
    email: string;
}