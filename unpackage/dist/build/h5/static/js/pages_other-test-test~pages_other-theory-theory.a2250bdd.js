(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_other-test-test~pages_other-theory-theory"],{"0f91":function(i,t,o){"use strict";o.r(t);var n=o("d29a"),e=o("4725");for(var u in e)"default"!==u&&function(i){o.d(t,i,(function(){return e[i]}))}(u);o("70cc");var r,a=o("f0c5"),c=Object(a["a"])(e["default"],n["b"],n["c"],!1,null,"59765974",null,!1,n["a"],r);t["default"]=c.exports},1501:function(i,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={props:{openType:String},methods:{onGetUserInfo:function(i){this.$emit("getuserinfo",i.detail)},onContact:function(i){this.$emit("contact",i.detail)},onGetPhoneNumber:function(i){this.$emit("getphonenumber",i.detail)},onError:function(i){this.$emit("error",i.detail)},onLaunchApp:function(i){this.$emit("launchapp",i.detail)},onOpenSetting:function(i){this.$emit("opensetting",i.detail)}}};t.default=n},2141:function(i,t,o){"use strict";var n=o("4ea4");o("c975"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n(o("23b9")),n(o("1501"));var e=n(o("91be")),u={name:"u-button",mixins:[uni.$u.mpMixin,uni.$u.mixin,e.default],data:function(){return{}},computed:{bemClass:function(){return this.color?this.bem("button",["shape","size"],["disabled","plain","hairline"]):this.bem("button",["type","shape","size"],["disabled","plain","hairline"])},loadingColor:function(){return this.plain?this.color?this.color:uni.$u.config.color["u-".concat(this.type)]:"info"===this.type?"#c9c9c9":"rgb(200, 200, 200)"},iconColorCom:function(){return this.iconColor?this.iconColor:this.plain?this.color?this.color:this.type:"info"===this.type?"#000000":"#ffffff"},baseColor:function(){var i={};return this.color&&(i.color=this.plain?this.color:"white",this.plain||(i["background-color"]=this.color),-1!==this.color.indexOf("gradient")?(i.borderTopWidth=0,i.borderRightWidth=0,i.borderBottomWidth=0,i.borderLeftWidth=0,this.plain||(i.backgroundImage=this.color)):(i.borderColor=this.color,i.borderWidth="1px",i.borderStyle="solid")),i},nvueTextStyle:function(){var i={};return"info"===this.type&&(i.color="#323233"),this.color&&(i.color=this.plain?this.color:"white"),i.fontSize=this.textSize+"px",i},textSize:function(){var i=14,t=this.size;return"large"===t&&(i=16),"normal"===t&&(i=14),"small"===t&&(i=12),"mini"===t&&(i=10),i}},methods:{clickHandler:function(){var i=this;this.disabled||this.loading||uni.$u.throttle((function(){i.$emit("click")}),this.throttleTime)},getphonenumber:function(i){this.$emit("getphonenumber",i)},getuserinfo:function(i){this.$emit("getuserinfo",i)},error:function(i){this.$emit("error",i)},opensetting:function(i){this.$emit("opensetting",i)},launchapp:function(i){this.$emit("launchapp",i)}}};t.default=u},"23b9":function(i,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={props:{lang:String,sessionFrom:String,sendMessageTitle:String,sendMessagePath:String,sendMessageImg:String,showMessageCard:Boolean,appParameter:String,formType:String,openType:String}};t.default=n},"247e":function(i,t,o){"use strict";var n=o("4ea4");o("caad"),o("c975"),o("2532"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n(o("6e3f")),u=n(o("8296")),r={name:"u-icon",data:function(){return{}},mixins:[uni.$u.mpMixin,uni.$u.mixin,u.default],computed:{uClasses:function(){var i=[];return i.push(this.customPrefix+"-"+this.name),this.color&&uni.$u.config.type.includes(this.color)&&i.push("u-icon__icon--"+this.color),i},iconStyle:function(){var i={};return i={fontSize:uni.$u.addUnit(this.size),lineHeight:uni.$u.addUnit(this.size),fontWeight:this.bold?"bold":"normal",top:uni.$u.addUnit(this.top)},this.color&&!uni.$u.config.type.includes(this.color)&&(i.color=this.color),i},isImg:function(){return-1!==this.name.indexOf("/")},imgStyle:function(){var i={};return i.width=this.width?uni.$u.addUnit(this.width):uni.$u.addUnit(this.size),i.height=this.height?uni.$u.addUnit(this.height):uni.$u.addUnit(this.size),i},icon:function(){return e.default["uicon-"+this.name]||this.name}},methods:{clickHandler:function(i){this.$emit("click",this.index),this.stop&&this.preventEvent(i)}}};t.default=r},"2c69":function(i,t,o){var n=o("7bd2");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var e=o("4f06").default;e("5e844fb0",n,!0,{sourceMap:!1,shadowMode:!1})},"33b8":function(i,t,o){"use strict";o.r(t);var n=o("2141"),e=o.n(n);for(var u in n)"default"!==u&&function(i){o.d(t,i,(function(){return n[i]}))}(u);t["default"]=e.a},4725:function(i,t,o){"use strict";o.r(t);var n=o("247e"),e=o.n(n);for(var u in n)"default"!==u&&function(i){o.d(t,i,(function(){return n[i]}))}(u);t["default"]=e.a},"666f":function(i,t,o){var n=o("24fb");t=n(!1),t.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* uni.scss */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-59765974], uni-scroll-view[data-v-59765974], uni-swiper-item[data-v-59765974]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}@font-face{font-family:uicon-iconfont;src:url(https://at.alicdn.com/t/font_2225171_8kdcwk4po24.ttf) format("truetype")}.u-icon[data-v-59765974]{display:flex;align-items:center}.u-icon--left[data-v-59765974]{flex-direction:row-reverse;align-items:center}.u-icon--right[data-v-59765974]{flex-direction:row;align-items:center}.u-icon--top[data-v-59765974]{flex-direction:column-reverse;justify-content:center}.u-icon--bottom[data-v-59765974]{flex-direction:column;justify-content:center}.u-icon__icon[data-v-59765974]{font-family:uicon-iconfont;position:relative;display:flex;flex-direction:row;align-items:center}.u-icon__icon--primary[data-v-59765974]{color:#5d4fdc}.u-icon__icon--success[data-v-59765974]{color:#5ac725}.u-icon__icon--error[data-v-59765974]{color:#f56c6c}.u-icon__icon--warning[data-v-59765974]{color:#f9ae3d}.u-icon__icon--info[data-v-59765974]{color:#909399}.u-icon__img[data-v-59765974]{height:auto;will-change:transform}.u-icon__label[data-v-59765974]{line-height:1}',""]),i.exports=t},"6e3f":function(i,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={"uicon-level":"","uicon-column-line":"","uicon-checkbox-mark":"","uicon-folder":"","uicon-movie":"","uicon-star-fill":"","uicon-star":"","uicon-phone-fill":"","uicon-phone":"","uicon-apple-fill":"","uicon-chrome-circle-fill":"","uicon-backspace":"","uicon-attach":"","uicon-cut":"","uicon-empty-car":"","uicon-empty-coupon":"","uicon-empty-address":"","uicon-empty-favor":"","uicon-empty-permission":"","uicon-empty-news":"","uicon-empty-search":"","uicon-github-circle-fill":"","uicon-rmb":"","uicon-person-delete-fill":"","uicon-reload":"","uicon-order":"","uicon-server-man":"","uicon-search":"","uicon-fingerprint":"","uicon-more-dot-fill":"","uicon-scan":"","uicon-share-square":"","uicon-map":"","uicon-map-fill":"","uicon-tags":"","uicon-tags-fill":"","uicon-bookmark-fill":"","uicon-bookmark":"","uicon-eye":"","uicon-eye-fill":"","uicon-mic":"","uicon-mic-off":"","uicon-calendar":"","uicon-calendar-fill":"","uicon-trash":"","uicon-trash-fill":"","uicon-play-left":"","uicon-play-right":"","uicon-minus":"","uicon-plus":"","uicon-info":"","uicon-info-circle":"","uicon-info-circle-fill":"","uicon-question":"","uicon-error":"","uicon-close":"","uicon-checkmark":"","uicon-android-circle-fill":"","uicon-android-fill":"","uicon-ie":"","uicon-IE-circle-fill":"","uicon-google":"","uicon-google-circle-fill":"","uicon-setting-fill":"","uicon-setting":"","uicon-minus-square-fill":"","uicon-plus-square-fill":"","uicon-heart":"","uicon-heart-fill":"","uicon-camera":"","uicon-camera-fill":"","uicon-more-circle":"","uicon-more-circle-fill":"","uicon-chat":"","uicon-chat-fill":"","uicon-bag-fill":"","uicon-bag":"","uicon-error-circle-fill":"","uicon-error-circle":"","uicon-close-circle":"","uicon-close-circle-fill":"","uicon-checkmark-circle":"","uicon-checkmark-circle-fill":"","uicon-question-circle-fill":"","uicon-question-circle":"","uicon-share":"","uicon-share-fill":"","uicon-shopping-cart":"","uicon-shopping-cart-fill":"","uicon-bell":"","uicon-bell-fill":"","uicon-list":"","uicon-list-dot":"","uicon-zhihu":"","uicon-zhihu-circle-fill":"","uicon-zhifubao":"","uicon-zhifubao-circle-fill":"","uicon-weixin-circle-fill":"","uicon-weixin-fill":"","uicon-twitter-circle-fill":"","uicon-twitter":"","uicon-taobao-circle-fill":"","uicon-taobao":"","uicon-weibo-circle-fill":"","uicon-weibo":"","uicon-qq-fill":"","uicon-qq-circle-fill":"","uicon-moments-circel-fill":"","uicon-moments":"","uicon-qzone":"","uicon-qzone-circle-fill":"","uicon-baidu-circle-fill":"","uicon-baidu":"","uicon-facebook-circle-fill":"","uicon-facebook":"","uicon-car":"","uicon-car-fill":"","uicon-warning-fill":"","uicon-warning":"","uicon-clock-fill":"","uicon-clock":"","uicon-edit-pen":"","uicon-edit-pen-fill":"","uicon-email":"","uicon-email-fill":"","uicon-minus-circle":"","uicon-minus-circle-fill":"","uicon-plus-circle":"","uicon-plus-circle-fill":"","uicon-file-text":"","uicon-file-text-fill":"","uicon-pushpin":"","uicon-pushpin-fill":"","uicon-grid":"","uicon-grid-fill":"","uicon-play-circle":"","uicon-play-circle-fill":"","uicon-pause-circle-fill":"","uicon-pause":"","uicon-pause-circle":"","uicon-eye-off":"","uicon-eye-off-outline":"","uicon-gift-fill":"","uicon-gift":"","uicon-rmb-circle-fill":"","uicon-rmb-circle":"","uicon-kefu-ermai":"","uicon-server-fill":"","uicon-coupon-fill":"","uicon-coupon":"","uicon-integral":"","uicon-integral-fill":"","uicon-home-fill":"","uicon-home":"","uicon-hourglass-half-fill":"","uicon-hourglass":"","uicon-account":"","uicon-plus-people-fill":"","uicon-minus-people-fill":"","uicon-account-fill":"","uicon-thumb-down-fill":"","uicon-thumb-down":"","uicon-thumb-up":"","uicon-thumb-up-fill":"","uicon-lock-fill":"","uicon-lock-open":"","uicon-lock-opened-fill":"","uicon-lock":"","uicon-red-packet-fill":"","uicon-photo-fill":"","uicon-photo":"","uicon-volume-off-fill":"","uicon-volume-off":"","uicon-volume-fill":"","uicon-volume":"","uicon-red-packet":"","uicon-download":"","uicon-arrow-up-fill":"","uicon-arrow-down-fill":"","uicon-play-left-fill":"","uicon-play-right-fill":"","uicon-rewind-left-fill":"","uicon-rewind-right-fill":"","uicon-arrow-downward":"","uicon-arrow-leftward":"","uicon-arrow-rightward":"","uicon-arrow-upward":"","uicon-arrow-down":"","uicon-arrow-right":"","uicon-arrow-left":"","uicon-arrow-up":"","uicon-skip-back-left":"","uicon-skip-forward-right":"","uicon-rewind-right":"","uicon-rewind-left":"","uicon-arrow-right-double":"","uicon-arrow-left-double":"","uicon-wifi-off":"","uicon-wifi":"","uicon-empty-data":"","uicon-empty-history":"","uicon-empty-list":"","uicon-empty-page":"","uicon-empty-order":"","uicon-man":"","uicon-woman":"","uicon-man-add":"","uicon-man-add-fill":"","uicon-man-delete":"","uicon-man-delete-fill":"","uicon-zh":"","uicon-en":""};t.default=n},"70cc":function(i,t,o){"use strict";var n=o("babb"),e=o.n(n);e.a},7170:function(i,t,o){"use strict";o.d(t,"b",(function(){return e})),o.d(t,"c",(function(){return u})),o.d(t,"a",(function(){return n}));var n={uLoadingIcon:o("3225").default,uIcon:o("0f91").default},e=function(){var i=this,t=i.$createElement,o=i._self._c||t;return o("v-uni-button",{staticClass:"u-button u-reset-button",class:i.bemClass,style:[i.baseColor,i.$u.addStyle(i.customStyle)],attrs:{"hover-start-time":Number(i.hoverStartTime),"hover-stay-time":Number(i.hoverStayTime),"form-type":i.formType,"open-type":i.openType,"app-parameter":i.appParameter,"hover-stop-propagation":i.hoverStopPropagation,"send-message-title":i.sendMessageTitle,"send-message-path":i.sendMessagePath,lang:i.lang,"data-name":i.dataName,"session-from":i.sessionFrom,"send-message-img":i.sendMessageImg,"show-message-card":i.showMessageCard,"hover-class":i.disabled||i.loading?"":"u-button--active"},on:{getphonenumber:function(t){arguments[0]=t=i.$handleEvent(t),i.getphonenumber.apply(void 0,arguments)},getuserinfo:function(t){arguments[0]=t=i.$handleEvent(t),i.getuserinfo.apply(void 0,arguments)},error:function(t){arguments[0]=t=i.$handleEvent(t),i.error.apply(void 0,arguments)},opensetting:function(t){arguments[0]=t=i.$handleEvent(t),i.opensetting.apply(void 0,arguments)},launchapp:function(t){arguments[0]=t=i.$handleEvent(t),i.launchapp.apply(void 0,arguments)},click:function(t){arguments[0]=t=i.$handleEvent(t),i.clickHandler.apply(void 0,arguments)}}},[i.loading?[o("u-loading-icon",{attrs:{mode:i.loadingMode,size:1.15*i.loadingSize,color:i.loadingColor}}),o("v-uni-text",{staticClass:"u-button__loading-text",style:[{fontSize:i.textSize+"px"}]},[i._v(i._s(i.loadingText||i.text))])]:[i.icon?o("u-icon",{attrs:{name:i.icon,color:i.iconColorCom,size:1.35*i.textSize,customStyle:{marginRight:"2px"}}}):i._e(),i._t("default",[o("v-uni-text",{staticClass:"u-button__text",style:[{fontSize:i.textSize+"px"}]},[i._v(i._s(i.text))])])]],2)},u=[]},"7bd2":function(i,t,o){var n=o("24fb");t=n(!1),t.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* uni.scss */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-7323bf5d], uni-scroll-view[data-v-7323bf5d], uni-swiper-item[data-v-7323bf5d]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-button[data-v-7323bf5d]{width:100%}.u-button__text[data-v-7323bf5d]{white-space:nowrap;line-height:1}.u-button[data-v-7323bf5d]:before{position:absolute;top:50%;left:50%;width:100%;height:100%;border:inherit;border-radius:inherit;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);opacity:0;content:" ";background-color:#000;border-color:#000}.u-button--active[data-v-7323bf5d]:before{opacity:.15}.u-button__icon + .u-button__text[data-v-7323bf5d]:not(:empty), .u-button__loading-text[data-v-7323bf5d]{margin-left:4px}.u-button--plain.u-button--primary[data-v-7323bf5d]{color:#5d4fdc}.u-button--plain.u-button--info[data-v-7323bf5d]{color:#909399}.u-button--plain.u-button--success[data-v-7323bf5d]{color:#5ac725}.u-button--plain.u-button--error[data-v-7323bf5d]{color:#f56c6c}.u-button--plain.u-button--warning[data-v-7323bf5d]{color:#f56c6c}.u-button[data-v-7323bf5d]{height:40px;position:relative;align-items:center;justify-content:center;display:flex;flex-direction:row;box-sizing:border-box;flex-direction:row}.u-button__text[data-v-7323bf5d]{font-size:15px}.u-button__loading-text[data-v-7323bf5d]{font-size:15px;margin-left:4px}.u-button--large[data-v-7323bf5d]{width:100%;height:50px;padding:0 15px}.u-button--normal[data-v-7323bf5d]{padding:0 12px;font-size:14px}.u-button--small[data-v-7323bf5d]{min-width:60px;height:30px;padding:0 8px;font-size:12px}.u-button--mini[data-v-7323bf5d]{height:22px;font-size:10px;min-width:50px;padding:0 8px}.u-button--disabled[data-v-7323bf5d]{opacity:.5}.u-button--info[data-v-7323bf5d]{color:#323233;background-color:#fff;border-color:#ebedf0;border-width:1px;border-style:solid}.u-button--success[data-v-7323bf5d]{color:#fff;background-color:#5ac725;border-color:#5ac725;border-width:1px;border-style:solid}.u-button--primary[data-v-7323bf5d]{color:#fff;background-color:#5d4fdc;border-color:#5d4fdc;border-width:1px;border-style:solid}.u-button--error[data-v-7323bf5d]{color:#fff;background-color:#f56c6c;border-color:#f56c6c;border-width:1px;border-style:solid}.u-button--warning[data-v-7323bf5d]{color:#fff;background-color:#f9ae3d;border-color:#f9ae3d;border-width:1px;border-style:solid}.u-button--block[data-v-7323bf5d]{display:flex;flex-direction:row;width:100%}.u-button--circle[data-v-7323bf5d]{border-top-right-radius:100px;border-top-left-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px}.u-button--square[data-v-7323bf5d]{border-bottom-left-radius:3px;border-bottom-right-radius:3px;border-top-left-radius:3px;border-top-right-radius:3px}.u-button__icon[data-v-7323bf5d]{min-width:1em;line-height:inherit!important;vertical-align:top}.u-button--plain[data-v-7323bf5d]{background-color:#fff}.u-button--hairline[data-v-7323bf5d]{border-width:.5px!important}',""]),i.exports=t},8296:function(i,t,o){"use strict";o("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={props:{name:{type:String,default:uni.$u.props.icon.name},color:{type:String,default:uni.$u.props.icon.color},size:{type:[String,Number],default:uni.$u.props.icon.size},bold:{type:Boolean,default:uni.$u.props.icon.bold},index:{type:[String,Number],default:uni.$u.props.icon.index},hoverClass:{type:String,default:uni.$u.props.icon.hoverClass},customPrefix:{type:String,default:uni.$u.props.icon.customPrefix},label:{type:[String,Number],default:uni.$u.props.icon.label},labelPos:{type:String,default:uni.$u.props.icon.labelPos},labelSize:{type:[String,Number],default:uni.$u.props.icon.labelSize},labelColor:{type:String,default:uni.$u.props.icon.labelColor},space:{type:[String,Number],default:uni.$u.props.icon.space},imgMode:{type:String,default:uni.$u.props.icon.imgMode},width:{type:[String,Number],default:uni.$u.props.icon.width},height:{type:[String,Number],default:uni.$u.props.icon.height},top:{type:[String,Number],default:uni.$u.props.icon.top},stop:{type:Boolean,default:uni.$u.props.icon.stop}}};t.default=n},"91be":function(i,t,o){"use strict";o("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={props:{hairline:{type:Boolean,default:uni.$u.props.button.hairline},type:{type:String,default:uni.$u.props.button.type},size:{type:String,default:uni.$u.props.button.size},shape:{type:String,default:uni.$u.props.button.shape},plain:{type:Boolean,default:uni.$u.props.button.plain},disabled:{type:Boolean,default:uni.$u.props.button.disabled},loading:{type:Boolean,default:uni.$u.props.button.loading},loadingText:{type:[String,Number],default:uni.$u.props.button.loadingText},loadingMode:{type:String,default:uni.$u.props.button.loadingMode},loadingSize:{type:[String,Number],default:uni.$u.props.button.loadingSize},openType:{type:String,default:uni.$u.props.button.openType},formType:{type:String,default:uni.$u.props.button.formType},appParameter:{type:String,default:uni.$u.props.button.appParameter},hoverStopPropagation:{type:Boolean,default:uni.$u.props.button.hoverStopPropagation},lang:{type:String,default:uni.$u.props.button.lang},sessionFrom:{type:String,default:uni.$u.props.button.sessionFrom},sendMessageTitle:{type:String,default:uni.$u.props.button.sendMessageTitle},sendMessagePath:{type:String,default:uni.$u.props.button.sendMessagePath},sendMessageImg:{type:String,default:uni.$u.props.button.sendMessageImg},showMessageCard:{type:Boolean,default:uni.$u.props.button.showMessageCard},dataName:{type:String,default:uni.$u.props.button.dataName},throttleTime:{type:[String,Number],default:uni.$u.props.button.throttleTime},hoverStartTime:{type:[String,Number],default:uni.$u.props.button.hoverStartTime},hoverStayTime:{type:[String,Number],default:uni.$u.props.button.hoverStayTime},text:{type:[String,Number],default:uni.$u.props.button.text},icon:{type:String,default:uni.$u.props.button.icon},iconColor:{type:String,default:uni.$u.props.button.icon},color:{type:String,default:uni.$u.props.button.color}}};t.default=n},"92d5":function(i,t,o){"use strict";var n=o("2c69"),e=o.n(n);e.a},babb:function(i,t,o){var n=o("666f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var e=o("4f06").default;e("2b48557a",n,!0,{sourceMap:!1,shadowMode:!1})},be30:function(i,t,o){"use strict";o.r(t);var n=o("7170"),e=o("33b8");for(var u in e)"default"!==u&&function(i){o.d(t,i,(function(){return e[i]}))}(u);o("92d5");var r,a=o("f0c5"),c=Object(a["a"])(e["default"],n["b"],n["c"],!1,null,"7323bf5d",null,!1,n["a"],r);t["default"]=c.exports},d29a:function(i,t,o){"use strict";var n;o.d(t,"b",(function(){return e})),o.d(t,"c",(function(){return u})),o.d(t,"a",(function(){return n}));var e=function(){var i=this,t=i.$createElement,o=i._self._c||t;return o("v-uni-view",{staticClass:"u-icon",class:["u-icon--"+i.labelPos],on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.clickHandler.apply(void 0,arguments)}}},[i.isImg?o("v-uni-image",{staticClass:"u-icon__img",style:[i.imgStyle,i.$u.addStyle(i.customStyle)],attrs:{src:i.name,mode:i.imgMode}}):o("v-uni-text",{staticClass:"u-icon__icon",class:i.uClasses,style:[i.iconStyle,i.$u.addStyle(i.customStyle)],attrs:{"hover-class":i.hoverClass}},[i._v(i._s(i.icon))]),""!==i.label?o("v-uni-text",{staticClass:"u-icon__label",style:{color:i.labelColor,fontSize:i.$u.addUnit(i.labelSize),marginLeft:"right"==i.labelPos?i.$u.addUnit(i.space):0,marginTop:"bottom"==i.labelPos?i.$u.addUnit(i.space):0,marginRight:"left"==i.labelPos?i.$u.addUnit(i.space):0,marginBottom:"top"==i.labelPos?i.$u.addUnit(i.space):0}},[i._v(i._s(i.label))]):i._e()],1)},u=[]}}]);