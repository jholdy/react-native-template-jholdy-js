import React, { useEffect } from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';

export default function AuthLoadingScreen({ navigation }) {
  const { token } = useSelector(state => state.login);

  useEffect(() => {
    navigation.navigate(token ? 'App' : 'Auth');
  }, [token]);

  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
}
