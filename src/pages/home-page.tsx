import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { Post, PostsContextInterface } from '../interfaces'
import { postsContext } from '../context/postsContext'
import PostList from '../components/PostList'

import '../styles/page.css'

const Home: React.FC = () => {

  const [showResults, setShowResults] = useState<boolean>(false)
  const [correctCount, setCorrectCount] = useState<number>(0)
  const [failCount, setFailCount] = useState<number>(0)

  const [showCompletionError, setShowCompletionError] = useState<boolean>(false)

  const posts = useContext<PostsContextInterface | null>(postsContext)

  const showResultsHandler = (): void => {
    if (correctCount + failCount === posts?.posts.length) {
      setShowResults(true)
      setShowCompletionError(false)
      
      setTimeout(() => {
        window.location.reload()
      }, 3500)
    } else {
      setShowCompletionError(true)
    }
   
  }

  return (
    <div className="app">
      <h1 className="app-title" >Quiz Time</h1>
      <p className="create-link">
        <Link
          to='/dash'
          style={{
            color: 'white'
          }}
        >create questions</Link>
      </p>

      {posts?.posts.map((quiz: Post, index: number) =>
        <PostList
          key={index}
          questionNumber={index + 1}
          question={quiz.question}
          answer={quiz.answer}
          correctCount={correctCount}
          failCount={failCount}
          setCorrectCount={setCorrectCount}
          setFailCount={setFailCount}
        />
      )}
      <button
        onClick={() => showResultsHandler()}
      >Show Results</button>
      {showResults &&
        <p className="answer-num">
          {correctCount} of {posts?.posts.length} questions</p>
      }
      {showCompletionError &&
        <p className="errorText">Quiz not completed</p>
      }
    </div>

  )
}

export default Home