import React from 'react'
import './PostModal.css'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../store/moderationSlice'

export default function PostModal() {
  const dispatch = useDispatch()
  const { modalPost } = useSelector((state) => state.moderation)

  if (!modalPost) return null

  const handleClose = () => dispatch(closeModal())

  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <button className="modal-close" onClick={handleClose}>×</button>
        <h2>{modalPost.title}</h2>
        <p className="meta">
          @{modalPost.author.username} • {modalPost.reportedReason} • {new Date(modalPost.reportedAt).toLocaleString()}
        </p>
        <p>{modalPost.content}</p>
      </div>
    </div>
  )
}
