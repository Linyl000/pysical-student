(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_other-curriculum-curriculum"],{"20d3":function(t,e,n){var a=n("eae7");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("33ada92e",a,!0,{sourceMap:!1,shadowMode:!1})},"257d":function(t,e,n){"use strict";n.r(e);var a=n("f3d2"),i=n("6c0e");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("d423");var o,s=n("f0c5"),d=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"4aae1034",null,!1,a["a"],o);e["default"]=d.exports},"3d18":function(t,e,n){"use strict";var a=n("4ea4");n("d3b7");a(n("4f5e"));var i="http://120.76.132.152:8091/wxapi";function r(t,e){var n=new Promise((function(n,a){e||(e={});var r=e;uni.request({url:i+t,data:r,method:"POST",header:{"content-type":"application/json;charset=UTF-8",Authorization:uni.getStorageSync("token")},success:function(t){if(401===t.data.code)return uni.removeStorageSync("token"),void uni.redirectTo({url:"/pages_other/first-info/first-info"});n(t.data)},fail:function(t){a("网络出错")}})}));return n}function o(t,e){var n=new Promise((function(n,a){uni.request({url:i+t,data:e,method:"GET",dataType:"json",header:{"content-type":"application/json",Authorization:uni.getStorageSync("token")},success:function(t){if(401===t.data.code)return uni.removeStorageSync("token"),void uni.redirectTo({url:"/pages_other/first-info/first-info"});n(t.data)},fail:function(t){a("网络出错")}})}));return n}function s(t,e,n){var a=new Promise((function(n,a){e||(e={});var r=e;uni.getStorageSync("userTel"),uni.request({url:i+t,data:r,method:"PUT",dataType:"json",header:{"content-type":"application/json",Authorization:uni.getStorageSync("token")},success:function(t){if(401===t.data.code)return uni.removeStorageSync("token"),void uni.redirectTo({url:"/pages_other/first-info/first-info"});n(t.data)},fail:function(t){a("网络出错")}})}));return a}function d(t,e){var n=new Promise((function(n,a){e||(e={});var r=e;uni.getStorageSync("userTel"),uni.request({url:i+t,data:r,method:"DELETE",dataType:"json",header:{"content-type":"application/json",Authorization:uni.getStorageSync("token")},success:function(t){if(401===t.data.code)return uni.removeStorageSync("token"),void uni.redirectTo({url:"/pages_other/first-info/first-info"});n(t.data)},fail:function(t){a("网络出错")}})}));return n}t.exports={post:r,get:o,put:s,del:d,ip:i}},"630e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.studyRecordList=i,e.studyRecordAdd=r,e.studyRecordUp=o;var a=n("3d18");function i(t){return(0,a.get)("/base/studyRecord/list",t)}function r(t){return(0,a.post)("/base/studyRecord",t)}function o(t){return(0,a.put)("/base/studyRecord",t)}},"6c0e":function(t,e,n){"use strict";n.r(e);var a=n("7034"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},7034:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("630e"),i={data:function(){return{i:null,id:null,startTime:null,endTime:null}},onLoad:function(t){this.i=JSON.parse(t.i),this.startTime=(new Date).getTime(),this.studyRecordAdd()},onUnload:function(){this.endTime=(new Date).getTime(),this.studyRecordUp()},methods:{getWait:function(){uni.navigateTo({url:"/pages_other/wait-result/wait-result"})},studyRecordAdd:function(){var t=this;(0,a.studyRecordAdd)({taskId:this.i.id}).then((function(e){t.id=e.data}))},studyRecordUp:function(){(0,a.studyRecordUp)({recordId:this.id,allTime:this.endTime-this.startTime}).then((function(t){}))}}};e.default=i},d423:function(t,e,n){"use strict";var a=n("20d3"),i=n.n(a);i.a},eae7:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* uni.scss */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.page[data-v-4aae1034],\r\nuni-page-body[data-v-4aae1034]{background-color:#f8f8f8}.video-inst[data-v-4aae1034]{width:%?686?%;height:%?386?%;border-radius:%?16?%;margin:%?20?% auto}.course-name[data-v-4aae1034]{width:%?346?%;height:%?48?%;overflow-wrap:break-word;font-size:%?36?%;font-weight:600;text-align:left;white-space:nowrap;line-height:%?48?%;margin:%?16?% 0 0 %?32?%}.course-des[data-v-4aae1034]{display:flex;flex-direction:row;justify-content:space-between;width:%?686?%;height:%?48?%;margin:%?16?% 0 0 %?32?%}.single-avatar_1[data-v-4aae1034]{width:%?48?%;height:%?48?%}.teacher-name[data-v-4aae1034]{width:%?112?%;height:%?48?%;overflow-wrap:break-word;font-size:%?28?%;font-family:PingFangSC-Regular;font-weight:400;text-align:left;white-space:nowrap;line-height:%?48?%;margin-left:%?8?%}.look-number[data-v-4aae1034]{color:#b1b6c3;font-size:%?28?%;line-height:%?48?%}.course-des-box[data-v-4aae1034]{width:%?144?%;height:%?40?%;flex-direction:row;display:flex;justify-content:space-between;margin:%?32?% 0 0 %?32?%}.block_3[data-v-4aae1034]{background-color:#5d4fdc;border-radius:%?8?%;width:%?16?%;height:%?36?%;margin-top:%?2?%;display:flex;flex-direction:column}.text_7[data-v-4aae1034]{font-size:%?28?%}.course-video-info[data-v-4aae1034],\r\n.course-image-text-info[data-v-4aae1034]{width:%?686?%;color:#888;font-size:%?28?%;line-height:%?46?%;margin:%?16?% auto}.course-video-info .content-rich[data-v-4aae1034],\r\n.course-image-text-info .content-rich[data-v-4aae1034]{width:100%;word-break:break-all}.safe[data-v-4aae1034]{width:100%;height:%?140?%}.button-wrapper[data-v-4aae1034]{position:fixed;display:flex;width:100%;height:%?120?%;justify-content:space-around;bottom:0;left:0;padding-top:%?20?%;background-color:#fff;box-shadow:0 -2px 10px rgba(0,0,0,.1)}.button-wrapper .text-wrapper[data-v-4aae1034]{width:%?320?%;height:%?68?%;border-radius:%?36?%;line-height:%?66?%;text-align:center;border:1px solid #5d4fdc;color:#5d4fdc}.button-wrapper .active[data-v-4aae1034]{width:%?640?%;height:%?68?%;border-radius:%?36?%;line-height:%?66?%;text-align:center;background-color:#5d4fdc;color:#fff}body.?%PAGE?%[data-v-4aae1034]{background-color:#f8f8f8}',""]),t.exports=e},f3d2:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[1===t.i.courseType?n("v-uni-video",{ref:"myVideo",staticClass:"video-inst",attrs:{id:"myVideo",src:t.i.courseVideo}}):t._e(),n("v-uni-text",{staticClass:"course-name",attrs:{lines:"1"}},[t._v(t._s(t.i.taskName))]),n("v-uni-view",{staticClass:"course-des-box"},[n("v-uni-view",{staticClass:"block_3"}),n("v-uni-text",{staticClass:"text_7",attrs:{lines:"1"}},[t._v("章节详情")])],1),n("div",{staticClass:"course-video-info"},[t._v(t._s(t.i.taskDetails))]),n("div",{staticClass:"course-image-text-info"},[n("div",{staticClass:"content-rich",domProps:{innerHTML:t._s(t.i.noticeContent)}})]),n("div",{staticClass:"safe"})],1)},r=[]}}]);