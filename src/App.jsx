import './index.css'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import PostList from './components/PostList/PostList'
import PostModal from './components/PostModal/PostModal'
import Toast from './components/Toast/Toast'

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Moderation Queue</h1>
        <PostList />
        <PostModal />
        <Toast />
      </div>
    </Provider>
  )
}

export default App
