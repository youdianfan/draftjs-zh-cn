"use strict";(self.webpackChunkdraftjs_cn=self.webpackChunkdraftjs_cn||[]).push([[225],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},894:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={id:"advanced-topics-issues-and-pitfalls",title:"\u95ee\u9898\u548c\u9677\u9631"},l=void 0,o={unversionedId:"advanced-topics-issues-and-pitfalls",id:"advanced-topics-issues-and-pitfalls",title:"\u95ee\u9898\u548c\u9677\u9631",description:"\u672c\u6587\u8ba8\u8bba\u4e86Draft\u7f16\u8f91\u5668\u6846\u67b6\u7684\u4e00\u4e9b\u5df2\u77e5\u95ee\u9898\uff0c\u4ee5\u53ca\u6211\u4eec\u5728Facebook\u4e0a\u4f7f\u7528\u8be5\u6846\u67b6\u65f6\u9047\u5230\u7684\u4e00\u4e9b\u5e38\u89c1\u9677\u9631\u3002",source:"@site/docs/Advanced-Topics-Issues-and-Pitfalls.md",sourceDirName:".",slug:"/advanced-topics-issues-and-pitfalls",permalink:"/docs/advanced-topics-issues-and-pitfalls",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Advanced-Topics-Issues-and-Pitfalls.md",tags:[],version:"current",frontMatter:{id:"advanced-topics-issues-and-pitfalls",title:"\u95ee\u9898\u548c\u9677\u9631"},sidebar:"docs",previous:{title:"EditorState \u7ade\u4e89\u6761\u4ef6",permalink:"/docs/advanced-topics-editorstate-race-conditions"},next:{title:"Editor\u7ec4\u4ef6",permalink:"/docs/api-reference-editor"}},s={},p=[{value:"\u5e38\u89c1\u9677\u9631",id:"\u5e38\u89c1\u9677\u9631",level:2},{value:"\u5ef6\u8fdf\u72b6\u6001\u66f4\u65b0",id:"\u5ef6\u8fdf\u72b6\u6001\u66f4\u65b0",level:3},{value:"\u4e22\u5931 <code>Draft.css</code>",id:"\u4e22\u5931-draftcss",level:3},{value:"\u5df2\u77e5\u7684\u95ee\u9898",id:"\u5df2\u77e5\u7684\u95ee\u9898",level:2},{value:"Custom OSX Keybindings \u81ea\u5b9a\u4e49OSX\u7ed1\u5b9a",id:"custom-osx-keybindings-\u81ea\u5b9a\u4e49osx\u7ed1\u5b9a",level:3},{value:"\u6d4f\u89c8\u5668\u63d2\u4ef6/\u6269\u5c55",id:"\u6d4f\u89c8\u5668\u63d2\u4ef6\u6269\u5c55",level:3},{value:"IME \u548c Internet Explorer",id:"ime-\u548c-internet-explorer",level:3},{value:"Polyfills",id:"polyfills",level:3},{value:"\u5c1a\u4e0d\u652f\u6301\u79fb\u52a8\u7aef",id:"\u5c1a\u4e0d\u652f\u6301\u79fb\u52a8\u7aef",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u8ba8\u8bba\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"Draft"),"\u7f16\u8f91\u5668\u6846\u67b6\u7684\u4e00\u4e9b\u5df2\u77e5\u95ee\u9898\uff0c\u4ee5\u53ca\u6211\u4eec\u5728Facebook\u4e0a\u4f7f\u7528\u8be5\u6846\u67b6\u65f6\u9047\u5230\u7684\u4e00\u4e9b\u5e38\u89c1\u9677\u9631\u3002"),(0,a.kt)("h2",{id:"\u5e38\u89c1\u9677\u9631"},"\u5e38\u89c1\u9677\u9631"),(0,a.kt)("h3",{id:"\u5ef6\u8fdf\u72b6\u6001\u66f4\u65b0"},"\u5ef6\u8fdf\u72b6\u6001\u66f4\u65b0"),(0,a.kt)("p",null,"\u5355\u5411\u6570\u636e\u7ba1\u7406\u7684\u5e38\u89c1\u6a21\u5f0f\u662f\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"setTimeout"),"\u6216\u5176\u4ed6\u673a\u5236\u6279\u91cf\u66f4\u65b0\u6216\u4ee5\u5176\u4ed6\u65b9\u5f0f\u5ef6\u8fdf\u5bf9\u6570\u636e\u5b58\u50a8\u7684\u66f4\u65b0\u3002\n\u66f4\u65b0stores\uff0c\u7136\u540e\u5c06\u66f4\u6539\u53d1\u9001\u5230\u76f8\u5173\u7684React\u7ec4\u4ef6\u4ee5\u4f20\u64ad\u91cd\u65b0\u6e32\u67d3\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u5f53\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"Draft"),"\u7f16\u8f91\u5668\u5c06\u5ef6\u8fdf\u5f15\u5165\u5230React\u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u91cd\u5927\u7684\u4ea4\u4e92\u95ee\u9898\u3002\n\u8fd9\u662f\u56e0\u4e3a\u7f16\u8f91\u5668\u5e0c\u671b\u7acb\u5373\u8fdb\u884c\u66f4\u65b0\uff0c\u5e76\u4e14\u6e32\u67d3\u4e0e\u7528\u6237\u7684\u952e\u5165\u884c\u4e3a\u4fdd\u6301\u540c\u6b65\u7684\u6e32\u67d3\u3002\n\u5ef6\u8fdf\u53ef\u4ee5\u963b\u6b62\u66f4\u65b0\u901a\u8fc7\u7f16\u8f91\u5668\u7ec4\u4ef6\u6811\u4f20\u64ad\uff0c\u8fd9\u53ef\u80fd\u5bfc\u81f4\u51fb\u952e\u548c\u66f4\u65b0\u4e4b\u95f4\u7684\u65ad\u5f00\u8fde\u63a5\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u5728\u4ecd\u4f7f\u7528\u5ef6\u8fdf\u6216\u6279\u5904\u7406\u673a\u5236\u7684\u540c\u65f6\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff0c\u5e94\u5c06\u5ef6\u8fdf\u884c\u4e3a\u4e0e\u7f16\u8f91\u5668\u72b6\u6001\u4f20\u64ad\u5206\u5f00\u3002\n\u4e5f\u5c31\u662f\u8bf4\uff0c\u5fc5\u987b\u59cb\u7ec8\u5141\u8bb8",(0,a.kt)("inlineCode",{parentName:"p"},"EditorState"),"\u6beb\u4e0d\u5ef6\u8fdf\u5730\u4f20\u64ad\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"Editor"),"\u7ec4\u4ef6\uff0c\u5e76\u72ec\u7acb\u6267\u884c\u4e0d\u5f71\u54cdEditor\u7ec4\u4ef6\u72b6\u6001\u7684\u6279\u91cf\u66f4\u65b0\u3002"),(0,a.kt)("h3",{id:"\u4e22\u5931-draftcss"},"\u4e22\u5931 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Draft.css")),(0,a.kt)("p",null,"Draft\u6846\u67b6\u5305\u62ec\u4e00\u4e9b\u65e8\u5728\u4e0e\u7f16\u8f91\u5668\u4e00\u8d77\u4f7f\u7528\u7684CSS\u8d44\u6e90\uff0c\u53ef\u901a\u8fc7\u5185\u90e8\u7248\u672c",(0,a.kt)("inlineCode",{parentName:"p"},"Draft.css"),"\u5728\u5355\u4e2a\u6587\u4ef6\u4e2d\u83b7\u5f97\u3002"),(0,a.kt)("p",null,"\u6e32\u67d3\u7f16\u8f91\u5668\u65f6\uff0c\u5e94\u5305\u62ec\u6b64CSS\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u6837\u5f0f\u8bbe\u7f6e\u4e86\u6587\u672c\u5bf9\u9f50\uff0c\u95f4\u8ddd\u548c\u5176\u4ed6\u91cd\u8981\u529f\u80fd\u7684\u9ed8\u8ba4\u8bbe\u7f6e\u3002\n\u6ca1\u6709\u5b83\uff0c\u60a8\u53ef\u80fd\u4f1a\u9047\u5230\u5757\u5b9a\u4f4d\uff0c\u5bf9\u9f50\u548c\u5149\u6807\u884c\u4e3a\u7684\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u9009\u62e9\u72ec\u7acb\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"Draft.css"),"\u7f16\u5199\u81ea\u5df1\u7684CSS\uff0c\u5219\u5f88\u53ef\u80fd\u9700\u8981\u590d\u5236\u8bb8\u591a\u9ed8\u8ba4\u6837\u5f0f\u3002"),(0,a.kt)("h2",{id:"\u5df2\u77e5\u7684\u95ee\u9898"},"\u5df2\u77e5\u7684\u95ee\u9898"),(0,a.kt)("h3",{id:"custom-osx-keybindings-\u81ea\u5b9a\u4e49osx\u7ed1\u5b9a"},"Custom OSX Keybindings \u81ea\u5b9a\u4e49OSX\u7ed1\u5b9a"),(0,a.kt)("p",null,"\u7531\u4e8e\u6d4f\u89c8\u5668\u65e0\u6cd5\u8bbf\u95ee\u64cd\u4f5c\u7cfb\u7edf\u7ea7\u522b\u7684\u81ea\u5b9a\u4e49\u952e\u7ed1\u5b9a\uff0c\u56e0\u6b64\u65e0\u6cd5\u62e6\u622a\u672a\u6620\u5c04\u5230\u9ed8\u8ba4\u7cfb\u7edf\u952e\u7ed1\u5b9a\u7684\u7f16\u8f91\u610f\u56fe\u884c\u4e3a\u3002"),(0,a.kt)("p",null,"\u7ed3\u679c\u662f\u4f7f\u7528\u81ea\u5b9a\u4e49\u952e\u7ed1\u5b9a\u7684\u7528\u6237\u53ef\u80fd\u4f1a\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"Draft"),"\u7f16\u8f91\u5668\u4e2d\u9047\u5230\u95ee\u9898\uff0c\u56e0\u4e3a\u4ed6\u4eec\u7684\u952e\u76d8\u547d\u4ee4\u53ef\u80fd\u65e0\u6cd5\u6309\u9884\u671f\u65b9\u5f0f\u8fd0\u884c\u3002"),(0,a.kt)("h3",{id:"\u6d4f\u89c8\u5668\u63d2\u4ef6\u6269\u5c55"},"\u6d4f\u89c8\u5668\u63d2\u4ef6/\u6269\u5c55"),(0,a.kt)("p",null,"\u4e0e\u4efb\u4f55React\u5e94\u7528\u7a0b\u5e8f\u4e00\u6837\uff0c\u4fee\u6539DOM\u7684\u6d4f\u89c8\u5668\u63d2\u4ef6\u548c\u6269\u5c55\u7a0b\u5e8f\u53ef\u80fd\u4f1a\u5bfc\u81f4Draft\u7f16\u8f91\u5668\u4e2d\u65ad\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u8bed\u6cd5\u68c0\u67e5\u5668\u53ef\u4ee5\u4fee\u6539",(0,a.kt)("inlineCode",{parentName:"p"},"contentEditable"),"\u5143\u7d20\u5185\u7684DOM\uff0c\u6dfb\u52a0\u4e0b\u5212\u7ebf\u548c\u80cc\u666f\u4e4b\u7c7b\u7684\u6837\u5f0f\u3002\n\u7531\u4e8e\u5982\u679c\u6d4f\u89c8\u5668\u4e0d\u7b26\u5408\u9884\u671f\uff0cReact\u65e0\u6cd5\u534f\u8c03DOM\uff0c\u56e0\u6b64\u7f16\u8f91\u5668\u72b6\u6001\u53ef\u80fd\u65e0\u6cd5\u4e0eDOM\u4fdd\u6301\u540c\u6b65\u3002"),(0,a.kt)("p",null,"\u8fd8\u5df2\u77e5\u67d0\u4e9b\u65e7\u7684\u5e7f\u544a\u963b\u6b62\u7a0b\u5e8f\u4f1a\u7834\u574f\u539f\u751f\u7684DOM Selection API-\u65e0\u8bba\u5982\u4f55\uff0c\u8fd9\u90fd\u662f\u4e00\u4e2a\u574f\u4e3b\u610f\uff01\n-\u5e76\u4e14\u7531\u4e8eDraft\u4f9d\u9760\u6b64API\u6765\u7ef4\u6301\u53d7\u63a7\u7684\u9009\u62e9\u72b6\u6001\uff0c\u56e0\u6b64\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u7f16\u8f91\u5668\u4ea4\u4e92\u7684\u9ebb\u70e6\u3002"),(0,a.kt)("h3",{id:"ime-\u548c-internet-explorer"},"IME \u548c Internet Explorer"),(0,a.kt)("p",null,"\u4eceIE11\u5f00\u59cb\uff0cInternet Explorer\u5c55\u793a\u4e86\u67d0\u4e9b\u56fd\u9645\u8f93\u5165\u6cd5\uff08\u6700\u91cd\u8981\u7684\u662f\u97e9\u6587\u8f93\u5165\u6cd5\uff09\u4e2d\u7684\u663e\u7740\u95ee\u9898\u3002"),(0,a.kt)("h3",{id:"polyfills"},"Polyfills"),(0,a.kt)("p",null,"Draft\u7684\u67d0\u4e9b\u4ee3\u7801\u53ca\u5176\u4f9d\u8d56\u9879\u7684\u4ee3\u7801\u4f7f\u7528ES2015\u8bed\u8a00\u529f\u80fd\u3002\n\u6784\u5efaDraft\u65f6\uff0c\u4f1a\u901a\u8fc7Babel\u7f16\u8bd1\u6389\u8bf8\u5982class\u4e4b\u7c7b\u7684\u8bed\u6cd5\u529f\u80fd\uff0c\u4f46\u662f\u5b83\u4e0d\u5305\u62ec\u73b0\u5728\u8bb8\u591a\u73b0\u4ee3\u6d4f\u89c8\u5668\u4e2d\u90fd\u5305\u542b\u7684API\u7684polyfills\uff08\u4f8b\u5982\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"String.prototype.startsWith"),"\uff09\u3002\n\u6211\u4eec\u5e0c\u671b\u60a8\u7684\u6d4f\u89c8\u5668\u539f\u751f\u6216\u5728polyfill\u7684\u652f\u6301\u4e0b\u652f\u6301\u8fd9\u4e9bAPI\u3002\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/es-shims/es6-shim"},"es6-shim"),"\u662f\u8fd9\u6837\u7684polyfill\u4e4b\u4e00\uff0c\u6211\u4eec\u5728\u8bb8\u591a\u793a\u4f8b\u4e2d\u90fd\u4f7f\u7528\u4e86",(0,a.kt)("a",{parentName:"p",href:"https://github.com/es-shims/es6-shim"},"es6-shim"),"\uff0c\u4f46\u5982\u679c\u60a8\u7684\u573a\u666f\u66f4\u4e30\u5bcc\uff0c\u5219\u53ef\u4ee5\u81ea\u7531\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/usage/polyfill/"},"babel-polyfill"),"\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528polyfill/shim\u65f6\uff0c\u5e94\u5c3d\u65e9\u5c06\u5176\u5305\u62ec\u5728\u5e94\u7528\u7a0b\u5e8f\u7684\u5165\u53e3\u70b9\u4e2d\uff08\u81f3\u5c11\u5728\u5bfc\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"Draft"),"\u4e4b\u524d\uff09\u3002\n\u4f8b\u5982\uff0c\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebookincubator/create-react-app"},"create-react-app"),"\u5e76\u5b9a\u4f4dIE11\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"src/index.js"),"\u53ef\u80fd\u662f\u5bfc\u5165polyfill\u7684\u597d\u5730\u65b9\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"src/index.js"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import 'babel-polyfill';\n// or\nimport 'es6-shim';\n\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App';\nimport './index.css';\n\nReactDOM.render(<App />, document.getElementById('root'));\n")),(0,a.kt)("h3",{id:"\u5c1a\u4e0d\u652f\u6301\u79fb\u52a8\u7aef"},"\u5c1a\u4e0d\u652f\u6301\u79fb\u52a8\u7aef"),(0,a.kt)("p",null,"Draft.js\u6b63\u671d\u7740\u5168\u9762\u7684\u79fb\u52a8\u7aef\u652f\u6301\u65b9\u5411\u53d1\u5c55\uff0c\u4f46\u76ee\u524d\u5c1a\u4e0d\u6b63\u5f0f\u652f\u6301\u79fb\u52a8\u7aef\u6d4f\u89c8\u5668\u3002\n\u6709\u4e00\u4e9b\u5df2\u77e5\u95ee\u9898\u4f1a\u5f71\u54cdAndroid \u548c iOS-\u8bf7\u67e5\u770b\u6807\u8bb0\u4e3a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/draft-js/labels/android"},"'android'")," \u6216\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/draft-js/labels/ios"},"'ios'"),"\u7684\u5f53\u524d\u72b6\u6001\u95ee\u9898\u3002"))}d.isMDXComponent=!0}}]);