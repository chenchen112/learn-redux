import React from 'react';
import { Provider } from 'react-redux';
import { reduxStore } from '@/stores/redux/store';
import ReduxPanelContent from './ReduxPanelContent';

const ReduxPanelWrapper: React.FC = () => {
  return (
    <Provider store={reduxStore}>
      <ReduxPanelContent />
    </Provider>
  );
};

export default ReduxPanelWrapper;
