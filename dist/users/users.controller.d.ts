import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateProfileDto } from './dto/create-profile.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<User[]>;
    getUser(id: number): Promise<User | import("@nestjs/common").HttpException>;
    createUser(newUser: CreateUserDto): Promise<User | import("@nestjs/common").HttpException>;
    deleteUser(id: number): Promise<import("@nestjs/common").HttpException | import("typeorm").DeleteResult>;
    updateUser(id: number, user: UpdateUserDto): Promise<import("@nestjs/common").HttpException | (User & UpdateUserDto)>;
    createProfile(id: number, profile: CreateProfileDto): Promise<User | import("@nestjs/common").HttpException>;
}
