import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import 'config/ReactotronConfig';

import { Provider } from 'react-redux';
import { store, persistor } from './store';
import AppNavigation from 'AppNavigation';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppNavigation />
    </PersistGate>
  </Provider>
);

export default App;
