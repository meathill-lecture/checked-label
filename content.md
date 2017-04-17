<!--
title: checked-label
description: the css selectors `:checked+label` can create a lot of useful component, this slide will show you how
-->

`:checked + label`
=======

#### [@meathill](https://weibo.com/meathill/)

<!-- page -->

{{> author}}

<!-- page -->

## 课程大纲

1. 登场选择器介绍简介
2. 替换常规的 `radio` 和 `checkbox`
3. 开关组件
4. 多选组件
5. 星星打分组件
6. 结合 Vue 做标签输入组件

<!-- page -->

## 登场选择器介绍

<!-- page -->

## `:checked`

1. CSS3 新增伪类选择器
2. 用来选择 `radio` 和 `checkbox` 处于选中状态的元素
3. 亦可选择 `<select>` 中被选中的 `<option>`

```html
<input type="radio" checked>
<input type="checkbox" checked>
<select>
  <option selected>Some Value</option>
</select>
```

<!-- page -->

## `+` `~`

1. CSS3 新增兄弟选择器
2. 用来选择某元素后面，[毗邻|所有] 同层级元素

```html
<ul>
  <li class="sample"></li>
  <li></li> <!-- `.sample + *` 选到这里 -->
  <li></li> 
  <li></li> <!-- `.sample ~ *` 选到这里 -->
</ul>
```

<!-- page -->

## 替换初始的 `radio` 和 `checkbox`

```
./sample/radio-checkbox.html
```

<!-- page -->

## 开关组件

```
./sample/switch.html
```

<!-- page -->

## 多选组件

```
./sample/multi-select.html
```

<!-- page -->

## 星星打分组件

```
./sample/stars.html
```

<!-- page -->

## 输入标签组件

```
./sample/tags.html
```

<!-- page -->

Q&A

<!-- page -->

参考阅读：

* [W3C Selectors Level 3](https://www.w3.org/TR/css3-selectors/)
* [MDN 中文 CSS 选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors)
* [纯CSS实现多选组件](http://blog.meathill.com/tech/fe/create-multiple-select-component-with-pure-css.html)