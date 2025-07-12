import React, { useEffect } from 'react'
import './Toast.css'
import { useDispatch, useSelector } from 'react-redux'
import { hideToast, undoStatusChange } from '../../store/moderationSlice'

export default function Toast() {
  const dispatch = useDispatch()
  const toast = useSelector((state) => state.moderation.toast)

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => dispatch(hideToast()), 5000)
      return () => clearTimeout(timer)
    }
  }, [toast, dispatch])

  if (!toast) return null

  return (
    <div className="toast">
      {toast.count} post{toast.count > 1 ? 's' : ''} {toast.newStatus}.
      <button onClick={() => dispatch(undoStatusChange())}>Undo</button>
    </div>
  )
}
