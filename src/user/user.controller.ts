import { Controller, Get, Post, Body, HttpCode, Delete, Param, Res, HttpStatus } from '@nestjs/common';
import { UserService} from './user.service';
import {User} from './user.entity';
import { Response } from 'express';
 
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService){}
 
    @Get('all')
    async getAll():Promise<User[]>{
        return await this.userService.findAll();
    }

    @Get(':id')
    async getUserbyId(@Param('id') id, @Res() res: Response){
        const user = await this.userService.findUserbyId(id);
        res.status(200).json({message:'User fetched successfully', data: user})
    }

    @Post('add')
    createUser(@Body() addUser:any, @Res() res: Response){
	    this.userService.create(addUser);
        res.status(201).json('User created');
    }

    @Post('update')
    updateUser(@Body() userUpdate:any, @Res() res: Response){
	    this.userService.update(userUpdate);
        res.status(200).json('User updated');
    }

    @Delete('delete/:id')
    deleteUser(@Param('id') id, @Res() res: Response){
	    this.userService.delete(id);
        res.status(200).json('User deleted');
    }

}