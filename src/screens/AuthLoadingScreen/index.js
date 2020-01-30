/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { useSelector } from 'react-redux';

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
