import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const appMetrics = {
  basePadding: 20,
  baseMargin: 10,
  baseRadius: 5,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};

export default appMetrics;
