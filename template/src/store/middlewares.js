import NetInfo from '@react-native-community/netinfo';
import api from 'services/api';

const authMiddleware = store => next => action => {
  const { login } = store.getState();
  if (login.token) {
    api.defaults.headers.common.Authorization = `Bearer ${login.token}`;
  }
  next(action);
};

const netInfoMiddleware = () => next => action => {
  next(action);
  NetInfo.fetch().then(state => {
    if (state.isConnected) {
      next(action);
    } else {
      alert('Not is connected!');
    }
  });
};

export default [authMiddleware, netInfoMiddleware];
