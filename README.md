# babel-jest-require-ensure

When using `require.ensure` for code-splitting with webpack, Jest will give you an error when it reaches that part of the code:
This plugin adds the require.ensure function to the generated code for each file that doesn't have it defined.

```
require.ensure is not a function
```


## Installation

Using [npm](https://www.npmjs.com/):

    $ npm install --save git://github.com/helielson/babel-jest-require-ensure.git

Using [yarn](https://yarnpkg.com/en/):

    $ yarn add git://github.com/helielson/babel-jest-require-ensure.git


Then use the plugin as preprocessor on Jest config instead of `babel-jest`.

```
"jest": {
  "transform": {
    ".*": "./node_modules/babel-jest-require-ensure"
  }
}
```
