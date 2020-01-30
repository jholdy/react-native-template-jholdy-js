module.exports = {
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [['transform-optional-chaining'], 
  ['module-resolver', {
    root: ['./src']
  }]],
};
