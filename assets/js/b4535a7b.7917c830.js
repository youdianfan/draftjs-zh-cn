"use strict";(self.webpackChunkdraftjs_cn=self.webpackChunkdraftjs_cn||[]).push([[288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(o,".").concat(u)]||m[u]||s[u]||i;return n?a.createElement(k,c(c({ref:t},d),{},{components:n})):a.createElement(k,c({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<i;p++)c[p]=n[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={id:"api-reference-entity",title:"Entity \u5b9e\u4f53"},c=void 0,l={unversionedId:"api-reference-entity",id:"api-reference-entity",title:"Entity \u5b9e\u4f53",description:"Entity\u662f\u4e00\u4e2a\u9759\u6001\u6a21\u5757\uff0c\u5176\u4e2d\u5305\u542b\u7528\u4e8e\u521b\u5efa\uff0c\u68c0\u7d22\u548c\u66f4\u65b0\u5b9e\u4f53\u5bf9\u8c61\u7684API\uff0c\u8be5\u5bf9\u8c61\u7528\u4e8e\u4f7f\u7528\u5143\u6570\u636e\u6ce8\u91ca\u6587\u672c\u8303\u56f4\u3002",source:"@site/docs/APIReference-Entity.md",sourceDirName:".",slug:"/api-reference-entity",permalink:"/docs/api-reference-entity",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/APIReference-Entity.md",tags:[],version:"current",frontMatter:{id:"api-reference-entity",title:"Entity \u5b9e\u4f53"},sidebar:"docs",previous:{title:"CharacterMetadata \u5b57\u7b26\u5143\u6570\u636e",permalink:"/docs/api-reference-character-metadata"},next:{title:"SelectionState \u9009\u62e9\u72b6\u6001",permalink:"/docs/api-reference-selection-state"}},o={},p=[{value:"\u603b\u89c8",id:"\u603b\u89c8",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>create</code> <em>(\u4e0d\u63a8\u8350\u4f7f\u7528 <code>contentState.createEntity</code>)</em>",id:"create-\u4e0d\u63a8\u8350\u4f7f\u7528-contentstatecreateentity",level:3},{value:"<code>add</code> <em>(\u4e0d\u63a8\u8350\u4f7f\u7528 <code>contentState.addEntity</code>)</em>",id:"add-\u4e0d\u63a8\u8350\u4f7f\u7528-contentstateaddentity",level:3},{value:"<code>get</code> <em>(\u4e0d\u63a8\u8350\u4f7f\u7528 <code>contentState.getEntity</code>)</em>",id:"get-\u4e0d\u63a8\u8350\u4f7f\u7528-contentstategetentity",level:3},{value:"<code>mergeData</code> <em>(\u4e0d\u63a8\u8350\u4f7f\u7528 <code>contentState.mergeEntityData</code>)</em>",id:"mergedata-\u4e0d\u63a8\u8350\u4f7f\u7528-contentstatemergeentitydata",level:3},{value:"<code>replaceData</code> <em>(\u4e0d\u63a8\u8350\u4f7f\u7528 <code>contentState.replaceEntityData</code>)</em>",id:"replacedata-\u4e0d\u63a8\u8350\u4f7f\u7528-contentstatereplaceentitydata",level:3}],d={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Entity"),"\u662f\u4e00\u4e2a\u9759\u6001\u6a21\u5757\uff0c\u5176\u4e2d\u5305\u542b\u7528\u4e8e\u521b\u5efa\uff0c\u68c0\u7d22\u548c\u66f4\u65b0\u5b9e\u4f53\u5bf9\u8c61\u7684API\uff0c\u8be5\u5bf9\u8c61\u7528\u4e8e\u4f7f\u7528\u5143\u6570\u636e\u6ce8\u91ca\u6587\u672c\u8303\u56f4\u3002\n\u8be5\u6a21\u5757\u8fd8\u5305\u542b\u7528\u4e8e\u7ef4\u62a4\u5b9e\u4f53\u6570\u636e\u7684\u5355\u4e2astore(\u5b58\u50a8)"),(0,r.kt)("p",null,"\u672c\u6587\u81f4\u529b\u4e8e\u4ecb\u7ecdAPI\u7684\u8be6\u7ec6\u4fe1\u606f\u3002\n\u6709\u5173\u5982\u4f55\u4f7f\u7528\u5b9e\u4f53\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1\u6709\u5173",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced-topics-entities"},"\u5b9e\u4f53\u7684\u9ad8\u7ea7\u4e3b\u9898\u6587\u7ae0"),"\u3002"),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u7528\u4e8e\u5b9e\u4f53\u5b58\u50a8\u548c\u7ba1\u7406\u7684API\u6700\u8fd1\u5df2\u66f4\u6539\uff1b\n\u6709\u5173\u66f4\u65b0\u5e94\u7528\u7a0b\u5e8f\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1\u6211\u4eec\u7684",(0,r.kt)("a",{parentName:"p",href:"/docs/v0-10-api-migration#content"},"v0.10 API\u8fc1\u79fb\u6307\u5357"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Entity"),"(\u5b9e\u4f53)\u7684\u65b9\u6cd5\u8fd4\u56de\u7684\u5b9e\u4f53\u5bf9\u8c61\u8868\u793a\u4e3a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/draft-js/blob/master/src/model/entity/DraftEntityInstance.js"},"DraftEntityInstance")," immutable records\u3002\n\u8fd9\u4e9b\u5177\u6709\u5c11\u91cf\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"getter"),"\u51fd\u6570\uff0c\u5e94\u4ec5\u7528\u4e8e\u68c0\u7d22\u3002"),(0,r.kt)("h2",{id:"\u603b\u89c8"},"\u603b\u89c8"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u65b9\u6cd5")),(0,r.kt)("ul",{class:"apiIndex"},(0,r.kt)("li",null,(0,r.kt)("a",{href:"#create"},(0,r.kt)("pre",null,"create(...): DraftEntityInstance"))),(0,r.kt)("li",null,(0,r.kt)("a",{href:"#add"},(0,r.kt)("pre",null,"add(instance: DraftEntityInstance): string"))),(0,r.kt)("li",null,(0,r.kt)("a",{href:"#get"},(0,r.kt)("pre",null,"get(key: string): DraftEntityInstance"))),(0,r.kt)("li",null,(0,r.kt)("a",{href:"#mergedata"},(0,r.kt)("pre",null,"mergeData(...): DraftEntityInstance"))),(0,r.kt)("li",null,(0,r.kt)("a",{href:"#replacedata"},(0,r.kt)("pre",null,"replaceData(...): DraftEntityInstance")))),(0,r.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,r.kt)("h3",{id:"create-\u4e0d\u63a8\u8350\u4f7f\u7528-contentstatecreateentity"},(0,r.kt)("inlineCode",{parentName:"h3"},"create")," ",(0,r.kt)("em",{parentName:"h3"},"(\u4e0d\u63a8\u8350\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"em",href:"/docs/api-reference-content-state#createentity"},(0,r.kt)("inlineCode",{parentName:"a"},"contentState.createEntity")),")")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"create(\n  type: DraftEntityType,\n  mutability: DraftEntityMutability,\n  data?: Object\n): string\n")),(0,r.kt)("p",null,"\u5e94\u8be5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"create"),"\u65b9\u6cd5\u6765\u751f\u6210\u5177\u6709\u63d0\u4f9b\u7684\u5c5e\u6027\u7684\u65b0\u5b9e\u4f53\u5bf9\u8c61"),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002\n\u8fd9\u662f\u56e0\u4e3a\u5b9e\u4f53\u662f\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"ContentState"),"\u4e2d\u7684\u5b57\u7b26\u4e32\u952e\u5f15\u7528\u7684\u3002\n\u5e94\u8be5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"CharacterMetadata"),"\u5bf9\u8c61\u4e2d\u4f7f\u7528\u5b57\u7b26\u4e32\u503c\u6765\u8ddf\u8e2a\u5e26\u6709\u6ce8\u91ca\u5b57\u7b26\u7684\u5b9e\u4f53\u3002"),(0,r.kt)("h3",{id:"add-\u4e0d\u63a8\u8350\u4f7f\u7528-contentstateaddentity"},(0,r.kt)("inlineCode",{parentName:"h3"},"add")," ",(0,r.kt)("em",{parentName:"h3"},"(\u4e0d\u63a8\u8350\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"em",href:"/docs/api-reference-content-state#addentity"},(0,r.kt)("inlineCode",{parentName:"a"},"contentState.addEntity")),")")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"add(instance: DraftEntityInstance): string\n")),(0,r.kt)("p",null,"\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u60a8\u5c06\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"Entity.create()"),"\u3002\n\u8fd9\u662f\u4e00\u79cd\u4fbf\u6377\u7684\u65b9\u6cd5\uff0c\u5728\u5178\u578b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Draft"),"\u7528\u6cd5\u4e2d\u60a8\u53ef\u80fd\u4e0d\u9700\u8981\u3002"),(0,r.kt)("p",null,"\u5728\u5df2\u7ecf\u521b\u5efa\u5b9e\u4f8b\u5e76\u4e14\u73b0\u5728\u9700\u8981\u5c06\u5176\u6dfb\u52a0\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"Entity"),"\u5b58\u50a8\u7684\u60c5\u51b5\u4e0b\uff0c\u6dfb\u52a0\u529f\u80fd\u5f88\u6709\u7528\u3002\n\u5982\u679c\u8981\u6062\u590d",(0,r.kt)("inlineCode",{parentName:"p"},"ContentState"),"\u7684\u539f\u59cbJavaScript\u8868\u793a\u4ee5\u8fdb\u884c\u7f16\u8f91\uff0c\u5219\u53ef\u80fd\u4f1a\u53d1\u751f\u8fd9\u79cd\u60c5\u51b5\u3002"),(0,r.kt)("h3",{id:"get-\u4e0d\u63a8\u8350\u4f7f\u7528-contentstategetentity"},(0,r.kt)("inlineCode",{parentName:"h3"},"get")," ",(0,r.kt)("em",{parentName:"h3"},"(\u4e0d\u63a8\u8350\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"em",href:"/docs/api-reference-content-state#getentity"},(0,r.kt)("inlineCode",{parentName:"a"},"contentState.getEntity")),")")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"get(key: string): DraftEntityInstance\n")),(0,r.kt)("p",null,"\u8fd4\u56de\u6307\u5b9a\u952e\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"DraftEntityInstance"),"\u3002\n\u5982\u679c\u8be5\u952e\u4e0d\u5b58\u5728\u5b9e\u4f8b\uff0c\u5219\u629b\u51fa\u8be5\u5f02\u5e38\u3002"),(0,r.kt)("h3",{id:"mergedata-\u4e0d\u63a8\u8350\u4f7f\u7528-contentstatemergeentitydata"},(0,r.kt)("inlineCode",{parentName:"h3"},"mergeData")," ",(0,r.kt)("em",{parentName:"h3"},"(\u4e0d\u63a8\u8350\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"em",href:"/docs/api-reference-content-state#mergeentitydata"},(0,r.kt)("inlineCode",{parentName:"a"},"contentState.mergeEntityData")),")")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"mergeData(\n  key: string,\n  toMerge: {[key: string]: any}\n): DraftEntityInstance\n")),(0,r.kt)("p",null,"\u7531\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"DraftEntityInstance"),"\u5bf9\u8c61\u662f\u4e0d\u53ef\u53d8\u7684\uff0c\u56e0\u6b64\u60a8\u65e0\u6cd5\u901a\u8fc7\u5178\u578b\u7684\u53ef\u53d8\u65b9\u5f0f\u6765\u66f4\u65b0\u5b9e\u4f53\u7684\u5143\u6570\u636e\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mergeData"),"\u65b9\u6cd5\u5141\u8bb8\u60a8\u5c06\u66f4\u65b0\u5e94\u7528\u4e8e\u6307\u5b9a\u7684\u5b9e\u4f53\u3002"),(0,r.kt)("h3",{id:"replacedata-\u4e0d\u63a8\u8350\u4f7f\u7528-contentstatereplaceentitydata"},(0,r.kt)("inlineCode",{parentName:"h3"},"replaceData")," ",(0,r.kt)("em",{parentName:"h3"},"(\u4e0d\u63a8\u8350\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"em",href:"/docs/api-reference-content-state#replaceentitydata"},(0,r.kt)("inlineCode",{parentName:"a"},"contentState.replaceEntityData")),")")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"replaceData(\n  key: string,\n  newData: {[key: string]: any}\n): DraftEntityInstance\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"replaceData"),"\u65b9\u6cd5\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"mergeData"),"\u65b9\u6cd5\u7c7b\u4f3c\uff0c\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\u5b83\u5c06\u5b8c\u5168\u4e22\u5f03\u5b9e\u4f8b\u7684\u73b0\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"\u503c\u5e76\u5c06\u5176\u66ff\u6362\u4e3a\u6307\u5b9a\u7684newData\u3002"))}s.isMDXComponent=!0}}]);