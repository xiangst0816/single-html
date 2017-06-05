# single-html

> 最终生成的文件只有一个HTML(不是SPA或者PWA项目脚手架)

## Introduce

这是一个适用于移动端H5的单页面工程(One Single Html)，用于只有一个html的特殊页面编写，比如：App下载页面、H5活动展示页面、OIA页面、Login页面等。采用这种模式是因为业务简单，通过部署build之后的html即可。

## Feature

工程模板使用Gulp自动化工具将js、css、img等资源全部打包到一个html中(需要标注`inline `)，并压缩合并做好样式兼容处理。便于部署，优化网络请求。

## How To Start

```bash
# install
npm install
# run server
gulp serve
```


## Gulp Task

```bash
# run server
gulp serve
# page for publish
gulp build
```