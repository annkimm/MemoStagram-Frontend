import axios from 'axios';

const instance = axios.create({
  headers: { Authorization: `Bearer ${window.sessionStorage.getItem('token')}` },
  baseURL: `${process.env.REACT_APP_API_URL}`,
  timeout: 3000,
  timeoutErrorMessage: '다시 시도 바랍니다.',
});

export interface userData {
  ok: boolean,
  invalid: boolean,
  message: {
      id: number,
      nickName: string,
      email: string,
      profileImage: string,
      token: string,
  }
}

export interface userInput {
  email: string,
  password: string
}

export function login({ email, password }: userInput) {
  const data = new FormData();

  data.append('email', email);
  data.append('password', password);

  return instance.post('/', data);
}

export function getPosts(nextPage: number) {
  const hasMorePage = nextPage > 0 ? `?page=${nextPage}` : '';
  return instance.get(`/post/all/${hasMorePage}`);
}

export function getPost(postId: number) {
  return instance.get(`/post/${postId}`);
}

export function postPost(fileList:Array<File>,
  tags: RegExpMatchArray | null, mention: string | null, location: string | null) {
  const data = new FormData();

  data.append('photos', JSON.stringify(fileList));
  data.append('tags', JSON.stringify(tags));
  data.append('mention', JSON.stringify(mention));
  data.append('location', JSON.stringify(location));

  return instance.post('/post/create', data);
}

export function postPassword(password: string, rePassword: string) {
  const data = new FormData();

  data.append('password', password);
  data.append('re_password', rePassword);

  return instance.post('/user/password', data);
}

export function postNickname(nickname: string) {
  const data = new FormData();

  data.append('nickname', nickname);

  return instance.post('/user/nickname', data);
}

export function getHashtag(hashtag: string) {
  return instance.get(`hashtag/search?query=${hashtag}`);
}

export function postProfileImage(file: any | null) {
  const data = new FormData();

  data.append('profile_image', file);

  return instance.post('/user/profile', data);
}
