import React from 'react'
import './PostItem.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  updatePostStatus,
  openModal,
  toggleSelected
} from '../../store/moderationSlice'

export default function PostItem({ post }) {
  const dispatch = useDispatch()
  const isActioned = post.status !== 'pending'
  const selectedIds = useSelector((state) => state.moderation.selected)
  const isChecked = selectedIds.includes(post.id)

  const handleApprove = () => {
    dispatch(updatePostStatus({ id: post.id, status: 'approved' }))
  }

  const handleReject = () => {
    dispatch(updatePostStatus({ id: post.id, status: 'rejected' }))
  }

  return (
    <div className="card">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => dispatch(toggleSelected(post.id))}
        disabled={isActioned}
      />
      <h3
        className="title"
        style={{ cursor: 'pointer', color: '#007bff', display: 'inline-block', marginLeft: 10 }}
        onClick={() => dispatch(openModal(post))}
      >
        {post.title}
      </h3>
      <div className="meta">
        @{post.author.username} • {post.reportedReason} • {new Date(post.reportedAt).toLocaleString()}
      </div>

      <div className="actions">
        <button className="button approve" onClick={handleApprove} disabled={isActioned}>
          Approve
        </button>
        <button className="button reject" onClick={handleReject} disabled={isActioned}>
          Reject
        </button>
        {isActioned && <span className={`status ${post.status}`}>({post.status})</span>}
      </div>
    </div>
  )
}
