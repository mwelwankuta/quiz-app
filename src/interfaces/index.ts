import { Dispatch, SetStateAction } from "react";

export interface Post {
    question: string,
    answer: string,
}

export interface PostsContextInterface{
    posts: Post[],
    setPosts: Dispatch<SetStateAction<Post[]>>
}