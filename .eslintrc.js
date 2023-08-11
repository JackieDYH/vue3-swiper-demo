/*
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-08-11 14:13:28
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue3-swiper-demo/.eslintrc.js
 * @version: 
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential'
    // "eslint:recommended",
    // "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off'
  }
};
