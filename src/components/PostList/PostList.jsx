import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../store/moderationSlice'
import PostItem from '../PostItem/PostItem'
import StatusTabs from '../StatusTabs/StatusTabs'
import BatchActions from '../BatchActions/BatchActions'

const PostList = () => {
  const dispatch = useDispatch()
  const { posts, loading, error, activeStatus } = useSelector((state) => state.moderation)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  if (loading) return <p>Loading posts...</p>
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>

  const filtered = posts.filter((p) => p.status === activeStatus)

  return (
    <div>
      <StatusTabs />
      <BatchActions />
      {filtered.length === 0 ? (
        <p>No posts in this category.</p>
      ) : (
        filtered.map((post) => <PostItem key={post.id} post={post} />)
      )}
    </div>
  )
}

export default PostList
