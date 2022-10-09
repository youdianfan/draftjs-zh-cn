"use strict";(self.webpackChunkdraftjs_cn=self.webpackChunkdraftjs_cn||[]).push([[678],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6133:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const i={id:"api-reference-atomic-block-utils",title:"AtomicBlockUtils \u539f\u5b50\u5757\u5de5\u5177"},c=void 0,a={unversionedId:"api-reference-atomic-block-utils",id:"api-reference-atomic-block-utils",title:"AtomicBlockUtils \u539f\u5b50\u5757\u5de5\u5177",description:"AtomicBlockUtils\u6a21\u5757\u662f\u7528\u4e8e\u539f\u5b50(atomic)\u5757\u7f16\u8f91\u7684\u4e00\u7ec4\u5b9e\u7528\u5de5\u5177\u51fd\u6570\u7684static set(\u9759\u6001\u96c6\u5408)\u3002",source:"@site/docs/APIReference-AtomicBlockUtils.md",sourceDirName:".",slug:"/api-reference-atomic-block-utils",permalink:"/docs/api-reference-atomic-block-utils",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/APIReference-AtomicBlockUtils.md",tags:[],version:"current",frontMatter:{id:"api-reference-atomic-block-utils",title:"AtomicBlockUtils \u539f\u5b50\u5757\u5de5\u5177"},sidebar:"docs",previous:{title:"RichUtils",permalink:"/docs/api-reference-rich-utils"},next:{title:"KeyBindingUtil \u952e\u7ed1\u5b9a\u5de5\u5177",permalink:"/docs/api-reference-key-binding-util"}},l={},s=[{value:"\u9759\u6001\u65b9\u6cd5",id:"\u9759\u6001\u65b9\u6cd5",level:2},{value:"<code>insertAtomicBlock()</code>",id:"insertatomicblock",level:3},{value:"<code>moveAtomicBlock()</code>",id:"moveatomicblock",level:3}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"AtomicBlockUtils"),"\u6a21\u5757\u662f\u7528\u4e8e\u539f\u5b50(atomic)\u5757\u7f16\u8f91\u7684\u4e00\u7ec4\u5b9e\u7528\u5de5\u5177\u51fd\u6570\u7684static set(\u9759\u6001\u96c6\u5408)\u3002"),(0,o.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e9b\u65b9\u6cd5\u90fd\u63a5\u53d7\u5e26\u6709\u76f8\u5173\u53c2\u6570\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"EditorState"),"\u5bf9\u8c61\uff0c\u5e76\u8fd4\u56de",(0,o.kt)("inlineCode",{parentName:"p"},"EditorState"),"\u5bf9\u8c61\u3002"),(0,o.kt)("h2",{id:"\u9759\u6001\u65b9\u6cd5"},"\u9759\u6001\u65b9\u6cd5"),(0,o.kt)("h3",{id:"insertatomicblock"},(0,o.kt)("inlineCode",{parentName:"h3"},"insertAtomicBlock()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"insertAtomicBlock: function(\n  editorState: EditorState,\n  entityKey: string,\n  character: string\n): EditorState\n")),(0,o.kt)("h3",{id:"moveatomicblock"},(0,o.kt)("inlineCode",{parentName:"h3"},"moveAtomicBlock()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"moveAtomicBlock: function(\n  editorState: EditorState,\n  atomicBlock: ContentBlock,\n  targetRange: SelectionState,\n  insertionMode?: DraftInsertionType\n): EditorState\n")))}u.isMDXComponent=!0}}]);