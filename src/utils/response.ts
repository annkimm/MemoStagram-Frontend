import axios from 'axios';

const instance = axios.create({
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
