import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';
import createEncryptor from 'redux-persist-transform-encrypt';

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

export default reducers => {
  const persistedReducer = persistReducer(persistConfig, reducers);

  return persistedReducer;
};
