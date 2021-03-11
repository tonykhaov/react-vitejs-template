import * as React from 'react'
import { useQuery } from 'react-query'
import type { Post } from '@src/types/post'

const Query = () => {
  const query = useQuery<Post[]>('posts', () => fetch('/posts').then((res) => res.json()))
  if (query.isLoading) return <p>Loading...</p>
  return (
    <div>
      {query.data?.map((post) => {
        return (
          <div className="mb-2 border" key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Query
