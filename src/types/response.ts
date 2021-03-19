export interface Tag {
  id: number,
  content: string
}

export interface Comment {
  publisherId: number,
  publisherNickname: string,
  publisherProfileImg: string,
  commentId: number,
  content: string,
  tags: Array<Tag>,
  updatedAt: string
}

export interface Post {
  postId: number,
  publisherNickname: string,
  publisherProfileImg: string,
  publisherId: number,
  mention: null | string,
  location: null | string,
  updatedAt: null | string,
  tags: Array<Tag>,
  postImages: Array<string>,
  comments: Array<Comment>
}
