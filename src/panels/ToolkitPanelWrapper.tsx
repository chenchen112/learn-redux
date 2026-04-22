import React from 'react';
import { Provider } from 'react-redux';
import { toolkitStore } from '@/stores/toolkit/store';
import ToolkitPanelContent from './ToolkitPanelContent';

const ToolkitPanelWrapper: React.FC = () => {
  return (
    <Provider store={toolkitStore}>
      <ToolkitPanelContent />
    </Provider>
  );
};

export default ToolkitPanelWrapper;
