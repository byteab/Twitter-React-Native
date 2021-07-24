import create from 'zustand'
export interface IPost {
  fullName: string
  userNameAndDate: string
  profileUrl: string
  content: string
}

const initialPosts = [
  // {
  //   fullName: 'Ehsan Sarshar',
  //   userNameAndDate: '@TheEhsanSarshar . 10m',
  //   profileUrl:
  //     'https://pbs.twimg.com/profile_images/1389235685345959942/B1yoUQGj_400x400.jpg',
  //   content:
  //     'Javascript is every where here is a post about it https://stackoverflow.com/questions/36631762/returning-html-with-fetch',
  // },
]

interface IStore {
  posts: IPost[]
  addPost: (post: IPost) => unknown
}
export const useStore = create<IStore>((set) => ({
  posts: initialPosts,
  addPost: (post) => set((state) => ({posts: [...state.posts, post]})),
}))
