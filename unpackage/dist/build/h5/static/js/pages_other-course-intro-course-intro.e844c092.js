(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_other-course-intro-course-intro"],{"16b6":function(t,n,e){"use strict";e.r(n);var i=e("8466"),r=e("429c");for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);e("3960");var o,s=e("f0c5"),d=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"5648f8bd",null,!1,i["a"],o);n["default"]=d.exports},3960:function(t,n,e){"use strict";var i=e("9ea6"),r=e.n(i);r.a},"429c":function(t,n,e){"use strict";e.r(n);var i=e("7b1c"),r=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=r.a},"7b1c":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{item:null}},onLoad:function(t){var n=t.item;this.item=JSON.parse(n)},methods:{goHomeworkOrTest:function(){uni.navigateTo({url:"/pages_other/theory/theory?item=".concat(JSON.stringify(this.item))})}}};n.default=i},8466:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"page"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.item.taskName))]),e("v-uni-view",{staticClass:"cut-off-time"},[t._v(t._s("最后截止时间："+t.item.taskEndTime))]),e("v-uni-view",{staticClass:"demand-box"},[e("v-uni-view",{staticClass:"demand-img"}),e("v-uni-text",{staticClass:"demand-text",attrs:{lines:"1"}},[t._v("要求")])],1),e("v-uni-text",{staticClass:"description"},[t._v(t._s("分数达到60视为合格"))]),e("v-uni-view",{staticClass:"button_1",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goHomeworkOrTest.apply(void 0,arguments)}}},[t._v("去完成")])],1)},a=[]},"9ea6":function(t,n,e){var i=e("ed63");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=e("4f06").default;r("263807e5",i,!0,{sourceMap:!1,shadowMode:!1})},ed63:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* uni.scss */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.page[data-v-5648f8bd]{padding:%?52?% %?32?% 0}.title[data-v-5648f8bd]{width:%?700?%;overflow-wrap:break-word;font-size:%?40?%;font-weight:600;white-space:wrap;overflow:hidden;text-overflow:ellipsis;line-height:%?48?%}.cut-off-time[data-v-5648f8bd]{font-size:%?30?%;margin-top:%?16?%}.demand-box[data-v-5648f8bd]{display:flex;align-items:center;margin-top:%?32?%}.demand-box .demand-img[data-v-5648f8bd]{width:%?16?%;height:%?36?%;border-radius:%?8?%;background-color:#5d4fdc;margin-right:%?12?%}.demand-box .demand-text[data-v-5648f8bd]{font-size:%?32?%}.description[data-v-5648f8bd]{margin-top:%?26?%;line-height:1.7}.button_1[data-v-5648f8bd]{position:fixed;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);bottom:%?90?%;border-radius:%?48?%;width:%?448?%;height:%?96?%;font-size:%?32?%;font-weight:600;text-align:center;line-height:%?96?%;color:#fff;background-color:#5d4fdc}',""]),t.exports=n}}]);