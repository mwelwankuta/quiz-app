import React, { ReactChild, useState } from 'react'
import { Post, PostsContextInterface } from '../interfaces'
import { postsContext } from './postsContext'

interface Props {
    children: ReactChild
}

const PostsContextProvider: React.FC<Props> = ({ children }) => {
    const [posts, setPosts] = useState<Post[]>([
        { question: 'what color is the sky', answer: "blue" },
    ])

    const contextValue: PostsContextInterface = {
        posts,
        setPosts
    }
    return (
        <postsContext.Provider value={contextValue}>
            {children}
        </postsContext.Provider>
    )
}

export default PostsContextProvider
