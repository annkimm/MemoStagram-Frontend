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
