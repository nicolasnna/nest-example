/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsString } from 'class-validator'

const isNotString = {
  message: 'El campo $property no es un string'
}
export class CreateUserDto {
  @IsString(isNotString)
  @IsNotEmpty()
  username: string

  @IsString(isNotString)
  @IsNotEmpty()
  password: string
}
