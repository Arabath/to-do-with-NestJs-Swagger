import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
export declare class PostsController {
    private postsService;
    constructor(postsService: PostsService);
    createPost(post: CreatePostDto): Promise<import("./post.entity").Post | import("@nestjs/common").HttpException>;
    getPosts(): Promise<import("./post.entity").Post[]>;
}
