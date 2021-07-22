import { PostsContextInterface } from '../interfaces';
import { createContext } from "react";

export const postsContext = createContext<PostsContextInterface | null>(null)