## 使用前注意事项

1、直接使用 `cnpm`可能会导致依赖不正确。强烈建议给 `npm` 设置 taobao 的 registry。

`npm install --registry=https://registry.npm.taobao.org`

2、如果你遇到 `$t` 报错问题，先删除 `node_modules`文件夹后再重装依赖。

3、新建页面，需重新`npm run dev`才可以正常访问新建的页面。


## 前言
`vue2.0`上线已经有一段时间了，现在`vue2.1`也都已经发布了，是时候来更新基于vue的多页面脚手架了。

相信用vue的童鞋，很多一部分在用于spa（单页面）项目，也不排除传统的多页面项目，我们就用vue开发了多页面的webapp，相对于spa开发效率更高，使用单页面或者多页面，最终还是看项目的需求啦。

这一次我们基于`vuejs2+webpack2+vuxui2`(好222的项目)重新发布了全新的vue脚手架，同时还支持二级目录，以解决页面比较多时，便于归类查找的问题。基于webpack2，构建速度高。ajax获取数据，使用`axios`，当然还有其他的优化，咱们先看看demo呗。

demo地址：
http://v.lanchenglv.com/demo/vue2-cli-vux2-multe-page/views/home/list.html

github地址：
https://github.com/bluefox1688/vue-cli-multi-page

** 此版仅支持vu2.0，如果需要vue1.0多页面脚手架，请访问分支 **
https://github.com/bluefox1688/vue-cli-multi-page/tree/master 

## 2.0的主要功能

 1. 全局统一使用的模块`Lib.js`库
 2. 支持字体图标
 3. 构建时，增加对css打包的支持
 4. 提取公共模块
 5. 多页面可使用vue-router2路由
 6. 可自定义页面模块名，例如 http:// localhost:8091/`views`/home/list.html，`views`就是我们线上的模块名，1.0版只能固定的
 7. 支持二级目录，便于归类，1.0版本暂时仅支持一级目录
 8. 模块下静态文件可直接调用
 9. 发送ajax请求，使用`axios`库，简单封装了一个库，为了减少学习成本，封装参数基本与`JQ ajax`一致，如果不需要可直接删除
 10. 整合了vue最流行的UI框架，`vuxui2.x`，`github star` 已接近`8K`了，组件非常全面，并且作者一直有维护，从`0.x`版本我就开始有使用了，具体了解更多，请访问官网 https://vux.li
 11. 基于`webpack2`，更高的构建速度，包体积更小，全面支持`ES6 Modules`
 12. 热更新，效率提升神器呀
 13. 支持`Less`css预处理
 14. 获取多页面的url参数的方法
 15. 全局注册vue全局过滤器的方法

## Build Setup
clone到本地仓之后，自行`npm **`，都是老司机了，这里也不重复了。


``` bash
# 安装依赖
npm install

# 调试环境 serve with hot reload at localhost:8091
npm run dev

# 生产环境 build for production with minification
npm run build

```
本地默认访问端口为8091，需要更改的童鞋请到项目目录文件`config/index.js`修改。


## 目录结构
``` 
webpack
 |---build
 |---src
     |---assets    #资源
     |---css/common.css  #css
     |---font/    #字体图标
     |---js/common.js    #自己定义的全局通用事件
     |---js/conf.js    #项目的配置
     |---js/Lib.js    #暴露接口给组件调用
     |---js/vueFilter.js    #注册vue的全局过滤器	
 |---components 组件
     |---Button.vue  按钮组件
     |---hb-head.vue  head组件
|---views    #各个页面模块，模块名可以自定义哦！
     |---home    #一级目录
        |---list    #二级目录
             |---list.html
             |---list.js
             |---listApp.vue
     |---vuxDemo    #一级目录
        |---button    #二级目录
             |---button.html
             |---button.js
             |---buttonApp.vue	
        |---calendar    #二级目录
             |---calendar.html
             |---calendar.js
             |---calendarApp.vue		 
......
     
  ```
此次2.0版本也优化也可以自定义模块的名称，1.0版时，无法自定义模块名。

例如 http:// localhost:8091/`views`/home/list.html，`views`就是我们线上的模块名，如需修改请到项目目录文件config/index.js修改`moduleName`参数，修改这里的配置的同时，也要同时重命名`/src/views`的这个文件夹名称，是否会报错的。
  
  从目录结构上，各种组件、页面模块、资源等都按类新建了文件夹，方便我们储存文件。其实我们所有的文件，最主要都是放在`views`文件夹里，以文件夹名为html的名称。
例如

``` stylus
|---vuxDemo    一级目录
 |---button    二级目录
   |---button.html
   |---button.js
   |---buttonApp.vue	
```
就是我们访问时的地址：

``` stylus
http://localhost:8091/views/vuxDemo/button.html
```

在`view`里二级文件夹，一个文件夹就是一个html，`js``vue``html` 都统一放在当前文件夹里，当然你也可以继续放其他的资源，例如css、图片等，webpack会打包到当前模块里。

还有一点要注意的，所有的目录都要求为二级，不能一个目录下为一级，另一个目录下有二级。

## Lib.js库使用

我们做多页面开发，那肯定会涉及到全局都能调用的公共库，或者是把别人封装的库也一起打包在全局公共模块里。

如果看过源码的童鞋，在`*.vue`页面里，都统一import了一个文件

```
import Lib from 'assets/js/Lib';
```
这就是全局统一公共模块，我们先看看`Lib.js`里的代码

``` bash
# 导入全局的css
require('assets/css/common.css');
# 导入全局的站点配置文件
import C from './conf';
# 导入全局的共用事件
import M from './common';

export default{
	M,C
}

```
在`Lib.js`的`M`、`C`都是事件调用简写。例如我们现在想调用APP的名称，在`.vue`里可以这么写

``` bash
import Lib from 'assets/js/Lib';
Lib.C.appname;  #蓝橙绿
```
只需要在`*.vue`里导入`import Lib from 'assets/js/Lib';'`，就可以使用全局模块了。
当然你还可以在Lib做一些程序判断，例如权限判断等。

## 公共模块
我们通常会把常用的库都打包成公共模块，`CommonsChunkPlugin` 插件，是一个可选的用于建立一个独立文件(又称作 chunk)的功能，这个文件包括多个入口 chunk 的公共模块。最终合成的文件能够在最开始的时候加载一次，便存起来到缓存中供后续使用。这个带来速度上的提升，因为浏览器会迅速将公共的代码从缓存中取出来，而不是每次访问一个新页面时，再去加载一个更大的文件。

不同的项目，使用到的插件库数量有所不同，我们可以调整`minChunks`以达到公共模块的大小，文件路径为`/build/webpack.prod.conf.js`，cart+F查找`minChunks`参数，`minChunks: 4` 意思代表为至少被4个页面引用了，就打包进入公共模块，具体的使用方法，可以再详细了解`webpack`中文文档。http://www.css88.com/doc/webpack2/plugins/commons-chunk-plugin/

## 存在的问题
1、多页面可以使用vue-router路由，但是无法使用按需加载，即懒加载，研究过在多页面的路由里按需加载，但从未成功，如果有童鞋研究成功了，可以发lssues一起交流哈。

2、暂时还没有做css自动补前缀

3、......

## 结束言
此vue多页面脚手架，并不局限于vux ui 框架，但现在的UI框架都要自己对webpack简单配置下。

生命在于折腾，理想还是要有的，万一实现了呢。

有问题随时Issues哈！

## 文章首发地址：
http://lanchenglv.com/article/2017/0409/vue2-webpack2-cli-vux2-multe-page.html
