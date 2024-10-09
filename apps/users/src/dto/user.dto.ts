// import {isInt, isString } from '@nestjs/class-validator'
import {ApiProperty} from '@nestjs/swagger'

export class UserDto {
    // @isInt() 
       @ApiProperty() readonly id: number;
    
    // @isString()
        @ApiProperty() readonly firstName: string;
    
    // @isString()
        @ApiProperty() readonly lastName: string;
     
    // @isInt()
        @ApiProperty() readonly age: number;

}