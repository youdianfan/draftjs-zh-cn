"use strict";(self.webpackChunkdraftjs_cn=self.webpackChunkdraftjs_cn||[]).push([[650],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),k=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=k(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=k(n),u=l,m=s["".concat(p,".").concat(u)]||s[u]||d[u]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var k=2;k<r;k++)o[k]=n[k];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1601:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>k});var a=n(7462),l=(n(7294),n(3905));const r={id:"api-reference-content-state",title:"ContentState \u5185\u5bb9\u72b6\u6001"},o=void 0,i={unversionedId:"api-reference-content-state",id:"api-reference-content-state",title:"ContentState \u5185\u5bb9\u72b6\u6001",description:"ContentState\u662f\u4e00\u4e2aImmutable",source:"@site/docs/APIReference-ContentState.md",sourceDirName:".",slug:"/api-reference-content-state",permalink:"/docs/api-reference-content-state",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/APIReference-ContentState.md",tags:[],version:"current",frontMatter:{id:"api-reference-content-state",title:"ContentState \u5185\u5bb9\u72b6\u6001"},sidebar:"docs",previous:{title:"EditorState \u7f16\u8f91\u5668\u72b6\u6001",permalink:"/docs/api-reference-editor-state"},next:{title:"ContentBlock \u5185\u5bb9\u5757",permalink:"/docs/api-reference-content-block"}},p={},k=[{value:"\u603b\u89c8",id:"\u603b\u89c8",level:2},{value:"\u9759\u6001\u65b9\u6cd5",id:"\u9759\u6001\u65b9\u6cd5",level:2},{value:"<code>createFromText()</code>",id:"createfromtext",level:3},{value:"<code>createFromBlockArray()</code>",id:"createfromblockarray",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>getEntityMap()</code>",id:"getentitymap",level:3},{value:"<code>getBlockMap()</code>",id:"getblockmap",level:3},{value:"<code>getSelectionBefore()</code>",id:"getselectionbefore",level:3},{value:"<code>getSelectionAfter()</code>",id:"getselectionafter",level:3},{value:"<code>getBlockForKey()</code>",id:"getblockforkey",level:3},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:4},{value:"<code>getKeyBefore()</code>",id:"getkeybefore",level:3},{value:"<code>getKeyAfter()</code>",id:"getkeyafter",level:3},{value:"<code>getBlockBefore()</code>",id:"getblockbefore",level:3},{value:"<code>getBlockAfter()</code>",id:"getblockafter",level:3},{value:"<code>getBlocksAsArray()</code>",id:"getblocksasarray",level:3},{value:"<code>getFirstBlock()</code>",id:"getfirstblock",level:3},{value:"<code>getLastBlock()</code>",id:"getlastblock",level:3},{value:"<code>getPlainText()</code>",id:"getplaintext",level:3},{value:"<code>getLastCreatedEntityKey()</code>",id:"getlastcreatedentitykey",level:3},{value:"<code>hasText()</code>",id:"hastext",level:3},{value:"<code>createEntity()</code>",id:"createentity",level:3},{value:"<code>getEntity()</code>",id:"getentity",level:3},{value:"<code>mergeEntityData()</code>",id:"mergeentitydata",level:3},{value:"<code>replaceEntityData()</code>",id:"replaceentitydata",level:3},{value:"<code>addEntity()</code>",id:"addentity",level:3},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"<code>blockMap</code>",id:"blockmap",level:3},{value:"<code>selectionBefore</code>",id:"selectionbefore",level:3},{value:"<code>selectionAfter</code>",id:"selectionafter",level:3}],c={toc:k};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"ContentState\u662f\u4e00\u4e2aImmutable\n",(0,l.kt)("a",{parentName:"p",href:"http://facebook.github.io/immutable-js/docs/#/Record/Record"},"Record"),"\uff0c\u8868\u793a\u4ee5\u4e0b\u5404\u9879\u7684\u5b8c\u6574\u72b6\u6001\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7f16\u8f91\u5668\u7684\u5168\u90e8",(0,l.kt)("strong",{parentName:"li"},"\u5185\u5bb9"),"\uff1a\u6587\u672c\uff0c\u5757\u548c\u5185\u8054\u6837\u5f0f\u4ee5\u53ca\u5b9e\u4f53\u8303\u56f4(entity ranges)"),(0,l.kt)("li",{parentName:"ul"},"\u7f16\u8f91\u5668\u7684\u4e24\u79cd",(0,l.kt)("strong",{parentName:"li"},"selection states"),"\uff1a\u6e32\u67d3\u8fd9\u4e9b\u5185\u5bb9\u4e4b\u524d\u548c\u4e4b\u540e\u3002")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ContentState"),"\u5bf9\u8c61\u7684\u6700\u5e38\u89c1\u7528\u6cd5\u662f\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"EditorState.getCurrentContent()"),"\uff0c\u5b83\u63d0\u4f9b\u4e86\u5f53\u524d\u5728\u7f16\u8f91\u5668\u4e2d\u6e32\u67d3\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"ContentState"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"EditorState"),"\u5bf9\u8c61\u7ef4\u62a4\u7531",(0,l.kt)("inlineCode",{parentName:"p"},"ContentState"),"\u5bf9\u8c61\u7ec4\u6210\u7684\u64a4\u6d88\u548c\u91cd\u505a\u5806\u6808\u3002"),(0,l.kt)("h2",{id:"\u603b\u89c8"},"\u603b\u89c8"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u9759\u6001\u65b9\u6cd5")),(0,l.kt)("ul",{class:"apiIndex"},(0,l.kt)("li",null,(0,l.kt)("a",{href:"#createfromtext"},(0,l.kt)("pre",null,"static createFromText(text: string): ContentState"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#createfromblockarray"},(0,l.kt)("pre",null,"static createFromBlockArray(blocks: Array<ContentBlock>): ContentState")))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u65b9\u6cd5")),(0,l.kt)("ul",{class:"apiIndex"},(0,l.kt)("li",null,(0,l.kt)("a",{href:"#getentitymap"},(0,l.kt)("pre",null,"getEntityMap()"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#getblockmap"},(0,l.kt)("pre",null,"getBlockMap()"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#getselectionbefore"},(0,l.kt)("pre",null,"getSelectionBefore()"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#getselectionafter"},(0,l.kt)("pre",null,"getSelectionAfter()"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#getblockforkey"},(0,l.kt)("pre",null,"getBlockForKey(key)"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#getkeybefore"},(0,l.kt)("pre",null,"getKeyBefore(key)"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#getkeyafter"},(0,l.kt)("pre",null,"getKeyAfter(key)"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#getblockbefore"},(0,l.kt)("pre",null,"getBlockBefore(key)"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#getblockafter"},(0,l.kt)("pre",null,"getBlockAfter(key)"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#getblocksasarray"},(0,l.kt)("pre",null,"getBlocksAsArray()"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#getfirstblock"},(0,l.kt)("pre",null,"getFirstBlock()"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#getlastblock"},(0,l.kt)("pre",null,"getLastBlock()"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#getplaintext"},(0,l.kt)("pre",null,"getPlainText(delimiter)"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#getlastcreatedentitykey"},(0,l.kt)("pre",null,"getLastCreatedEntityKey()"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#hastext"},(0,l.kt)("pre",null,"hasText()"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#createentity"},(0,l.kt)("pre",null,"createEntity(...)"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#getentity"},(0,l.kt)("pre",null,"getEntity(...)"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#mergeentitydata"},(0,l.kt)("pre",null,"mergeEntityData(...)"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#replaceentitydata"},(0,l.kt)("pre",null,"replaceEntityData(...)"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#addentity"},(0,l.kt)("pre",null,"addEntity(...)")))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u5c5e\u6027")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528",(0,l.kt)("a",{parentName:"p",href:"http://facebook.github.io/immutable-js/docs/#/Map"},"Immutable Map API"),"\u8bbe\u7f6e\u5c5e\u6027\u3002"),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u4f8b\u5b50")),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const editorState = EditorState.createEmpty();\nconst contentState = editorState.getCurrentContent();\nconst contentStateWithSelectionBefore = contentState.set(\n  'selectionBefore',\n  SelectionState.createEmpty(contentState.getBlockForKey('1pu4d')),\n);\n"))),(0,l.kt)("ul",{class:"apiIndex"},(0,l.kt)("li",null,(0,l.kt)("a",{href:"#blockmap"},(0,l.kt)("pre",null,"blockMap"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#selectionbefore"},(0,l.kt)("pre",null,"selectionBefore"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#selectionafter"},(0,l.kt)("pre",null,"selectionAfter")))),(0,l.kt)("h2",{id:"\u9759\u6001\u65b9\u6cd5"},"\u9759\u6001\u65b9\u6cd5"),(0,l.kt)("h3",{id:"createfromtext"},(0,l.kt)("inlineCode",{parentName:"h3"},"createFromText()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"static createFromText(\n  text: string,\n  delimiter?: string\n): ContentState\n")),(0,l.kt)("p",null,"\u4ece\u5b57\u7b26\u4e32\u751f\u6210",(0,l.kt)("inlineCode",{parentName:"p"},"ContentState"),"\uff0c\u5e76\u4f7f\u7528delimiter(\u5b9a\u754c\u7b26)\u5c06\u5b57\u7b26\u4e32\u62c6\u5206\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"ContentBlock"),"\u5bf9\u8c61\u3002\n\u5982\u679c\u672a\u63d0\u4f9b\u5b9a\u754c\u7b26\uff0c\u5219\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"'\\n'"),"\u3002"),(0,l.kt)("h3",{id:"createfromblockarray"},(0,l.kt)("inlineCode",{parentName:"h3"},"createFromBlockArray()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"static createFromBlockArray(\n  blocks: Array<ContentBlock>,\n  entityMap: ?OrderedMap\n): ContentState\n")),(0,l.kt)("p",null,"\u4ece",(0,l.kt)("inlineCode",{parentName:"p"},"ContentBlock"),"\u5bf9\u8c61\u6570\u7ec4\u751f\u6210",(0,l.kt)("inlineCode",{parentName:"p"},"ContentState"),"\u3002\n\u9ed8\u8ba4\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"selectionBefore"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"selectionAfter"),"\u72b6\u6001\u5c06\u5149\u6807\u7f6e\u4e8e\u5185\u5bb9\u7684\u5f00\u5934\u3002"),(0,l.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,l.kt)("h3",{id:"getentitymap"},(0,l.kt)("inlineCode",{parentName:"h3"},"getEntityMap()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getEntityMap(): EntityMap\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u6240\u6709\u5df2\u521b\u5efa\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"DraftEntity"),"\u8bb0\u5f55\u7684\u5bf9\u8c61\u5e93\u3002\n\u5728\u5373\u5c06\u53d1\u5e03\u7684v0.11.0\u4e2d\uff0c\u8fd4\u56de\u7684map(\u6620\u5c04)\u5c06\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"DraftEntity"),"\u8bb0\u5f55\u7684Immutable ordered map(Immutable\u6709\u5e8f\u6620\u5c04)\u3002"),(0,l.kt)("p",null,"\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u60a8\u5e94\u8be5\u80fd\u591f\u4f7f\u7528\u4e0b\u9762\u7684\u4fbf\u6377\u65b9\u6cd5\u6765\u5b9a\u4f4d\u7279\u5b9a\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"DraftEntity"),"\u8bb0\u5f55\u6216\u83b7\u53d6\u6709\u5173\u5185\u5bb9\u72b6\u6001\u7684\u4fe1\u606f\u3002"),(0,l.kt)("h3",{id:"getblockmap"},(0,l.kt)("inlineCode",{parentName:"h3"},"getBlockMap()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getBlockMap(): BlockMap\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u8868\u793a\u6574\u4e2a\u6587\u6863\u72b6\u6001\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"ContentBlock"),"\u5bf9\u8c61\u7684\u5b8c\u6574\u987a\u5e8f\u56fe\u3002"),(0,l.kt)("p",null,"\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u60a8\u5e94\u8be5\u80fd\u591f\u4f7f\u7528\u4e0b\u9762\u7684\u4fbf\u6377\u65b9\u6cd5\u6765\u5b9a\u4f4d\u7279\u5b9a\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"ContentBlock"),"\u5bf9\u8c61\u6216\u83b7\u53d6\u6709\u5173\u5185\u5bb9\u72b6\u6001\u7684\u4fe1\u606f\u3002"),(0,l.kt)("h3",{id:"getselectionbefore"},(0,l.kt)("inlineCode",{parentName:"h3"},"getSelectionBefore()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getSelectionBefore(): SelectionState\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u6e32\u67d3",(0,l.kt)("inlineCode",{parentName:"p"},"blockMap"),"\u4e4b\u524d\u5728\u7f16\u8f91\u5668\u4e2d\u663e\u793a\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"SelectionState")),(0,l.kt)("p",null,"\u5728\u7f16\u8f91\u5668\u4e2d\u6267\u884c\u64a4\u6d88\u64cd\u4f5c\u65f6\uff0c\u5f53\u524d",(0,l.kt)("inlineCode",{parentName:"p"},"ContentState"),"\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"selectionBefore"),"\u7528\u4e8e\u5c06selection range(\u9009\u62e9\u8303\u56f4)\u653e\u7f6e\u5728\u9002\u5f53\u7684\u4f4d\u7f6e\u3002"),(0,l.kt)("h3",{id:"getselectionafter"},(0,l.kt)("inlineCode",{parentName:"h3"},"getSelectionAfter()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getSelectionAfter(): SelectionState\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u6e32\u67d3",(0,l.kt)("inlineCode",{parentName:"p"},"blockMap"),"\u540e\u5728\u7f16\u8f91\u5668\u4e2d\u663e\u793a\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"SelectionState"),"\u3002"),(0,l.kt)("p",null,"\u5f53\u5728\u7f16\u8f91\u5668\u4e2d\u6267\u884c\u5bfc\u81f4\u6e32\u67d3\u6b64",(0,l.kt)("inlineCode",{parentName:"p"},"blockMap"),"\u7684\u4efb\u4f55\u64cd\u4f5c\u65f6\uff0c\u9009\u62e9\u8303\u56f4\u5c06\u653e\u7f6e\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"selectionAfter"),"\u4f4d\u7f6e\u3002"),(0,l.kt)("h3",{id:"getblockforkey"},(0,l.kt)("inlineCode",{parentName:"h3"},"getBlockForKey()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getBlockForKey(key: string): ContentBlock\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u4e0e\u7ed9\u5b9a\u5757\u952e\u76f8\u5bf9\u5e94\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"ContentBlock"),"\u3002"),(0,l.kt)("h4",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var {editorState} = this.state;\nvar startKey = editorState.getSelection().getStartKey();\nvar selectedBlockType = editorState\n  .getCurrentContent()\n  .getBlockForKey(startKey)\n  .getType();\n")),(0,l.kt)("h3",{id:"getkeybefore"},(0,l.kt)("inlineCode",{parentName:"h3"},"getKeyBefore()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getKeyBefore(key: string): ?string\n")),(0,l.kt)("p",null,"\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"blockMap"),"\u4e2d\u6307\u5b9a\u952e\u4e4b\u524d\u7684\u952e\uff1b\u5982\u679c\u8fd9\u662f\u7b2c\u4e00\u4e2a\u952e\uff0c\u5219\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"\u3002"),(0,l.kt)("h3",{id:"getkeyafter"},(0,l.kt)("inlineCode",{parentName:"h3"},"getKeyAfter()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getKeyAfter(key: string): ?string\n")),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"blockMap"),"\u4e2d\u6307\u5b9a\u952e\u4e4b\u540e\u8fd4\u56de\u952e\uff1b\u5982\u679c\u8fd9\u662f\u6700\u540e\u4e00\u4e2a\u952e\uff0c\u5219\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"\u3002"),(0,l.kt)("h3",{id:"getblockbefore"},(0,l.kt)("inlineCode",{parentName:"h3"},"getBlockBefore()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getBlockBefore(key: string): ?ContentBlock\n")),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"blockMap"),"\u4e2d\u6307\u5b9a\u952e\u4e4b\u524d\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"ContentBlock"),"\uff1b\u5982\u679c\u8fd9\u662f\u7b2c\u4e00\u4e2a\u952e\uff0c\u5219\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"\u3002"),(0,l.kt)("h3",{id:"getblockafter"},(0,l.kt)("inlineCode",{parentName:"h3"},"getBlockAfter()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getBlockAfter(key: string): ?ContentBlock\n")),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"blockMap"),"\u4e2d\u6307\u5b9a\u952e\u4e4b\u540e\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"ContentBlock"),"\uff1b\u5982\u679c\u8fd9\u662f\u6700\u540e\u4e00\u4e2a\u952e\uff0c\u5219\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"\u3002"),(0,l.kt)("h3",{id:"getblocksasarray"},(0,l.kt)("inlineCode",{parentName:"h3"},"getBlocksAsArray()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getBlocksAsArray(): Array<ContentBlock>\n")),(0,l.kt)("p",null,"\u4ee5\u6570\u7ec4\u5f62\u5f0f\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"blockMap"),"\u7684\u503c\u3002"),(0,l.kt)("p",null,"\u901a\u5e38\u4e0d\u9700\u8981\u4f7f\u7528\u6b64\u65b9\u6cd5\uff0c\u56e0\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"getBlockMap"),"\u63d0\u4f9b\u4e86\u5e94\u8be5\u7528\u4e8e\u8fed\u4ee3\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"OrderedMap"),"\u3002"),(0,l.kt)("h3",{id:"getfirstblock"},(0,l.kt)("inlineCode",{parentName:"h3"},"getFirstBlock()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getFirstBlock(): ContentBlock\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u7b2c\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"ContentBlock"),"\u3002"),(0,l.kt)("h3",{id:"getlastblock"},(0,l.kt)("inlineCode",{parentName:"h3"},"getLastBlock()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getLastBlock(): ContentBlock\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u6700\u540e\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"ContentBlock"),"\u3002"),(0,l.kt)("h3",{id:"getplaintext"},(0,l.kt)("inlineCode",{parentName:"h3"},"getPlainText()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getPlainText(delimiter?: string): string\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u5185\u5bb9\u7684\u5b8c\u6574\u7eaf\u6587\u672c\u503c\uff0c\u5e76\u5e26\u6709delimiter(\u5b9a\u754c\u7b26)\u3002\n\u5982\u679c\u672a\u6307\u5b9a\u5206\u9694\u7b26\uff0c\u5219\u4f7f\u7528\u6362\u884c\u7b26\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"\\u000A"),"\uff09\u3002"),(0,l.kt)("h3",{id:"getlastcreatedentitykey"},(0,l.kt)("inlineCode",{parentName:"h3"},"getLastCreatedEntityKey()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getLastCreatedEntityKey(): string\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u53ef\u7528\u4e8e\u5f15\u7528\u6700\u8fd1\u521b\u5efa\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"DraftEntity"),"\u8bb0\u5f55\u7684\u5b57\u7b26\u4e32\u952e\u3002\n\u8fd9\u662f\u56e0\u4e3a\u5b9e\u4f53\u662f\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"ContentState"),"\u4e2d\u7684\u5b57\u7b26\u4e32\u952e\u5f15\u7528\u7684\u3002\n\u5e94\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"CharacterMetadata"),"\u5bf9\u8c61\u4e2d\u4f7f\u7528\u5b57\u7b26\u4e32\u503c\u6765\u8ddf\u8e2a\u5e26\u6ce8\u91ca\u5b57\u7b26\u7684\u5b9e\u4f53"),(0,l.kt)("h3",{id:"hastext"},(0,l.kt)("inlineCode",{parentName:"h3"},"hasText()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"hasText(): boolean\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u5185\u5bb9\u662f\u5426\u5b8c\u5168\u5305\u542b\u4efb\u4f55\u6587\u672c\u3002"),(0,l.kt)("h3",{id:"createentity"},(0,l.kt)("inlineCode",{parentName:"h3"},"createEntity()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"createEntity(\n  type: DraftEntityType,\n  mutability: DraftEntityMutability,\n  data?: Object\n): ContentState\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u5df2\u66f4\u65b0\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"ContentState"),"\u8bb0\u5f55\uff0c\u4ee5\u5c06\u65b0\u521b\u5efa\u200b\u200b\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"DraftEntity"),"\u8bb0\u5f55\u5305\u542b\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"EntityMap"),"\u4e2d\u3002\n\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"getLastCreatedEntityKey"),"\u4ee5\u83b7\u53d6\u65b0\u521b\u5efa\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"DraftEntity"),"\u8bb0\u5f55\u7684\u952e\u3002"),(0,l.kt)("h3",{id:"getentity"},(0,l.kt)("inlineCode",{parentName:"h3"},"getEntity()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getEntity(key: string): DraftEntityInstance\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u6307\u5b9a\u952e\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"DraftEntityInstance"),"\u3002\n\u5982\u679c\u8be5\u952e\u4e0d\u5b58\u5728\u5b9e\u4f8b\uff0c\u5219\u629b\u51fa\u8be5\u5f02\u5e38\u3002"),(0,l.kt)("h3",{id:"mergeentitydata"},(0,l.kt)("inlineCode",{parentName:"h3"},"mergeEntityData()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"mergeEntityData(\n  key: string,\n  toMerge: {[key: string]: any}\n): ContentState\n")),(0,l.kt)("p",null,"\u7531\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"DraftEntityInstance"),"\u5bf9\u8c61\u662fimmutable(\u4e0d\u53ef\u53d8\u7684)\uff0c\u56e0\u6b64\u60a8\u65e0\u6cd5\u901a\u8fc7\u5178\u578b\u7684\u53ef\u53d8\u65b9\u5f0f\u6765\u66f4\u65b0\u5b9e\u4f53\u7684\u5143\u6570\u636e\u3002"),(0,l.kt)("p",null,"mergeData\u65b9\u6cd5\u5141\u8bb8\u60a8\u5c06\u66f4\u65b0\u5e94\u7528\u4e8e\u6307\u5b9a\u7684\u5b9e\u4f53\u3002"),(0,l.kt)("h3",{id:"replaceentitydata"},(0,l.kt)("inlineCode",{parentName:"h3"},"replaceEntityData()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"replaceEntityData(\n  key: string,\n  newData: {[key: string]: any}\n): ContentState\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"replaceData"),"\u65b9\u6cd5\u4e0e",(0,l.kt)("inlineCode",{parentName:"p"},"mergeData"),"\u65b9\u6cd5\u7c7b\u4f3c\uff0c\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\u5b83\u5c06\u5b8c\u5168\u4e22\u5f03\u5b9e\u4f8b\u7684\u73b0\u6709\u6570\u636e\u503c\u5e76\u5c06\u5176\u66ff\u6362\u4e3a\u6307\u5b9a\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"newData"),"\u3002"),(0,l.kt)("h3",{id:"addentity"},(0,l.kt)("inlineCode",{parentName:"h3"},"addEntity()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"addEntity(instance: DraftEntityInstance): ContentState\n")),(0,l.kt)("p",null,"\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u60a8\u5c06\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"contentState.createEntity()"),"\u3002\n\u8fd9\u662f\u4e00\u79cd\u4fbf\u6377\u7684\u65b9\u6cd5\uff0c\u5728\u5178\u578b\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Draft"),"\u7528\u6cd5\u4e2d\u60a8\u53ef\u80fd\u4e0d\u9700\u8981\u3002"),(0,l.kt)("p",null,"\u5728\u5df2\u7ecf\u521b\u5efa\u5b9e\u4f8b\u5e76\u4e14\u73b0\u5728\u9700\u8981\u5c06\u5176\u6dfb\u52a0\u5230\u5b9e\u4f53\u5b58\u50a8\u7684\u60c5\u51b5\u4e0b\uff0c\u6dfb\u52a0\u529f\u80fd\u5f88\u6709\u7528\u3002\n\u5982\u679c\u8981\u6062\u590d",(0,l.kt)("inlineCode",{parentName:"p"},"ContentState"),"\u7684\u539f\u59cbJavaScript\u8868\u793a\u4ee5\u8fdb\u884c\u7f16\u8f91\uff0c\u5219\u53ef\u80fd\u4f1a\u53d1\u751f\u8fd9\u79cd\u60c5\u51b5\u3002"),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("p",null,"\u4f7f\u7528",(0,l.kt)("a",{parentName:"p",href:"http://facebook.github.io/immutable-js/docs/#/Map"},"Immutable Map API"),"\u8bbe\u7f6e\u5c5e\u6027\u3002."),(0,l.kt)("h3",{id:"blockmap"},(0,l.kt)("inlineCode",{parentName:"h3"},"blockMap")),(0,l.kt)("p",null,"\u67e5\u770b",(0,l.kt)("inlineCode",{parentName:"p"},"getBlockMap()"),"."),(0,l.kt)("h3",{id:"selectionbefore"},(0,l.kt)("inlineCode",{parentName:"h3"},"selectionBefore")),(0,l.kt)("p",null,"\u67e5\u770b",(0,l.kt)("inlineCode",{parentName:"p"},"getSelectionBefore()"),"."),(0,l.kt)("h3",{id:"selectionafter"},(0,l.kt)("inlineCode",{parentName:"h3"},"selectionAfter")),(0,l.kt)("p",null,"\u67e5\u770b",(0,l.kt)("inlineCode",{parentName:"p"},"getSelectionAfter()"),"."))}d.isMDXComponent=!0}}]);