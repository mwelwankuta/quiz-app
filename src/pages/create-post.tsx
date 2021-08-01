import React, { useState, useContext, ChangeEvent } from 'react'
import { Link } from 'react-router-dom'

import { postsContext } from '../context/postsContext'
import { Post } from '../interfaces'

import '../styles/page.css'

const Dash: React.FC = () => {

  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")

  const posts = useContext(postsContext)

  const addPostHandler = (event: ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const post: Post = {
      question,
      answer
    }

    posts?.setPosts([...posts?.posts, post])
    setQuestion('')
    setAnswer('')
  }

  return (
    <div className="app">
      <h1 className="app-title" >Create a Quiz</h1>
      <p className="questions-available">Quiz Questions Available <b>{posts?.posts.length}</b></p>
      <p
        style={{
          marginTop: 20
        }}>
        <Link
          to='/'
          style={{
            color: 'white'
          }}
        >view questions...</Link>
      </p>
      <form
        onSubmit={(event: ChangeEvent<HTMLFormElement>) => addPostHandler(event)}
        style={{
          display: 'block'
        }}>
        <input
          type="text"
          value={question}
          placeholder="question"
          onChange={(event: ChangeEvent<HTMLInputElement>) => setQuestion(event.target.value)}
        />
        <input
          type="text"
          value={answer}
          placeholder="answer"
          onChange={(event: ChangeEvent<HTMLInputElement>) => setAnswer(event.target.value)}
        />
        <button
          type="submit"
          style={{
            marginTop: 10
          }}>Add Question</button>
      </form>
    </div>
  )
}

export default Dash