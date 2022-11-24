import http from 'http';

export const getUserInfo = async () => {
  return Promise.resolve<AUTHORIZATION_API.CurrentUser>({
    avatar: '1231',
    name: '刘德华',
  });
};

export const getBlogList = async () => {};
