import React, { ChangeEvent, FC, useRef, useState } from 'react'

import '../styles/PostList.css'

interface Props {
    question: string,
    answer: string,
    correctCount: number,
    failCount: number,
    questionNumber: number,
    setFailCount: (failCount: number) => void,
    setCorrectCount: (correctCount: number) => void,
}

const PostList: FC<Props> = (props) => {
    const {
        question,
        answer,
        correctCount,
        failCount,
        questionNumber,
        setCorrectCount,
        setFailCount
    } = props

    const [text, setText] = useState<string>("")
    const answerInputRef = useRef<HTMLButtonElement | null>(null)

    const handleSubmitAnswer = (): void => {
        if (answer.toLowerCase().includes(text.toLowerCase())) {
            setCorrectCount(correctCount + 1)
        } else {
            setFailCount(failCount + 1)
        }
        answerInputRef.current?.remove()
    }

    return (
        <div className='post'>
            <div className="post-header">
                <p>Q {questionNumber}</p>
                <h2 className='question'>{question}</h2>
            </div>
            <div className="form">
                <input
                    type="text"
                    placeholder="Type here..."
                    onChange={({target}: ChangeEvent<HTMLInputElement>) => setText(target.value)}
                />
                <button
                    ref={answerInputRef}
                    onClick={() => handleSubmitAnswer()}
                >submit</button>
            </div>
        </div>
    )
}

export default PostList
