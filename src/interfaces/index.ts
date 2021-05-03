export interface Post {
  id: string
  content: string
  image?: {
    url: string
  }
}

export interface PostApiJson {
  posts: Post[]
}
