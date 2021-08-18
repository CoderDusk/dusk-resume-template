# dusk-resume-template

一个基于 Vue 3 和 ElementPlus 的简历网页模板，方便展示项目链接、二维码和截图等信息。

## 截图
![截图](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-6fec5402-1210-4b81-9949-97c1987784b9/378a4378-ed6b-4003-ab6c-f1bb81a3ad12.png)

### 安装

```
yarn install
```

### 运行调试
```
yarn serve
```
http://localhost:8080/#/edit 编辑简历
http://localhost:8080/#/preview 预览简历

编辑和预览基于浏览器本地存储的数据，编辑完成后请点击 导出简历，并将生成的 data.json(名字一定要一致) 放入 /src 文件夹替换原有文件

http://localhost:8080/#/ 最终展示效果，数据来自 data.json



### 打包
```
yarn build
```
打包完成后把 /dist 文件夹下的静态文件放到 Web 服务器的相应文件夹下即可访问
