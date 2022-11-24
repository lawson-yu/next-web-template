import type { PropsWithChildren } from 'react';
import React from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';
import Provider from '@/contexts';
import { ConfigProvider } from 'antd';

type IProps = PropsWithChildren<{}>;

function Layout(props: IProps) {
  const { children } = props;
  const userInfo = { avatar: '', name: '' };

  return (
    <Provider userInfo={userInfo}>
      <ErrorBoundary>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#00b96b',
            },
          }}
        >
          {children}
        </ConfigProvider>
      </ErrorBoundary>
    </Provider>
  );
}

export default Layout;
