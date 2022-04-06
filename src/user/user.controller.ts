import { Controller, Get, Post, Body, Delete, Param, Res} from '@nestjs/common';
import { UserService} from './user.service';
import { Response } from 'express';
 
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService){}
 
    @Get('all')
    async getAll(@Res() res: Response){
        const user = await this.userService.findAll();
        if(user === undefined || user.length == 0)
        {
            res.status(404).json({message:'Users not found'});
        }
        else
        {
            res.status(200).json({message:'Users fetched successfully', data: user});
        }
    }

    @Get(':id')
    async getUserbyId(@Param('id') id, @Res() res: Response){
        const user = await this.userService.findUserbyId(id);
        if(user === undefined || user.length == 0)
        {
            res.status(404).json({message:'User not found'});
        }
        else
        {
            res.status(200).json({message:'User fetched successfully', data: user});
        }
    }

    @Post('add')
    createUser(@Body() addUser:any, @Res() res: Response){
	    this.userService.create(addUser);
        res.status(200).json({message:'User created successfully'});
    }

    @Post('update')
    updateUser(@Body() userUpdate:any, @Res() res: Response){
	    this.userService.update(userUpdate);
        res.status(200).json('User updated');
    }

    @Delete('delete/:id')
    deleteUser(@Param('id') id, @Res() res: Response){
	    this.userService.delete(id);
        res.status(200).json({message:'User deleted successfully', data: {id:id}});
    }

}