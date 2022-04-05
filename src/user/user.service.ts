import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity'; 
 
@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

    findAll(): Promise<User[]> {
        return this.userRepo.find();
    }

    create(addUser){
        this.userRepo.insert(addUser)
    }

    update(userUpdate){
        this.userRepo.update(userUpdate.id,userUpdate);
    }

    delete(id){
        this.userRepo.delete(id);
    }
}