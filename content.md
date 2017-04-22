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

<!-- page -->

## 课程大纲

1. 组件化
2. 登场选择器介绍
3. 登场标签介绍
4. CSS 动画基础
5. 组件开发实战

<!-- page -->

## 何为组件化

1. 把常用的功能、UI 封装成一个个独立的组件
2. 组件通常有统一的视觉规范和接口规范
3. 业务逻辑的开发，可以视作组件拼接的过程

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
  <li></li> <!-- `.sample + *` 选到这里 -->
  <li></li> 
  <li></li> <!-- `.sample ~ *` 从第二个 `<li>` 到这里 -->
</ul>
```

<!-- page -->

## 登场标签介绍

<!-- page -->

### `<input>` + `<label>`

1. 今天的效果都是由它哥俩完成的
2. `<label for="some-input-id">` 将 label 事件绑定到 `#some-input-id`

<!-- page -->

## CSS 动画基础

1. `transition: prop duration ease`
2. 设置开始、结束属性
2. `transform: translate3d(0,0,0)`

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

Q&A

<!-- page -->

参考阅读：

* [W3C Selectors Level 3](https://www.w3.org/TR/css3-selectors/)
* [MDN 中文 CSS 选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors)
* [纯CSS实现多选组件](http://blog.meathill.com/tech/fe/create-multiple-select-component-with-pure-css.html)
* [MDN 中文 transition](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition)
* [CSS 父元素如何通过判断子元素来设置样式](https://segmentfault.com/q/1010000000641252/a-1020000000641608)