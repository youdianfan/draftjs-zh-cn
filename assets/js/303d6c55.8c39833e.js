"use strict";(self.webpackChunkdraftjs_cn=self.webpackChunkdraftjs_cn||[]).push([[979],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=i(n),u=r,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(k,p(p({ref:t},s),{},{components:n})):a.createElement(k,p({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var i=2;i<o;i++)p[i]=n[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const o={id:"advanced-topics-decorators",title:"\u88c5\u9970\u5668"},p=void 0,c={unversionedId:"advanced-topics-decorators",id:"advanced-topics-decorators",title:"\u88c5\u9970\u5668",description:"\u5185\u8054\u548c\u5757\u6837\u5f0f\u4e0d\u662f\u6211\u4eec\u53ef\u80fd\u8981\u6dfb\u52a0\u5230\u7f16\u8f91\u5668\u4e2d\u7684\u552f\u4e00\u4e00\u79cd\u4e30\u5bcc\u6837\u5f0f\u3002\u4f8b\u5982\uff0cFacebook\u8bc4\u8bba\u8f93\u5165\u63d0\u4f9b\u7528\u4e8ementions(\u63d0\u53ca)\u548chashtags(\u4e3b\u9898\u6807\u7b7e)\u7684\u84dd\u8272\u80cc\u666f\u9ad8\u4eae\u663e\u793a\u3002",source:"@site/docs/Advanced-Topics-Decorators.md",sourceDirName:".",slug:"/advanced-topics-decorators",permalink:"/docs/advanced-topics-decorators",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Advanced-Topics-Decorators.md",tags:[],version:"current",frontMatter:{id:"advanced-topics-decorators",title:"\u88c5\u9970\u5668"},sidebar:"docs",previous:{title:"v0.10 API \u8fc1\u79fb",permalink:"/docs/v0-10-api-migration"},next:{title:"\u952e\u7ed1\u5b9a",permalink:"/docs/advanced-topics-key-bindings"}},l={},i=[{value:"CompositeDecorator \u590d\u5408\u88c5\u9970\u5668",id:"compositedecorator-\u590d\u5408\u88c5\u9970\u5668",level:2},{value:"Decorator Components \u88c5\u9970\u5668\u7ec4\u4ef6",id:"decorator-components-\u88c5\u9970\u5668\u7ec4\u4ef6",level:2},{value:"Beyond CompositeDecorator \u8d85\u8d8a\u590d\u5408\u88c5\u9970\u5668",id:"beyond-compositedecorator-\u8d85\u8d8a\u590d\u5408\u88c5\u9970\u5668",level:3},{value:"Setting new decorators \u8bbe\u7f6e\u65b0\u7684\u88c5\u9970\u5668",id:"setting-new-decorators-\u8bbe\u7f6e\u65b0\u7684\u88c5\u9970\u5668",level:2}],s={toc:i};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5185\u8054\u548c\u5757\u6837\u5f0f\u4e0d\u662f\u6211\u4eec\u53ef\u80fd\u8981\u6dfb\u52a0\u5230\u7f16\u8f91\u5668\u4e2d\u7684\u552f\u4e00\u4e00\u79cd\u4e30\u5bcc\u6837\u5f0f\u3002\u4f8b\u5982\uff0cFacebook\u8bc4\u8bba\u8f93\u5165\u63d0\u4f9b\u7528\u4e8ementions(\u63d0\u53ca)\u548chashtags(\u4e3b\u9898\u6807\u7b7e)\u7684\u84dd\u8272\u80cc\u666f\u9ad8\u4eae\u663e\u793a\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u652f\u6301\u81ea\u5b9a\u4e49\u5bcc\u6587\u672c\u683c\u5f0f\u7684\u7075\u6d3b\u6027\uff0cDraft\u63d0\u4f9b\u4e86\u4e00\u4e2a\u201c\u88c5\u9970\u5668\u201d\u7cfb\u7edf\u3002\u8be5",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/tweet"},"tweet example"),"\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5b9e\u9645\u7684\u88c5\u9970\u5668\u793a\u4f8b\u3002"),(0,r.kt)("h2",{id:"compositedecorator-\u590d\u5408\u88c5\u9970\u5668"},"CompositeDecorator \u590d\u5408\u88c5\u9970\u5668"),(0,r.kt)("p",null,"\u88c5\u9970\u5668\u7684\u6982\u5ff5\u57fa\u4e8e\u626b\u63cf\u7ed9\u5b9a",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference-content-block"},"ContentBlock"),"\u7684\u5185\u5bb9\u4ee5 \u67e5\u627e\u4e0e\u5b9a\u4e49\u7684\u7b56\u7565\u5339\u914d\u7684\u6587\u672c\u8303\u56f4\uff0c\u7136\u540e\u4f7f\u7528\u6307\u5b9a\u7684React\u7ec4\u4ef6\u6e32\u67d3\u5b83\u4eec\u3002"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"CompositeDecorator"),"\u8be5\u7c7b\u6765\u5b9a\u4e49\u6240\u9700\u7684\u88c5\u9970\u5668\u884c\u4e3a\u3002\u6b64\u7c7b\u5141\u8bb8\u60a8\u63d0\u4f9b\u591a\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"DraftDecorator"),"\u5bf9\u8c61\uff0c\u5e76\u4e14\u5c06\u4f9d\u6b21\u641c\u7d22\u6bcf\u79cd\u7b56\u7565\u7684\u4e00\u6bb5\u6587\u672c\u3002"),(0,r.kt)("p",null,"\u88c5\u9970\u5668\u5b58\u50a8\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"EditorState"),"\u8bb0\u5f55\u4e2d\u3002\u5728\u521b\u5efa\u65b0",(0,r.kt)("inlineCode",{parentName:"p"},"EditorState"),"\u5bf9\u8c61\u65f6\uff0c\uff08\u4f8b\u5982\u901a\u8fc7\uff09",(0,r.kt)("inlineCode",{parentName:"p"},"EditorState.createEmpty()"),"\uff0c\u53ef\u4ee5\u9009\u62e9\u63d0\u4f9b\u88c5\u9970\u5668\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Under the hood \u5f15\u64ce\u76d6\u4e0b"),(0,r.kt)("p",{parentName:"blockquote"},"\u5728Draft\u7f16\u8f91\u5668\u4e2d\u66f4\u6539\u5185\u5bb9\u65f6\uff0c\u751f\u6210\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"EditorState"),"\u5bf9\u8c61\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"ContentState"),"\u4f7f\u7528\u5176\u88c5\u9970\u5668\u8bc4\u4f30\u65b0\u5bf9\u8c61\uff0c\u5e76\u6807\u8bc6\u8981\u88c5\u9970\u7684\u8303\u56f4\u3002\u6b64\u65f6\uff0c\u5c06\u5f62\u6210\u4e00\u4e2a\u5b8c\u6574\u7684\u5757\uff0c\u88c5\u9970\u5668\u548c\u5185\u8054\u6837\u5f0f\u6811\uff0c\u5e76\u4f5c\u4e3a\u6e32\u67d3\u8f93\u51fa\u7684\u57fa\u7840\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"\u8fd9\u6837\uff0c\u6211\u4eec\u59cb\u7ec8\u786e\u4fdd\u968f\u7740\u5185\u5bb9\u7684\u66f4\u6539\uff0c\u6e32\u67d3\u7684\u88c5\u9970\u4e0e\u6211\u4eec\u7684EditorState\u540c\u6b65\u3002")),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u5728\u201c Tweet\u201d\u7f16\u8f91\u5668\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"CompositeDecorator"),"\u641c\u7d22",(0,r.kt)("inlineCode",{parentName:"p"},"@-handle"),"\u5b57\u7b26\u4e32\u4ee5\u53cahashtag(#)\u5b57\u7b26\u4e32\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const compositeDecorator = new CompositeDecorator([\n  {\n    strategy: handleStrategy,\n    component: HandleSpan,\n  },\n  {\n    strategy: hashtagStrategy,\n    component: HashtagSpan,\n  },\n]);\n")),(0,r.kt)("p",null,"\u8be5\u590d\u5408\u88c5\u9970\u5668\u5c06\u9996\u5148\u626b\u63cf\u7ed9\u5b9a\u7684\u6587\u672c\u5757\u4ee5\u67e5\u627e@-handle\u5339\u914d\u9879\uff0c\u7136\u540e\u626b\u63cfhashtag(#)\u5339\u914d\u9879\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u6ce8\u610f\uff1a\u8fd9\u4e9b\u4e0d\u662f\u5f88\u597d\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u8bf7\u4e0d\u8981\u4f7f\u7528\u5b83\u4eec\uff01\nconst HANDLE_REGEX = /\\@[\\w]+/g;\nconst HASHTAG_REGEX = /\\#[\\w\\u0590-\\u05ff]+/g;\n\nfunction handleStrategy(contentBlock, callback, contentState) {\n  findWithRegex(HANDLE_REGEX, contentBlock, callback);\n}\n\nfunction hashtagStrategy(contentBlock, callback, contentState) {\n  findWithRegex(HASHTAG_REGEX, contentBlock, callback);\n}\n\nfunction findWithRegex(regex, contentBlock, callback) {\n  const text = contentBlock.getText();\n  let matchArr, start;\n  while ((matchArr = regex.exec(text)) !== null) {\n    start = matchArr.index;\n    callback(start, start + matchArr[0].length);\n  }\n}\n")),(0,r.kt)("p",null,"\u7b56\u7565\u51fd\u6570\u4f7f\u7528\u6587\u672c\u5339\u914d\u8303\u56f4\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"start"),"\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"end"),"\u503c\u6267\u884c\u63d0\u4f9b\u7684\u56de\u8c03\u3002"),(0,r.kt)("h2",{id:"decorator-components-\u88c5\u9970\u5668\u7ec4\u4ef6"},"Decorator Components \u88c5\u9970\u5668\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u4fee\u9970\u7684\u6587\u672c\u8303\u56f4\uff0c\u5fc5\u987b\u5b9a\u4e49\u4e00\u4e2aReact\u7ec4\u4ef6\u4ee5\u7528\u4e8e\u6e32\u67d3\u5b83\u4eec\u3002\u8fd9\u4e9b\u5f80\u5f80\u662f\u7b80\u5355\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"span"),"\u5143\u7d20\uff0c\u5e76\u5e26\u6709CSS\u7c7b\u6216\u6837\u5f0f\u3002"),(0,r.kt)("p",null,"\u5728\u6211\u4eec\u5f53\u524d\u7684\u793a\u4f8b\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"CompositeDecorator"),"\u5bf9\u8c61\u540d\u79f0",(0,r.kt)("inlineCode",{parentName:"p"},"HandleSpan"),"\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"HashtagSpan"),"\u4f5c\u4e3a\u7528\u4e8e\u88c5\u9970\u7684\u7ec4\u4ef6\u3002\u8fd9\u4e9b\u662f\u57fa\u672c\u7684\u65e0\u72b6\u6001\u7ec4\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const HandleSpan = props => {\n  return (\n    <span {...props} style={styles.handle}>\n      {props.children}\n    </span>\n  );\n};\n\nconst HashtagSpan = props => {\n  return (\n    <span {...props} style={styles.hashtag}>\n      {props.children}\n    </span>\n  );\n};\n")),(0,r.kt)("p",null,"\u88c5\u9970\u5668\u7ec4\u4ef6\u5c06\u5728props\u4e2d\u63a5\u6536\u5404\u79cd\u5143\u6570\u636e\uff0c\u5305\u62ec",(0,r.kt)("inlineCode",{parentName:"p"},"contentState"),"\u7684\u526f\u672c\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"entityKey"),"\uff08\u5982\u679c\u6709\uff09\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"blockKey"),"\u3002\n\u6709\u5173\u63d0\u4f9b\u7ed9\u88c5\u9970\u5668\u7ec4\u4ef6\u7684props\u7684\u5b8c\u6574\u5217\u8868\uff0c\u8bf7\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/draft-js/blob/master/src/model/decorators/DraftDecorator.js"},"DraftDecoratorComponentProps \u7c7b\u578b"),"\u3002"),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"props.children"),"\u88ab\u4f20\u9012\u5230\u6e32\u67d3\u8f93\u51fa\u3002\n\u8fd9\u6837\u505a\u662f\u4e3a\u4e86\u786e\u4fdd\u5728\u88c5\u9970\u8303\u56f4\u5185\u6e32\u67d3\u6587\u672c\u3002"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u5bf9\u94fe\u63a5\u4f7f\u7528\u76f8\u540c\u7684\u65b9\u6cd5\uff0c\u5982\u6211\u4eec\u7684",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/link"},"link example"),"\u6240\u793a\u3002"),(0,r.kt)("h3",{id:"beyond-compositedecorator-\u8d85\u8d8a\u590d\u5408\u88c5\u9970\u5668"},"Beyond CompositeDecorator \u8d85\u8d8a\u590d\u5408\u88c5\u9970\u5668"),(0,r.kt)("p",null,"\u63d0\u4f9b\u7ed9",(0,r.kt)("inlineCode",{parentName:"p"},"EditorState"),"\u7684\u88c5\u9970\u5668\u5bf9\u8c61\u53ea\u9700\u8981\u7b26\u5408",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/draft-js/blob/master/src/model/decorators/DraftDecoratorType.js"},"DraftDecoratorType"),"Flow\u7c7b\u578b\u5b9a\u4e49\u7684\u671f\u671b\uff0c\u8fd9\u610f\u5473\u7740\u60a8\u53ef\u4ee5\u521b\u5efa\u6240\u9700\u7684\u4efb\u4f55\u88c5\u9970\u5668\u7c7b\uff0c\u53ea\u8981\u5b83\u4eec\u4e0e\u671f\u671b\u7684\u7c7b\u578b\u5339\u914d\u5373\u53ef-\u60a8\u4e0d\u53d7CompositeDecorator\u7684\u7ea6\u675f\u3002"),(0,r.kt)("h2",{id:"setting-new-decorators-\u8bbe\u7f6e\u65b0\u7684\u88c5\u9970\u5668"},"Setting new decorators \u8bbe\u7f6e\u65b0\u7684\u88c5\u9970\u5668"),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u53ef\u4ee5\u63a5\u53d7\u7684\u662f\uff0c\u5728\u6b63\u5e38\u72b6\u6001\u4f20\u64ad\u671f\u95f4\uff0c\u901a\u8fc7\u4e0d\u53ef\u53d8\u7684\u65b9\u6cd5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"EditorState"),"\u4e0a\u52a8\u6001\u8bbe\u7f6e\u65b0\u7684\u88c5\u9970\u5668\u503c\u3002"),(0,r.kt)("p",null,"\u8fd9\u610f\u5473\u7740\u5728\u60a8\u7684\u5e94\u7528\u5de5\u4f5c\u6d41\u7a0b\u4e2d\uff0c\u5982\u679c\u60a8\u7684\u88c5\u9970\u5668\u53d8\u5f97\u65e0\u6548\u6216\u9700\u8981\u4fee\u6539\uff0c\u5219\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u88c5\u9970\u5668\u5bf9\u8c61\uff08\u6216\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"\u5220\u9664\u6240\u6709\u88c5\u9970\uff09\uff0c\u5e76\u521b\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},"EditorState.set()"),"\u4ee5\u4f7f\u7528\u65b0\u7684\u88c5\u9970\u5668\u8bbe\u7f6e\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u7531\u4e8e\u67d0\u79cd\u539f\u56e0\u6211\u4eec\u5e0c\u671b\u5728\u7528\u6237\u4e0e\u7f16\u8f91\u5668\u4ea4\u4e92\u65f6\u7981\u6b62\u521b\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},"@-handle"),"\u88c5\u9970\uff0c\u5219\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function turnOffHandleDecorations(editorState) {\n  const onlyHashtags = new CompositeDecorator([\n    {\n      strategy: hashtagStrategy,\n      component: HashtagSpan,\n    },\n  ]);\n  return EditorState.set(editorState, {decorator: onlyHashtags});\n}\n")),(0,r.kt)("p",null,"\u6b64",(0,r.kt)("inlineCode",{parentName:"p"},"editorState"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"ContentState"),"\u5c06\u4f7f\u7528\u65b0\u7684\u88c5\u9970\u5668\u91cd\u65b0\u8bc4\u4f30\uff0c\u5e76\u4e14",(0,r.kt)("inlineCode",{parentName:"p"},"@-handle"),"\u88c5\u9970\u5c06\u4e0d\u518d\u51fa\u73b0\u5728\u4e0b\u4e00\u4e2a\u6e32\u67d3\u901a\u9053\u4e2d\u3002"),(0,r.kt)("p",null,"\u540c\u6837\uff0c\u7531\u4e8e\u8de8\u4e0d\u53ef\u53d8\u5bf9\u8c61\u7684\u6570\u636e\u6301\u4e45\u6027\uff0c\u8fd9\u4ecd\u7136\u4fdd\u6301\u5185\u5b58\u6548\u7387\u3002"))}d.isMDXComponent=!0}}]);