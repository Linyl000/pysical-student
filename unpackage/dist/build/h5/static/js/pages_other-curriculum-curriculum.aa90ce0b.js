(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_other-curriculum-curriculum"],{"150b":function(t,e,n){var i=n("6f27");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("dfa99a04",i,!0,{sourceMap:!1,shadowMode:!1})},"257d":function(t,e,n){"use strict";n.r(e);var i=n("3ca8"),r=n("6c0e");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("d31d");var o,d=n("f0c5"),s=Object(d["a"])(r["default"],i["b"],i["c"],!1,null,"771de179",null,!1,i["a"],o);e["default"]=s.exports},"3ca8":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[1===t.i.courseType?n("v-uni-video",{ref:"myVideo",staticClass:"video-inst",attrs:{id:"myVideo",src:t.i.courseVideo}}):t._e(),n("v-uni-text",{staticClass:"course-name",attrs:{lines:"1"}},[t._v(t._s(t.i.taskName))]),n("v-uni-view",{staticClass:"course-des-box"},[n("v-uni-view",{staticClass:"block_3"}),n("v-uni-text",{staticClass:"text_7",attrs:{lines:"1"}},[t._v("章节详情")])],1),n("div",{staticClass:"course-video-info"},[t._v(t._s(t.i.taskDetails))]),n("div",{staticClass:"course-image-text-info"},[n("div",{staticClass:"content-rich",domProps:{innerHTML:t._s(t.noticeContent)}})]),n("div",{staticClass:"safe"})],1)},a=[]},"3d18":function(t,e,n){"use strict";var i=n("4ea4");n("d3b7");i(n("4f5e"));var r="http://120.76.132.152:8091/wxapi";function a(t,e){var n=new Promise((function(n,i){e||(e={});var a=e;uni.request({url:r+t,data:a,method:"POST",header:{"content-type":"application/json;charset=UTF-8",Authorization:uni.getStorageSync("token")},success:function(t){if(401===t.data.code)return uni.removeStorageSync("token"),void uni.redirectTo({url:"/pages_other/first-info/first-info"});n(t.data)},fail:function(t){i("网络出错")}})}));return n}function o(t,e){var n=new Promise((function(n,i){uni.request({url:r+t,data:e,method:"GET",dataType:"json",header:{"content-type":"application/json",Authorization:uni.getStorageSync("token")},success:function(t){if(401===t.data.code||403===t.data.code)return uni.removeStorageSync("token"),void uni.redirectTo({url:"/pages_other/first-info/first-info"});n(t.data)},fail:function(t){i("网络出错")}})}));return n}function d(t,e,n){var i=new Promise((function(n,i){e||(e={});var a=e;uni.getStorageSync("userTel"),uni.request({url:r+t,data:a,method:"PUT",dataType:"json",header:{"content-type":"application/json",Authorization:uni.getStorageSync("token")},success:function(t){if(401===t.data.code||403===t.data.code)return uni.removeStorageSync("token"),void uni.redirectTo({url:"/pages_other/first-info/first-info"});n(t.data)},fail:function(t){i("网络出错")}})}));return i}function s(t,e){var n=new Promise((function(n,i){e||(e={});var a=e;uni.getStorageSync("userTel"),uni.request({url:r+t,data:a,method:"DELETE",dataType:"json",header:{"content-type":"application/json",Authorization:uni.getStorageSync("token")},success:function(t){if(401===t.data.code||403===t.data.code)return uni.removeStorageSync("token"),void uni.redirectTo({url:"/pages_other/first-info/first-info"});n(t.data)},fail:function(t){i("网络出错")}})}));return n}t.exports={post:a,get:o,put:d,del:s,ip:r}},"630e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.studyRecordList=r,e.studyRecordAdd=a,e.studyRecordUp=o;var i=n("3d18");function r(t){return(0,i.get)("/base/studyRecord/list",t)}function a(t){return(0,i.post)("/base/studyRecord",t)}function o(t){return(0,i.put)("/base/studyRecord",t)}},"6c0e":function(t,e,n){"use strict";n.r(e);var i=n("7034"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},"6f27":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* uni.scss */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.page[data-v-771de179]{background-color:#f8f8f8}.video-inst[data-v-771de179]{width:%?686?%;height:%?386?%;border-radius:%?16?%;margin:%?20?% auto}.course-name[data-v-771de179]{width:%?346?%;height:%?48?%;overflow-wrap:break-word;font-size:%?36?%;font-weight:600;text-align:left;white-space:nowrap;line-height:%?48?%;margin:%?16?% 0 0 %?32?%}.course-des[data-v-771de179]{display:flex;flex-direction:row;justify-content:space-between;width:%?686?%;height:%?48?%;margin:%?16?% 0 0 %?32?%}.single-avatar_1[data-v-771de179]{width:%?48?%;height:%?48?%}.teacher-name[data-v-771de179]{width:%?112?%;height:%?48?%;overflow-wrap:break-word;font-size:%?28?%;font-family:PingFangSC-Regular;font-weight:400;text-align:left;white-space:nowrap;line-height:%?48?%;margin-left:%?8?%}.look-number[data-v-771de179]{color:#b1b6c3;font-size:%?28?%;line-height:%?48?%}.course-des-box[data-v-771de179]{width:%?144?%;height:%?40?%;flex-direction:row;display:flex;justify-content:space-between;margin:%?32?% 0 0 %?32?%}.block_3[data-v-771de179]{background-color:#5d4fdc;border-radius:%?8?%;width:%?16?%;height:%?36?%;margin-top:%?2?%;display:flex;flex-direction:column}.text_7[data-v-771de179]{font-size:%?28?%}.course-video-info[data-v-771de179],\r\n.course-image-text-info[data-v-771de179]{width:%?686?%;color:#888;font-size:%?28?%;line-height:%?46?%;margin:%?16?% auto}.course-video-info .content-rich[data-v-771de179],\r\n.course-image-text-info .content-rich[data-v-771de179]{width:100%;word-break:break-all}.safe[data-v-771de179]{width:100%;height:%?140?%}.button-wrapper[data-v-771de179]{position:fixed;display:flex;width:100%;height:%?120?%;justify-content:space-around;bottom:0;left:0;padding-top:%?20?%;background-color:#fff;box-shadow:0 -2px 10px rgba(0,0,0,.1)}.button-wrapper .text-wrapper[data-v-771de179]{width:%?320?%;height:%?68?%;border-radius:%?36?%;line-height:%?66?%;text-align:center;border:1px solid #5d4fdc;color:#5d4fdc}.button-wrapper .active[data-v-771de179]{width:%?640?%;height:%?68?%;border-radius:%?36?%;line-height:%?66?%;text-align:center;background-color:#5d4fdc;color:#fff}',""]),t.exports=e},7034:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("630e"),r={data:function(){return{i:null,id:null,startTime:null,endTime:null}},onLoad:function(t){this.i=JSON.parse(t.i),this.startTime=(new Date).getTime(),this.studyRecordAdd()},onUnload:function(){this.endTime=(new Date).getTime(),this.studyRecordUp()},methods:{getWait:function(){uni.navigateTo({url:"/pages_other/wait-result/wait-result"})},studyRecordAdd:function(){var t=this;(0,i.studyRecordAdd)({taskId:this.i.taskId}).then((function(e){t.id=e.data}))},studyRecordUp:function(){(0,i.studyRecordUp)({recordId:this.id,allTime:this.endTime-this.startTime}).then((function(t){}))}}};e.default=r},d31d:function(t,e,n){"use strict";var i=n("150b"),r=n.n(i);r.a}}]);