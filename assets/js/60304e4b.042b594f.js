"use strict";(self.webpackChunkdraftjs_cn=self.webpackChunkdraftjs_cn||[]).push([[578],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(n),h=r,k=s["".concat(i,".").concat(h)]||s[h]||u[h]||l;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={id:"api-reference-editor-change-type",title:"EditorChangeType \u53d8\u66f4\u7c7b\u578b"},o=void 0,c={unversionedId:"api-reference-editor-change-type",id:"api-reference-editor-change-type",title:"EditorChangeType \u53d8\u66f4\u7c7b\u578b",description:"EditorChangeType\u662f\u4e00\u4e2a\u679a\u4e3e\uff0c\u5217\u51fa\u4e86\u53ef\u4ee5\u5904\u7406Draft\u6a21\u578b\u7684\u4e00\u7ec4\u53ef\u80fd\u7684\u66f4\u6539\u64cd\u4f5c\u3002",source:"@site/docs/APIReference-EditorChangeType.md",sourceDirName:".",slug:"/api-reference-editor-change-type",permalink:"/draftjs-zh-cn/docs/api-reference-editor-change-type",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/APIReference-EditorChangeType.md",tags:[],version:"current",frontMatter:{id:"api-reference-editor-change-type",title:"EditorChangeType \u53d8\u66f4\u7c7b\u578b"},sidebar:"docs",previous:{title:"Editor\u7ec4\u4ef6",permalink:"/draftjs-zh-cn/docs/api-reference-editor"},next:{title:"EditorState \u7f16\u8f91\u5668\u72b6\u6001",permalink:"/draftjs-zh-cn/docs/api-reference-editor-state"}},i={},p=[{value:"Values",id:"values",level:2},{value:"<code>adjust-depth</code>",id:"adjust-depth",level:3},{value:"<code>apply-entity</code>",id:"apply-entity",level:3},{value:"<code>backspace-character</code>",id:"backspace-character",level:3},{value:"<code>change-block-data</code>",id:"change-block-data",level:3},{value:"<code>change-block-type</code>",id:"change-block-type",level:3},{value:"<code>change-inline-style</code>",id:"change-inline-style",level:3},{value:"<code>move-block</code>",id:"move-block",level:3},{value:"<code>delete-character</code>",id:"delete-character",level:3},{value:"<code>insert-characters</code>",id:"insert-characters",level:3},{value:"<code>insert-fragment</code>",id:"insert-fragment",level:3},{value:"<code>redo</code>",id:"redo",level:3},{value:"<code>remove-range</code>",id:"remove-range",level:3},{value:"<code>spellcheck-change</code>",id:"spellcheck-change",level:3},{value:"<code>split-block</code>",id:"split-block",level:3},{value:"<code>undo</code>",id:"undo",level:3}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/draft-js/blob/master/src/model/immutable/EditorChangeType.js"},"EditorChangeType"),"\u662f\u4e00\u4e2a\u679a\u4e3e\uff0c\u5217\u51fa\u4e86\u53ef\u4ee5\u5904\u7406Draft\u6a21\u578b\u7684\u4e00\u7ec4\u53ef\u80fd\u7684\u66f4\u6539\u64cd\u4f5c\u3002\n\u5b83\u8868\u793a\u4e3aFlow\u7c7b\u578b\uff0c\u8868\u793a\u4e3a\u5b57\u7b26\u4e32\u7684union(\u8054\u5408)\u3002"),(0,r.kt)("p",null,"\u5b83\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9",(0,r.kt)("inlineCode",{parentName:"p"},"EditorState.push"),"\uff0c\u5e76\u8868\u793a\u901a\u8fc7\u8f6c\u6362\u5230\u65b0\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"ContentState"),"\u6240\u6267\u884c\u7684\u66f4\u6539\u64cd\u4f5c\u7684\u7c7b\u578b\u3002"),(0,r.kt)("p",null,"\u5728\u540e\u53f0\uff0c\u6b64\u503c\u7528\u4e8e\u786e\u5b9a\u9002\u5f53\u7684undo/redo(\u64a4\u6d88/\u91cd\u505a)\u5904\u7406\uff0c\u62fc\u5199\u68c0\u67e5\u884c\u4e3a\u7b49\u3002\n\u56e0\u6b64\uff0c\u5c3d\u7ba1\u53ef\u4ee5\u5728\u6b64\u5904\u63d0\u4f9b\u4efb\u610f\u5b57\u7b26\u4e32\u503c\u4f5c\u4e3achangeType\u53c2\u6570\uff0c\u4f46\u5e94\u907f\u514d\u8fd9\u6837\u505a\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u60a8\u5b89\u88c5",(0,r.kt)("a",{parentName:"p",href:"http://flowtype.org"},"Flow"),"\u4ee5\u5728\u9879\u76ee\u4e0a\u6267\u884c\u9759\u6001\u7c7b\u578b\u68c0\u67e5\u3002\nFlow\u5c06\u5f3a\u5236\u4f7f\u7528\u9002\u5f53\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"EditorChangeType"),"\u503c\u3002"),(0,r.kt)("h2",{id:"values"},"Values"),(0,r.kt)("h3",{id:"adjust-depth"},(0,r.kt)("inlineCode",{parentName:"h3"},"adjust-depth")),(0,r.kt)("p",null,"\u4e00\u4e2a\u6216\u591a\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"ContentBlock"),"\u5bf9\u8c61\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"depth"),"\u503c\u6b63\u5728\u66f4\u6539\u3002"),(0,r.kt)("h3",{id:"apply-entity"},(0,r.kt)("inlineCode",{parentName:"h3"},"apply-entity")),(0,r.kt)("p",null,"\u5b9e\u4f53\u6b63\u5728\u5e94\u7528\uff08\u6216\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"\u5220\u9664\uff09\u5230\u4e00\u4e2a\u6216\u591a\u4e2a\u5b57\u7b26"),(0,r.kt)("h3",{id:"backspace-character"},(0,r.kt)("inlineCode",{parentName:"h3"},"backspace-character")),(0,r.kt)("p",null,"\u5355\u4e2a\u5b57\u7b26\u88ab\u5411\u540e\u5220\u9664\u3002"),(0,r.kt)("h3",{id:"change-block-data"},(0,r.kt)("inlineCode",{parentName:"h3"},"change-block-data")),(0,r.kt)("p",null,"\u4e00\u4e2a\u6216\u591a\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"ContentBlock"),"\u5bf9\u8c61\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"\u503c\u6b63\u5728\u66f4\u6539\u3002"),(0,r.kt)("h3",{id:"change-block-type"},(0,r.kt)("inlineCode",{parentName:"h3"},"change-block-type")),(0,r.kt)("p",null,"\u4e00\u4e2a\u6216\u591a\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"ContentBlock"),"\u5bf9\u8c61\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"type"),"\u503c\u6b63\u5728\u66f4\u6539\u3002"),(0,r.kt)("h3",{id:"change-inline-style"},(0,r.kt)("inlineCode",{parentName:"h3"},"change-inline-style")),(0,r.kt)("p",null,"\u6b63\u5728\u4e3a\u4e00\u4e2a\u6216\u591a\u4e2a\u5b57\u7b26\u5e94\u7528\u6216\u5220\u9664\u5185\u8054\u6837\u5f0f\u3002"),(0,r.kt)("h3",{id:"move-block"},(0,r.kt)("inlineCode",{parentName:"h3"},"move-block")),(0,r.kt)("p",null,"\u5757\u6b63\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/draft-js/blob/master/src/model/immutable/BlockMap.js"},"BlockMap"),"\u4e2d\u79fb\u52a8\u3002"),(0,r.kt)("h3",{id:"delete-character"},(0,r.kt)("inlineCode",{parentName:"h3"},"delete-character")),(0,r.kt)("p",null,"\u5355\u4e2a\u5b57\u7b26\u6b63\u88ab\u5220\u9664\u3002"),(0,r.kt)("h3",{id:"insert-characters"},(0,r.kt)("inlineCode",{parentName:"h3"},"insert-characters")),(0,r.kt)("p",null,"\u5728\u9009\u62e9\u72b6\u6001\u4e0b\u5c06\u63d2\u5165\u4e00\u4e2a\u6216\u591a\u4e2a\u5b57\u7b26\u3002"),(0,r.kt)("h3",{id:"insert-fragment"},(0,r.kt)("inlineCode",{parentName:"h3"},"insert-fragment")),(0,r.kt)("p",null,'\u5728\u9009\u62e9\u72b6\u6001\u4e0b\u63d2\u5165\u5185\u5bb9\u7684"fragment(\u7247\u6bb5)"\uff08\u5373\uff0c',(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/draft-js/blob/master/src/model/immutable/BlockMap.js"},"BlockMap"),"\uff09\u3002"),(0,r.kt)("h3",{id:"redo"},(0,r.kt)("inlineCode",{parentName:"h3"},"redo")),(0,r.kt)("p",null,"\u6b63\u5728\u6267\u884c\u91cd\u505a\u64cd\u4f5c\u3002\n\u7531\u4e8e\u91cd\u505a\u884c\u4e3a\u662f\u7531Draft\u6838\u5fc3\u5904\u7406\u7684\uff0c\u56e0\u6b64\u60a8\u4e0d\u592a\u53ef\u80fd\u9700\u8981\u663e\u5f0f\u4f7f\u7528\u6b64\u529f\u80fd\u3002"),(0,r.kt)("h3",{id:"remove-range"},(0,r.kt)("inlineCode",{parentName:"h3"},"remove-range")),(0,r.kt)("p",null,"\u591a\u4e2a\u5b57\u7b26\u6216\u5757\u88ab\u5220\u9664\u3002"),(0,r.kt)("h3",{id:"spellcheck-change"},(0,r.kt)("inlineCode",{parentName:"h3"},"spellcheck-change")),(0,r.kt)("p",null,"\u6b63\u5728\u6267\u884c\u62fc\u5199\u68c0\u67e5\u6216\u81ea\u52a8\u66f4\u6b63\u66f4\u6539\u3002\n\u8fd9\u7528\u4e8e\u901a\u77e5\u6838\u5fc3\u7f16\u8f91\u5668\u662f\u5426\u5c1d\u8bd5\u5141\u8bb8\u672c\u673a\u64a4\u6d88\u884c\u4e3a\u3002"),(0,r.kt)("h3",{id:"split-block"},(0,r.kt)("inlineCode",{parentName:"h3"},"split-block")),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u5f53\u7528\u6237\u6309\u4e0b",(0,r.kt)("inlineCode",{parentName:"p"},"return"),"\u65f6\uff0c\u5355\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"ContentBlock"),"\u5c06\u88ab\u62c6\u5206\u4e3a\u4e24\u4e2a\u3002"),(0,r.kt)("h3",{id:"undo"},(0,r.kt)("inlineCode",{parentName:"h3"},"undo")),(0,r.kt)("p",null,"\u6b63\u5728\u6267\u884c\u64a4\u6d88\u64cd\u4f5c\u3002\n\u7531\u4e8e\u64a4\u6d88\u884c\u4e3a\u662f\u7531Draft\u6838\u5fc3\u5904\u7406\u7684\uff0c\u56e0\u6b64\u60a8\u4e0d\u592a\u53ef\u80fd\u9700\u8981\u663e\u5f0f\u4f7f\u7528\u6b64\u884c\u4e3a\u3002"))}u.isMDXComponent=!0}}]);