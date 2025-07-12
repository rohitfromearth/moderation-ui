import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveStatus } from '../../store/moderationSlice'
import './StatusTabs.css'

export default function StatusTabs() {
  const dispatch = useDispatch()
  const { posts, activeStatus } = useSelector((state) => state.moderation)

  const getCount = (status) => posts.filter((p) => p.status === status).length

  const statuses = ['pending', 'approved', 'rejected']

  return (
    <div className="status-tabs">
      {statuses.map((status) => (
        <button
          key={status}
          className={`tab ${activeStatus === status ? 'active' : ''}`}
          onClick={() => dispatch(setActiveStatus(status))}
        >
          {status[0].toUpperCase() + status.slice(1)} ({getCount(status)})
        </button>
      ))}
    </div>
  )
}
