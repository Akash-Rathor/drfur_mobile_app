import { configureStore } from '@reduxjs/toolkit'
import statusbarReducer from './reducer'

export default configureStore({
  reducer: {
    statusbar:statusbarReducer,
  },
})