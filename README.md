# webpack-tutorial

Webpack Learning Study

## webpack

4x 版本：

```bash
npm install webpack@4 webpack-cli@3 -D
```

5x 版本：

```bash
npm install webpack webpack-cli -D
```

## npm

查看包提交版本

```bash
npm view xxxx versions
```

考虑 `webpack`版本`4x`和`5x`对应的`loaders`和`plugins`存在兼容性问题，如果不确定版本问题，如果有大版本更新，可以使用上一个大版本安装

如果当前包是 5，为了兼容安装：

```bash
npm install xxx@4 -D
```
