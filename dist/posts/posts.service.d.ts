import { HttpException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { Post } from './post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
export declare class PostsService {
    private postsRepository;
    private userService;
    constructor(postsRepository: Repository<Post>, userService: UsersService);
    createPost(post: CreatePostDto): Promise<Post | HttpException>;
    getPosts(): Promise<Post[]>;
}
