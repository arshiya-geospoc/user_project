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

    findUserbyId(id): Promise<User[]> {
        return this.userRepo.find({where:{id:id}});
    }

    async findUser(username: string): Promise<User[]> {
        return this.userRepo.find({where:{username}});
      }

    create(addUser){
        this.userRepo.insert(addUser)
    }

    update(id, userUpdate){
        this.userRepo.update(id,userUpdate);
    }

    delete(id){
        this.userRepo.delete(id);
    }
}