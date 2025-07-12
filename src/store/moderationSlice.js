import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { mockPosts } from '../data/mockPosts'

const initialState = {
  posts: [],
  selected: [],
  loading: false,
  error: null,
  modalPost: null,
  activeStatus: 'pending',
  toast: null // { ids: [...], prevStatus: 'pending', newStatus: 'approved', count: 3 }
}

export const fetchPosts = createAsyncThunk(
  'moderation/fetchPosts',
  async (_, { rejectWithValue }) => {
    await new Promise((res) => setTimeout(res, 500))
    if (Math.random() < 0.1) return rejectWithValue('Fetch failed')
    return mockPosts
  }
)

const moderationSlice = createSlice({
  name: 'moderation',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload
    },
    updatePostStatus: (state, action) => {
      const { id, status } = action.payload
      const post = state.posts.find((p) => p.id === id)
      if (post) post.status = status
    },
    openModal: (state, action) => {
      state.modalPost = action.payload
    },
    closeModal: (state) => {
      state.modalPost = null
    },
    setActiveStatus: (state, action) => {
      state.activeStatus = action.payload
    },
    toggleSelected: (state, action) => {
      const id = action.payload
      if (state.selected.includes(id)) {
        state.selected = state.selected.filter((pid) => pid !== id)
      } else {
        state.selected.push(id)
      }
    },
    selectAll: (state, action) => {
      const status = action.payload
      state.selected = state.posts
        .filter((p) => p.status === status)
        .map((p) => p.id)
    },
    clearSelected: (state) => {
      state.selected = []
    },
    batchUpdateStatus: (state, action) => {
      const { ids, status } = action.payload
      state.posts = state.posts.map((p) =>
        ids.includes(p.id) ? { ...p, status } : p
      )
      state.selected = []
    },
    showToast: (state, action) => {
      state.toast = action.payload
    },
    hideToast: (state) => {
      state.toast = null
    },
    undoStatusChange: (state) => {
      if (state.toast) {
        const { ids, prevStatus } = state.toast
        state.posts = state.posts.map((p) =>
          ids.includes(p.id) ? { ...p, status: prevStatus } : p
        )
        state.toast = null
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload
        state.loading = false
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })
  }
})

export const {
  setPosts,
  updatePostStatus,
  openModal,
  closeModal,
  setActiveStatus,
  toggleSelected,
  selectAll,
  clearSelected,
  batchUpdateStatus,
  showToast,
  hideToast,
  undoStatusChange
} = moderationSlice.actions

export default moderationSlice.reducer
