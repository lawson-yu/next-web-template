import React, { useEffect } from 'react';
import MyComponent from 'components/MyComponent';
import apiErrorNotification from '@/utils/apiErrorNotification';

const Index = () => {
  useEffect(() => {
    apiErrorNotification(new Error('sahjkdh'));
  }, []);
  return (
    <div>
      Index
      <MyComponent />
    </div>
  );
};

export default Index;
