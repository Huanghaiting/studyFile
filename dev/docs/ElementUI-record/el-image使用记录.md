### el-image使用记录

源码：![image](https://i.loli.net/2021/03/20/cEOsx3q4bTW8kVz.png)

```javascript
 <img :src="图片路径" alt="商品图" loading="lazy" @click="onPreview" />
   //loading="lazy"  需看看浏览器是否支持
 <el-image
     :lazy="true"
     :src="图片路径"
 >
 </el-image>
```
如何判断当前浏览器是否支持loading="lazy"？
```javascript
下面三种方法都可以：
var isSupportLoading = 'loading' in document.createElement('img');
或者：
var isSupportLoading = 'loading' in new Image();
或者：
var isSupportLoading = 'loading' in HTMLImageElement.prototype;
```
![img](https://cdn.nlark.com/yuque/0/2020/png/1338123/1607589098029-fe9a97c1-24f4-4f22-bb57-a339e9aa2c5b.png)
在接口正常返回数据的情况下，从图片看el-image会加载两张，而原生img标签则加载一张，测试同一张图片原生img加载更快，且无出现加载失败的情况。


查看资料也有以下情况：
①el-image 一旦初始化加载失败的话，后期更新是不会出图片的。
**解决方案：**要么一开始在标签 el-image 里添加 **“:lazy='true'”**，要么在 **“:src” **里添加默认图片地址，避免渲染DOM的时候找不到地址导致报错。
②引入图片的问题
```javascript
<el-image
    src="../assets/logo1.png"
/>
```
**解决方案：**src用里面加个require
```javascript
<el-image
    :src="require('../assets/logo1.png')"
/>
```
③调用 element-ui 中的   标签，可通过slot = error可自定义加载失败内容
```javascript
<el-image :src="图片路径" :preview-src-list="srcList">
     <div slot="error">
          <i class="el-icon-picture-outline"></i>
     </div>
</el-image>
```
推荐文章：浏览器IMG图片原生懒加载loading=”lazy”实践指南
[https://www.zhangxinxu.com/wordpress/2019/09/native-img-loading-lazy/](https://www.zhangxinxu.com/wordpress/2019/09/native-img-loading-lazy/)
