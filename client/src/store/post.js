import { createSlice } from '@reduxjs/toolkit';
import { getDataFromLocalStorage, saveToLocalStorage, checkLocalStorageData, clearLocalStorageData } from '../util';

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    postList: [],
    value: 0,
  },

  reducers: {
    getAllPost: (name) => {
      clearLocalStorageData();
      return name
    },
    setAllPost: (state, action) => {

      if (!checkLocalStorageData()) {

        saveToLocalStorage(action.payload);
        state.postList = getDataFromLocalStorage();

      } else {
        state.postList = [];
      }
      state.postList = action.payload;
    },
    updatePost: (state, action) => {

      let currentValue = action.payload;
      let allPost = getDataFromLocalStorage();

      allPost = allPost.map(item => {
        return item.id === currentValue.id ? { ...item, ...currentValue } : item
      })
      saveToLocalStorage(allPost)
      state.postList = getDataFromLocalStorage();

    }
  },
})

export const { getAllPost, setAllPost, updatePost } = postSlice.actions
export default postSlice.reducer