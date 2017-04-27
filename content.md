<!--
title: checked-label
description: the css selectors `:checked+label` can create a lot of useful component, this slide will show you how
-->

# `:checked + label` <br>组件开发

#### [@meathill](https://weibo.com/meathill/)

<!-- page -->

{{> author}}

<!-- page -->

## 学习目标

1. 了解组件化
2. 学会使用 Stylus 编写 CSS
3. 了解 `:checked`/`+`/`~` 等选择器
4. 了解 CSS 动画基础
5. 学会组合使用 CSS 属性
6. 学会使用 `<label>` 包装点选模块

<!-- page -->

## 课程大纲

1. 组件化
2. 登场选择器介绍
3. 登场标签介绍
4. CSS 动画基础
5. 组件开发实战 **&times;6**<!-- .element: class="red" -->

<!-- page -->

## 何为组件化

1. 把常用的功能、UI 封装成一个个独立的组件
2. 组件通常有统一的视觉规范和接口规范
3. 开发业务逻辑，可以视作拼接组件

<!-- section -->

### 组件化的优势

1. 增加代码的复用能力
2. 减少开发工作量
3. 加强团队协作

<!-- section -->

### 组件化开发的问题

1. 组件化的粒度很难把控
2. 组件之间套用有一定难度
3. 组件库之间混用难度更大

<!-- section -->

### 值得学习的组件化方案

1. HTML + CSS
2. Bootstrap
3. Vue.js

<!-- page -->

### 纯 CSS 组件的优势

1. 任何情况下都可以使用
2. 只需要引入 CSS，侵入性低，混用无成本

<!-- page -->

## 登场选择器介绍

<!-- page -->

### `:checked`

1. CSS3 新增伪类选择器
2. 用来选择 `radio` 和 `checkbox` 处于选中状态的元素
3. 亦可选择 `<select>` 中被选中的 `<option>`

> 由于 CSS 极低的编程能力，这个选择器几乎是我们唯一的依赖。

<!-- section -->

```html
<input type="radio" checked>
<input type="checkbox" checked>
<select>
  <option selected>Some Value</option>
</select>
```

<!-- page -->

### `+` / `~`

1. CSS3 新增兄弟选择器
2. 用来选择某元素后面，[毗邻|所有] 同层级元素

<!-- section -->

```html
<ul>
  <li class="sample"></li>
  <li></li> <!-- `.sample + *` 选择这个元素 -->
  <li></li> 
  <li></li> <!-- `.sample ~ *` 选择第二个 `<li>` 到这个元素 -->
</ul>
```

<!-- page -->

## 登场标签介绍

<!-- page -->

### `<input>`

1. `type="checkcbox"`
    1. 复选框
    2. 只有一个也可以作为开关
    3. `name="q[]"` 以便提交给后端数组
2. `type="radio"`
    1. 单选框

<!-- section -->

### `<label>`

1. 核心属性 `for="some-id"`，代理 `id="some-id"` 表单元素的点击事件
2. 里面可以容纳任何其它元素
3. 是单选框、复选框非常好的替代品

<!-- page -->

## CSS 动画基础

1. 关键属性：`transition: prop duration [ease];`
2. 设置开始属性、结束属性

<!-- section -->

移动设备触发 GPU 渲染：

1. `transform: translate3d(0,0,0)`

<!-- page -->

## 实战开始！！

<!-- page -->

## 替换初始的 `radio`/`checkbox`

范例文件：

* [radio-checkbox.html](https://github.com/meathill-lecture/checked-label/blob/master/sample/radio-checkbox.html)
* [radio-checkbox.styl](https://github.com/meathill-lecture/checked-label/blob/master/styl/radio-checkbox.styl)

<!-- page -->

## 开关组件

范例文件：

* [switch.html](https://github.com/meathill-lecture/checked-label/blob/master/sample/switch.html)
* [switch.styl](https://github.com/meathill-lecture/checked-label/blob/master/styl/switch.styl)

<!-- page -->

## 多选组件

范例文件：

* [multi-select.html](https://github.com/meathill-lecture/checked-label/blob/master/sample/multi-select.html)
* [multi-select.styl](https://github.com/meathill-lecture/checked-label/blob/master/styl/multi-select.styl)

<!-- page -->

## 星星打分组件

范例文件：

* [stars.html](https://github.com/meathill-lecture/checked-label/blob/master/sample/stars.html)
* [stars.styl](https://github.com/meathill-lecture/checked-label/blob/master/styl/stars.styl)

<!-- page -->

## 输入标签组件

范例文件：

* [tags.html](https://github.com/meathill-lecture/checked-label/blob/master/sample/tags.html)
* [tags.styl](https://github.com/meathill-lecture/checked-label/blob/master/styl/tags.styl)
* [tags.js](https://github.com/meathill-lecture/checked-label/blob/master/sample/tags.js)

<!-- page -->

## `<label>` 包装复杂内容

范例文件：

* [list.html](https://github.com/meathill-lecture/checked-label/blob/master/sample/list.html)
* [list.styl](https://github.com/meathill-lecture/checked-label/blob/master/styl/list.styl)

<!-- page -->

## 其他可以开脑洞的选择器

* `:valid` - `<input pattern="regexp">` 验证通过
* `:indeterminate` - 单选/复选处于悬而未决状态
* `:focus` - 文本框获得输入焦点

<!-- page -->

Q&A

<!-- page -->

参考阅读：

* [W3C Selectors Level 3](https://www.w3.org/TR/css3-selectors/)
* [MDN 中文 CSS 选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors)
* [纯CSS实现多选组件](http://blog.meathill.com/tech/fe/create-multiple-select-component-with-pure-css.html)
* [MDN 中文 transition](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition)
* [CSS 父元素如何通过判断子元素来设置样式](https://segmentfault.com/q/1010000000641252/a-1020000000641608)