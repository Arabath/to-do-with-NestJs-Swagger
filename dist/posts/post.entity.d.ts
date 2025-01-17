import { User } from "src/users/user.entity";
export declare class Post {
    id: number;
    title: string;
    content: string;
    authorId: number;
    author: User;
}
