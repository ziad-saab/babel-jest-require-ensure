# babel-jest-require-ensure

The code is from [this issue comment](https://github.com/atecarlos/webpack-babel-jest/issues/12#issuecomment-221308100) by @sawyerh

When using `require.ensure` for code-splitting with webpack, Jest will give you an error when it reaches that part of the code:

```
require.ensure is not a function
```

Fix it like this:

1. Put this file somewhere in the root of your project in `jest-babel-custom.js`.
2. Change your Jest config `transform` from `<rootDir>/node_modules/babel-jest` to `<rootDir>/jest-babel-custom.js`.
