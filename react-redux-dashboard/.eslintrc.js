module.exports = {
  'env': {
    'browser': true,
    'es2020': true,
    'node': true,
  },
  'extends': [
    'plugin:react/recommended',
    'prettier',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 11,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'quotes': [ 1, 'single', 'avoid-escape' ],
    'react/jsx-indent': [ 2, 4 ],
    'no-undef': [ 1 ],
  },
};
