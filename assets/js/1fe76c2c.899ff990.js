"use strict";(self.webpackChunkdraftjs_cn=self.webpackChunkdraftjs_cn||[]).push([[343],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),k=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=k(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=k(n),m=l,s=u["".concat(o,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(s,i(i({ref:t},c),{},{components:n})):a.createElement(s,i({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var k=2;k<r;k++)i[k]=n[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>k});var a=n(7462),l=(n(7294),n(3905));const r={id:"api-reference-content-block",title:"ContentBlock \u5185\u5bb9\u5757"},i=void 0,p={unversionedId:"api-reference-content-block",id:"api-reference-content-block",title:"ContentBlock \u5185\u5bb9\u5757",description:"ContentBlock\u662fImmutable",source:"@site/docs/APIReference-ContentBlock.md",sourceDirName:".",slug:"/api-reference-content-block",permalink:"/docs/api-reference-content-block",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/APIReference-ContentBlock.md",tags:[],version:"current",frontMatter:{id:"api-reference-content-block",title:"ContentBlock \u5185\u5bb9\u5757"},sidebar:"docs",previous:{title:"ContentState \u5185\u5bb9\u72b6\u6001",permalink:"/docs/api-reference-content-state"},next:{title:"CharacterMetadata \u5b57\u7b26\u5143\u6570\u636e",permalink:"/docs/api-reference-character-metadata"}},o={},k=[{value:"\u8868\u793a\u6837\u5f0f\u548c\u5b9e\u4f53",id:"\u8868\u793a\u6837\u5f0f\u548c\u5b9e\u4f53",level:3},{value:"\u603b\u89c8",id:"\u603b\u89c8",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>getKey()</code>",id:"getkey",level:3},{value:"<code>getType()</code>",id:"gettype",level:3},{value:"<code>getText()</code>",id:"gettext",level:3},{value:"<code>getCharacterList()</code>",id:"getcharacterlist",level:3},{value:"<code>getLength()</code>",id:"getlength",level:3},{value:"<code>getDepth()</code>",id:"getdepth",level:3},{value:"<code>getInlineStyleAt()</code>",id:"getinlinestyleat",level:3},{value:"<code>getEntityAt()</code>",id:"getentityat",level:3},{value:"<code>getData()</code>",id:"getdata",level:3},{value:"<code>findStyleRanges()</code>",id:"findstyleranges",level:3},{value:"<code>findEntityRanges()</code>",id:"findentityranges",level:3},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"<code>key</code>",id:"key",level:3},{value:"<code>text</code>",id:"text",level:3},{value:"<code>type</code>",id:"type",level:3},{value:"<code>characterList</code>",id:"characterlist",level:3},{value:"<code>depth</code>",id:"depth",level:3},{value:"<code>data</code>",id:"data",level:3}],c={toc:k};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"ContentBlock\u662fImmutable\n",(0,l.kt)("a",{parentName:"p",href:"http://facebook.github.io/immutable-js/docs/#/Record/Record"},"Record"),"\uff0c\u8868\u793a\u5355\u4e2a\u7f16\u8f91\u5668\u5185\u5bb9\u5757\u7684\u5b8c\u6574\u72b6\u6001\uff0c\u5305\u62ec"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5757\u7684\u7eaf\u6587\u672c\u5185\u5bb9"),(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b, \u4f8b\u5982paragraph, header, list item (\u6bb5\u843d\uff0c\u6807\u9898\uff0c\u5217\u8868\u9879)"),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u4f53\uff0c\u5185\u8054\u6837\u5f0f\u548cdepth(\u6df1\u5ea6)\u4fe1\u606f")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ContentState"),"\u5bf9\u8c61\u5305\u542b\u8fd9\u4e9b",(0,l.kt)("inlineCode",{parentName:"p"},"ContentBlock"),"\u5bf9\u8c61\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"OrderedMap"),"\uff0c\u5b83\u4eec\u4e00\u8d77\u6784\u6210\u7f16\u8f91\u5668\u7684\u5168\u90e8\u5185\u5bb9\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ContentBlock"),"\u5bf9\u8c61\u5728\u5f88\u5927\u7a0b\u5ea6\u4e0a\u7c7b\u4f3c\u4e8e\u5757\u7ea7HTML\u5143\u7d20\uff0c\u4f8b\u5982\u6bb5\u843d\u548c\u5217\u8868\u9879\u3002\n\u53ef\u7528\u7684\u7c7b\u578b\u6709\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"unstyled  (\u672a\u6837\u5f0f\u5316)"),(0,l.kt)("li",{parentName:"ul"},"paragraph"),(0,l.kt)("li",{parentName:"ul"},"header-one"),(0,l.kt)("li",{parentName:"ul"},"header-two"),(0,l.kt)("li",{parentName:"ul"},"header-three"),(0,l.kt)("li",{parentName:"ul"},"header-four"),(0,l.kt)("li",{parentName:"ul"},"header-five"),(0,l.kt)("li",{parentName:"ul"},"header-six"),(0,l.kt)("li",{parentName:"ul"},"unordered-list-item  (\u65e0\u5e8f\u5217\u8868)"),(0,l.kt)("li",{parentName:"ul"},"ordered-list-item (\u6709\u5e8f\u5217\u8868)"),(0,l.kt)("li",{parentName:"ul"},"blockquote (\u5757\u5f15\u7528)"),(0,l.kt)("li",{parentName:"ul"},"code-block (\u4ee3\u7801\u5757)"),(0,l.kt)("li",{parentName:"ul"},"atomic (\u539f\u5b50)")),(0,l.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u6784\u9020\u51fd\u6570\u76f4\u63a5\u521b\u5efa\u65b0\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"ContentBlock"),"\u5bf9\u8c61\u3002\n\u9884\u671f\u8bb0\u5f55\u503c\u5c06\u5728\u4e0b\u9762\u8be6\u7ec6\u8bf4\u660e\u3002"),(0,l.kt)("h3",{id:"\u8868\u793a\u6837\u5f0f\u548c\u5b9e\u4f53"},"\u8868\u793a\u6837\u5f0f\u548c\u5b9e\u4f53"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"characterList"),"\u5b57\u6bb5\u662f\u4e00\u4e2aimmutable ",(0,l.kt)("inlineCode",{parentName:"p"},"List"),"\uff0c\u5176\u4e2d\u5305\u542b\u8be5\u5757\u4e2d\u6bcf\u4e2a\u5b57\u7b26\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"CharacterMetadata"),"\u5bf9\u8c61\u3002\n\u8fd9\u5c31\u662f\u6211\u4eec\u5982\u4f55\u7f16\u7801\u7ed9\u5b9a\u5757\u7684\u6837\u5f0f\u548c\u5b9e\u4f53\u3002"),(0,l.kt)("p",null,"\u901a\u8fc7\u5927\u91cf\u4f7f\u7528\u8fd9\u4e9b\u5217\u8868\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"CharacterMetadata"),"\u5bf9\u8c61\u7684\u4e0d\u53d8\u6027\u548c\u6570\u636e\u6301\u4e45\u6027\uff0c\u5bf9\u5185\u5bb9\u7684\u7f16\u8f91\u901a\u5e38\u5bf9\u7f16\u8f91\u5668\u7684\u5185\u5b58\u5360\u7528\u5f71\u54cd\u5f88\u5c0f\u3002"),(0,l.kt)("p",null,"\u901a\u8fc7\u4ee5\u8fd9\u79cd\u65b9\u5f0f\u4e00\u8d77\u7f16\u7801\u5185\u8054\u6837\u5f0f\u548c\u5b9e\u4f53\uff0c\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"ContentBlock\u4e0a"),"\u6267\u884c\u7f16\u8f91\u7684\u51fd\u6570\u53ef\u4ee5\u5728\u5355\u4e2aList\u5bf9\u8c61\u4e0a\u6267\u884cslices, concats\u548c\u5176\u4ed6",(0,l.kt)("inlineCode",{parentName:"p"},"List"),"\u65b9\u6cd5\u3002"),(0,l.kt)("p",null,"\u5f53\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5305\u542b\u6587\u672c\u4f46\u4e0d\u5305\u542b",(0,l.kt)("inlineCode",{parentName:"p"},"characterList"),"\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"ContentBlock"),"\u65f6\uff0c\u5b83\u5c06\u9ed8\u8ba4\u4e3a\u63d0\u4f9b\u7684\u6587\u672c\u5e26\u6709\u7a7a",(0,l.kt)("inlineCode",{parentName:"p"},"CharacterMetadata"),"\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"characterList"),"\u3002"),(0,l.kt)("h2",{id:"\u603b\u89c8"},"\u603b\u89c8"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u65b9\u6cd5")),(0,l.kt)("ul",{class:"apiIndex"},(0,l.kt)("li",null,(0,l.kt)("a",{href:"#getkey"},(0,l.kt)("pre",null,"getKey(): string"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#gettype"},(0,l.kt)("pre",null,"getType(): DraftBlockType"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#gettext"},(0,l.kt)("pre",null,"getText(): string"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#getcharacterlist"},(0,l.kt)("pre",null,"getCharacterList(): List<CharacterMetadata>"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#getlength"},(0,l.kt)("pre",null,"getLength(): number"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#getdepth"},(0,l.kt)("pre",null,"getDepth(): number"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#getinlinestyleat"},(0,l.kt)("pre",null,"getInlineStyleAt(offset: number): DraftInlineStyle"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#getentityat"},(0,l.kt)("pre",null,"getEntityAt(offset: number): ?string"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#getdata"},(0,l.kt)("pre",null,"getData(): Map<any, any>"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#findstyleranges"},(0,l.kt)("pre",null,"findStyleRanges(filterFn: Function, callback: Function): void"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#findentityranges"},(0,l.kt)("pre",null,"findEntityRanges(filterFn: Function, callback: Function): void")))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u5c5e\u6027")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f"),(0,l.kt)("p",{parentName:"blockquote"},"\u5c06",(0,l.kt)("a",{parentName:"p",href:"http://facebook.github.io/immutable-js/docs/#/Map"},"Immutable Map API"),"\u7528\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"ContentBlock"),"\u6784\u9020\u51fd\u6570\u6216\u8bbe\u7f6e\u5c5e\u6027")),(0,l.kt)("ul",{class:"apiIndex"},(0,l.kt)("li",null,(0,l.kt)("a",{href:"#key"},(0,l.kt)("pre",null,"key: string"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#type"},(0,l.kt)("pre",null,"type: DraftBlockType"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#text"},(0,l.kt)("pre",null,"text: string"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#characterlist"},(0,l.kt)("pre",null,"characterList: List<CharacterMetadata>"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#depth"},(0,l.kt)("pre",null,"depth: number"))),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#data"},(0,l.kt)("pre",null,"data: Map<any, any>")))),(0,l.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,l.kt)("h3",{id:"getkey"},(0,l.kt)("inlineCode",{parentName:"h3"},"getKey()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getKey(): string\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u6b64",(0,l.kt)("inlineCode",{parentName:"p"},"ContentBlock"),"\u7684\u5b57\u7b26\u4e32\u952e\u3002\nBlock keys(\u5757\u7684\u952e)\u662f\u5b57\u6bcd\u6570\u5b57\u5b57\u7b26\u4e32\u3002\n\u5efa\u8bae\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"generateRandomKey"),"\u751f\u6210\u5757\u5bc6\u94a5\u3002"),(0,l.kt)("h3",{id:"gettype"},(0,l.kt)("inlineCode",{parentName:"h3"},"getType()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getType(): DraftBlockType\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u6b64",(0,l.kt)("inlineCode",{parentName:"p"},"ContentBlock"),"\u7684\u7c7b\u578b\u3002\n\u7c7b\u578b\u503c\u5728\u5f88\u5927\u7a0b\u5ea6\u4e0a\u7c7b\u4f3c\u4e8e\u5757\u7ea7HTML\u5143\u7d20\u3002"),(0,l.kt)("h3",{id:"gettext"},(0,l.kt)("inlineCode",{parentName:"h3"},"getText()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getText(): string\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u6b64",(0,l.kt)("inlineCode",{parentName:"p"},"ContentBlock"),"\u7684\u7eaf\u6587\u672c\u3002\n\u6b64\u503c\u4e0d\u5305\u542b\u4efb\u4f55\u6837\u5f0f\uff0c\u88c5\u9970\u6216HTML\u4fe1\u606f\u3002"),(0,l.kt)("h3",{id:"getcharacterlist"},(0,l.kt)("inlineCode",{parentName:"h3"},"getCharacterList()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getCharacterList(): List<CharacterMetadata>\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"CharacterMetadata"),"\u5bf9\u8c61\u7684immutable ",(0,l.kt)("inlineCode",{parentName:"p"},"List"),"(\u4e0d\u53ef\u53d8\u5217\u8868)\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"ContentBlock"),"\u4e2d\u7684\u6bcf\u4e2a\u5b57\u7b26\u3002\n\uff08\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/docs/api-reference-character-metadata"},"CharacterMetadata"),"\u3002\uff09"),(0,l.kt)("p",null,"\u8be5\u5217\u8868\u5305\u542b\u8be5\u5757\u7684\u6240\u6709\u6837\u5f0f\u548c\u5b9e\u4f53\u4fe1\u606f\u3002"),(0,l.kt)("h3",{id:"getlength"},(0,l.kt)("inlineCode",{parentName:"h3"},"getLength()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getLength(): number\n")),(0,l.kt)("p",null,"\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"ContentBlock"),"\u7684\u7eaf\u6587\u672c\u957f\u5ea6\u3002"),(0,l.kt)("p",null,"\u8be5\u503c\u4f7f\u7528\u6807\u51c6\u7684JavaScript ",(0,l.kt)("inlineCode",{parentName:"p"},"length"),"\u5c5e\u6027\u4f5c\u4e3a\u5b57\u7b26\u4e32\uff0c\u56e0\u6b64\u4e0d\u652f\u6301Unicode-\u4ee3\u7406\u5bf9\u5c06\u88ab\u89c6\u4e3a\u4e24\u4e2a\u5b57\u7b26\u3002"),(0,l.kt)("h3",{id:"getdepth"},(0,l.kt)("inlineCode",{parentName:"h3"},"getDepth()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getDepth(): number\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u6b64\u5757\u7684depth value(\u6df1\u5ea6\u503c)\uff08\u5982\u679c\u6709\uff09\u3002\n\u5f53\u524d\u4ec5\u7528\u4e8e\u5217\u8868\u9879\u3002"),(0,l.kt)("h3",{id:"getinlinestyleat"},(0,l.kt)("inlineCode",{parentName:"h3"},"getInlineStyleAt()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getInlineStyleAt(offset: number): DraftInlineStyle\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u6b64",(0,l.kt)("inlineCode",{parentName:"p"},"ContentBlock"),"\u4e2d\u7ed9\u5b9a\u504f\u79fb\u91cf\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"DraftInlineStyle"),"\u503c\uff08\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"OrderedSet <string>"),"\uff09\u3002"),(0,l.kt)("h3",{id:"getentityat"},(0,l.kt)("inlineCode",{parentName:"h3"},"getEntityAt()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getEntityAt(offset: number): ?string\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u6b64",(0,l.kt)("inlineCode",{parentName:"p"},"ContentBlock"),"\u4e2d\u7ed9\u5b9a\u504f\u79fb\u91cf\u7684\u5b9e\u4f53\u952e\u503c\uff08\u5982\u679c\u6ca1\u6709\uff0c\u5219\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"\uff09"),(0,l.kt)("h3",{id:"getdata"},(0,l.kt)("inlineCode",{parentName:"h3"},"getData()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getData(): Map<any, any>\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u5757\u7ea7\u5143\u6570\u636e\u3002"),(0,l.kt)("h3",{id:"findstyleranges"},(0,l.kt)("inlineCode",{parentName:"h3"},"findStyleRanges()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"findStyleRanges(\n  filterFn: (value: CharacterMetadata) => boolean,\n  callback: (start: number, end: number) => void\n): void\n")),(0,l.kt)("p",null,"\u4e3a\u8be5",(0,l.kt)("inlineCode",{parentName:"p"},"ContentBlock"),"\u4e2d\u7684\u6bcf\u4e2a\u8fde\u7eed\u6837\u5f0f\u8303\u56f4\u6267\u884c\u4e00\u4e2a\u56de\u8c03\u3002"),(0,l.kt)("h3",{id:"findentityranges"},(0,l.kt)("inlineCode",{parentName:"h3"},"findEntityRanges()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"findEntityRanges(\n  filterFn: (value: CharacterMetadata) => boolean,\n  callback: (start: number, end: number) => void\n): void\n")),(0,l.kt)("p",null,"\u4e3a\u8be5",(0,l.kt)("inlineCode",{parentName:"p"},"ContentBlock"),"\u4e2d\u6bcf\u4e2a\u8fde\u7eed\u8303\u56f4\u7684\u5b9e\u4f53\u6267\u884c\u4e00\u4e2a\u56de\u8c03\u3002"),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f"),(0,l.kt)("p",{parentName:"blockquote"},"\u5c06",(0,l.kt)("a",{parentName:"p",href:"http://facebook.github.io/immutable-js/docs/#/Map"},"Immutable Map API"),"\u7528\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"ContentBlock"),"\u6784\u9020\u51fd\u6570\u6216\u8bbe\u7f6e\u5c5e\u6027\u3002")),(0,l.kt)("h3",{id:"key"},(0,l.kt)("inlineCode",{parentName:"h3"},"key")),(0,l.kt)("p",null,"\u67e5\u770b",(0,l.kt)("inlineCode",{parentName:"p"},"getKey()"),"."),(0,l.kt)("h3",{id:"text"},(0,l.kt)("inlineCode",{parentName:"h3"},"text")),(0,l.kt)("p",null,"\u67e5\u770b",(0,l.kt)("inlineCode",{parentName:"p"},"getText()"),"."),(0,l.kt)("h3",{id:"type"},(0,l.kt)("inlineCode",{parentName:"h3"},"type")),(0,l.kt)("p",null,"\u67e5\u770b",(0,l.kt)("inlineCode",{parentName:"p"},"getType()"),"."),(0,l.kt)("h3",{id:"characterlist"},(0,l.kt)("inlineCode",{parentName:"h3"},"characterList")),(0,l.kt)("p",null,"\u67e5\u770b",(0,l.kt)("inlineCode",{parentName:"p"},"getCharacterList()"),"."),(0,l.kt)("h3",{id:"depth"},(0,l.kt)("inlineCode",{parentName:"h3"},"depth")),(0,l.kt)("p",null,"\u67e5\u770b",(0,l.kt)("inlineCode",{parentName:"p"},"getDepth()"),"."),(0,l.kt)("h3",{id:"data"},(0,l.kt)("inlineCode",{parentName:"h3"},"data")),(0,l.kt)("p",null,"\u67e5\u770b",(0,l.kt)("inlineCode",{parentName:"p"},"getData()"),"."))}d.isMDXComponent=!0}}]);