import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectAll,
  clearSelected,
  batchUpdateStatus,
  showToast
} from '../../store/moderationSlice'

export default function BatchActions() {
  const dispatch = useDispatch()
  const { selected, activeStatus } = useSelector((state) => state.moderation)

  const handleSelectAll = () => {
    dispatch(selectAll(activeStatus))
  }

  const handleClear = () => {
    dispatch(clearSelected())
  }

  const handleBatch = (status) => {
    dispatch(batchUpdateStatus({ ids: selected, status }))
    dispatch(showToast({
      ids: [...selected],
      prevStatus: 'pending',
      newStatus: status,
      count: selected.length
    }))
  }

  if (selected.length === 0) return null

  return (
    <div style={{ marginBottom: 16, display: 'flex', gap: '8px', alignItems: 'center' }}>
      <strong>{selected.length} selected</strong>
      <button onClick={handleSelectAll}>Select All</button>
      <button onClick={handleClear}>Clear</button>
      <button onClick={() => handleBatch('approved')}>Approve All</button>
      <button onClick={() => handleBatch('rejected')}>Reject All</button>
    </div>
  )
}
