import {produce} from 'immer'

const blogStore = (set, get, api) => ({
  posts: null,
  isLoading: false,
  currentPost: null,

  setLoading: (isLoading) => set(produce(draft => {
    draft.blogStore.isLoading = isLoading
  })),

  setCurrentPost: (post) => set(produce(draft => {
    // set single post here, either for view or edit
  })),

  fetchPosts: async () => {
    if (get().blogStore.isLoading) return
    const apiUrl = get().staticStore.apiUrl

    try {
      get().blogStore.setLoading(true)
    // fetch the posts here
    } catch (error) {
    // handle error here using global snackbar
    }
  },
})

export default blogStore
