import { Profile } from "./profile.entity";
import { Post } from "src/posts/post.entity";
export declare class User {
    id: number;
    username: string;
    password: string;
    createdAt: Date;
    authStrategy: string;
    profile: Profile;
    posts: Post[];
}
