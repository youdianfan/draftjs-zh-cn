"use strict";(self.webpackChunkdraftjs_cn=self.webpackChunkdraftjs_cn||[]).push([[304],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,m=u["".concat(p,".").concat(f)]||u[f]||s[f]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6346:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={id:"advanced-topics-text-direction",title:"\u6587\u5b57\u65b9\u5411"},i=void 0,c={unversionedId:"advanced-topics-text-direction",id:"advanced-topics-text-direction",title:"\u6587\u5b57\u65b9\u5411",description:"Facebook\u652f\u6301\u591a\u79cd\u8bed\u8a00\uff0c\u8fd9\u610f\u5473\u7740\u6211\u4eec\u7684\u6587\u672c\u8f93\u5165\u5fc5\u987b\u8db3\u591f\u7075\u6d3b\u4ee5\u5904\u7406\u5927\u91cf\u7684\u53d8\u5316\u3002",source:"@site/docs/Advanced-Topics-Text-Direction.md",sourceDirName:".",slug:"/advanced-topics-text-direction",permalink:"/draftjs-zh-cn/docs/advanced-topics-text-direction",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Advanced-Topics-Text-Direction.md",tags:[],version:"current",frontMatter:{id:"advanced-topics-text-direction",title:"\u6587\u5b57\u65b9\u5411"},sidebar:"docs",previous:{title:"\u5d4c\u5957\u5217\u8868",permalink:"/draftjs-zh-cn/docs/advanced-topics-nested-lists"},next:{title:"EditorState \u7ade\u4e89\u6761\u4ef6",permalink:"/draftjs-zh-cn/docs/advanced-topics-editorstate-race-conditions"}},p={},l=[{value:"\u6587\u5b57\u5bf9\u9f50",id:"\u6587\u5b57\u5bf9\u9f50",level:2}],d={toc:l};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Facebook\u652f\u6301\u591a\u79cd\u8bed\u8a00\uff0c\u8fd9\u610f\u5473\u7740\u6211\u4eec\u7684\u6587\u672c\u8f93\u5165\u5fc5\u987b\u8db3\u591f\u7075\u6d3b\u4ee5\u5904\u7406\u5927\u91cf\u7684\u53d8\u5316\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u6211\u4eec\u5e0c\u671bRTL\u8bed\u8a00\uff08\u4f8b\u5982\u963f\u62c9\u4f2f\u8bed\u548c\u5e0c\u4f2f\u6765\u8bed\uff09\u7684\u8f93\u5165\u884c\u4e3a\u80fd\u591f\u6ee1\u8db3\u7528\u6237\u7684\u671f\u671b\u3002\n\u6211\u4eec\u8fd8\u5e0c\u671b\u80fd\u591f\u540c\u65f6\u4f7f\u7528LTR\u548cRTL\u6587\u672c\u6765\u652f\u6301\u7f16\u8f91\u5668\u5185\u5bb9\u3002"),(0,o.kt)("p",null,"\u4e3a\u6b64\uff0cDraft\u4f7f\u7528bidi algorithm(\u6bd4\u8fea\u7b97\u6cd5)\u6765\u9010\u5757\u786e\u5b9a\u9002\u5f53\u7684\u6587\u672c\u5bf9\u9f50\u65b9\u5f0f\u548c\u65b9\u5411\u3002"),(0,o.kt)("p",null,"\u7528\u6237\u952e\u5165\u65f6\uff0c\u5c06\u81ea\u52a8\u4ee5LTR\u6216RTL\u65b9\u5411\u6e32\u67d3\u6587\u672c\u3002\n\u60a8\u65e0\u9700\u505a\u4efb\u4f55\u4e8b\u60c5\u6765\u8bbe\u5b9a\u65b9\u5411\u3002"),(0,o.kt)("h2",{id:"\u6587\u5b57\u5bf9\u9f50"},"\u6587\u5b57\u5bf9\u9f50"),(0,o.kt)("p",null,"\u867d\u7136\u5728\u7f16\u5199\u65f6\u8bed\u8a00\u4f1a\u6839\u636e\u5185\u5bb9\u5b57\u7b26\u81ea\u52a8\u5411\u5de6\u6216\u5411\u53f3\u5bf9\u9f50\uff0c\u4f46\u5de5\u7a0b\u5e08\u4e5f\u53ef\u4ee5\u624b\u52a8\u8bbe\u7f6e\u7f16\u8f91\u8005\u5185\u5bb9\u7684\u6587\u672c\u5bf9\u9f50\u65b9\u5f0f\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u7f16\u8f91\u5668\u9700\u8981\u4e25\u683c\u5c45\u4e2d\u7684\u5185\u5bb9\uff0c\u6216\u8005\u9700\u8981\u4f7f\u6587\u672c\u4e0e\u53e6\u4e00\u4e2aUI\u5143\u7d20\u5bf9\u9f50\uff0c\u5219\u8fd9\u53ef\u80fd\u5f88\u6709\u7528\u3002"),(0,o.kt)("p",null,"\u56e0\u6b64\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Editor"),"\u7ec4\u4ef6\u63d0\u4f9b\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"textAlignment")," prop\uff0c\u5e26\u6709\u5c11\u91cf\u503c\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"'left'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'center'"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"'right'"),"\u3002\n\u4f7f\u7528\u8fd9\u4e9b\u503c\uff0c\u65e0\u8bba\u8bed\u8a00\u548c\u5b57\u7b26\u96c6\u5982\u4f55\uff0c\u7f16\u8f91\u5668\u7684\u5185\u5bb9\u90fd\u5c06\u4e0e\u6307\u5b9a\u7684\u65b9\u5411\u5bf9\u9f50\u3002"))}s.isMDXComponent=!0}}]);