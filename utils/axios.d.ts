import axios from 'axios';

declare module 'axios' {
  export interface AxiosResponse<T = any> {
    code: number;
    info: string;
  }
}

export default axios;
