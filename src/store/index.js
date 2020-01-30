import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import createEncryptor from 'redux-persist-transform-encrypt';
import middlewares from './middlewares';

import reducers from 'store/modules/rootReducers';
import sagas from 'store/modules/rootSagas';

const encryptor = createEncryptor({
  secretKey: 'REACT_APP_KEY',
});

const persistConfig = {
  key: 'root',
  transforms: [encryptor],
  storage: AsyncStorage,
  whitelist: ['login'],
  timeout: 0,
};

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const composer = __DEV__
  ? compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
  : compose(applyMiddleware(...middlewares));

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, composer);
const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export default { store, persistor };
