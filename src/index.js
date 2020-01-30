import React, { PureComponent } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import PropTypes from 'prop-types';
import 'config/ReactotronConfig';

import { Provider } from 'react-redux';
import { store, persistor } from './store';
import AppNavigation from 'AppNavigation';

export default class App extends PureComponent {
  static childContextTypes = {
    store: PropTypes.shape({}),
  };

  getChildContext() {
    return {
      store,
    };
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigation />
        </PersistGate>
      </Provider>
    );
  }
}
