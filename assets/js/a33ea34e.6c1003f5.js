"use strict";(self.webpackChunkdraftjs_cn=self.webpackChunkdraftjs_cn||[]).push([[945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={id:"quickstart-api-basics",title:"API\u57fa\u7840"},o=void 0,l={unversionedId:"quickstart-api-basics",id:"quickstart-api-basics",title:"API\u57fa\u7840",description:"\u672c\u6587\u6863\u6982\u8ff0\u4e86Draft API \u7684\u57fa\u7840\u3002 \u4e5f\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\u5de5\u4f5c\u793a\u4f8b\u3002",source:"@site/docs/QuickStart-API-Basics.md",sourceDirName:".",slug:"/quickstart-api-basics",permalink:"/draftjs-zh-cn/docs/quickstart-api-basics",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/QuickStart-API-Basics.md",tags:[],version:"current",frontMatter:{id:"quickstart-api-basics",title:"API\u57fa\u7840"},sidebar:"docs",previous:{title:"\u603b\u89c8",permalink:"/draftjs-zh-cn/docs/getting-started"},next:{title:"\u4e30\u5bcc\u6837\u5f0f",permalink:"/draftjs-zh-cn/docs/quickstart-rich-styling"}},p={},s=[{value:"\u53d7\u63a7\u8f93\u5165",id:"\u53d7\u63a7\u8f93\u5165",level:2},{value:"\u63a7\u5236\u5bcc\u6587\u672c",id:"\u63a7\u5236\u5bcc\u6587\u672c",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u6863\u6982\u8ff0\u4e86Draft API \u7684\u57fa\u7840\u3002 \u4e5f\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/plaintext"},"\u5de5\u4f5c\u793a\u4f8b"),"\u3002"),(0,a.kt)("h2",{id:"\u53d7\u63a7\u8f93\u5165"},"\u53d7\u63a7\u8f93\u5165"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Editor")," React\u7ec4\u4ef6\u6784\u5efa\u4e3a\u53d7\u63a7\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"ContentEditable"),"\u7ec4\u4ef6\uff0c\u76ee\u7684\u662f\u63d0\u4f9b\u4ee5\u719f\u6089\u7684React\u53d7\u63a7\u8f93\u5165API\u4e3a\u6a21\u578b\u7684\u9876\u7ea7API\u3002"),(0,a.kt)("p",null,"\u4f5c\u4e3a\u7b80\u77ed\u7684\u56de\u987e\uff0c\u53d7\u63a7\u8f93\u5165\u6d89\u53ca\u4e24\u4e2a\u5173\u952e\u90e8\u5206\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4ee3\u8868\u8f93\u5165\u72b6\u6001\u7684\u503c"),(0,a.kt)("li",{parentName:"ol"},"\u4e00\u4e2aonChange prop\u51fd\u6570\uff0c\u7528\u4e8e\u63a5\u6536\u8f93\u5165\u7684\u66f4\u65b0")),(0,a.kt)("p",null,"\u8fd9\u79cd\u65b9\u6cd5\u5141\u8bb8\u7ec4\u6210\u8f93\u5165\u7684\u7ec4\u4ef6\u5bf9\u8f93\u5165\u7684\u72b6\u6001\u8fdb\u884c\u4e25\u683c\u63a7\u5236\uff0c\u540c\u65f6\u4ecd\u5141\u8bb8\u5bf9DOM\u8fdb\u884c\u66f4\u65b0\u4ee5\u63d0\u4f9b\u6709\u5173\u7528\u6237\u7f16\u5199\u7684\u6587\u672c\u7684\u4fe1\u606f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class MyInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {value: ''};\n    this.onChange = evt => this.setState({value: evt.target.value});\n  }\n  render() {\n    return <input value={this.state.value} onChange={this.onChange} />;\n  }\n}\n")),(0,a.kt)("p",null,"\u9876\u5c42\u7ec4\u4ef6\u53ef\u4ee5\u901a\u8fc7\u6b64",(0,a.kt)("inlineCode",{parentName:"p"},"value"),"\u72b6\u6001\u5c5e\u6027\u7ef4\u6301\u5bf9\u8f93\u5165\u72b6\u6001\u7684\u63a7\u5236 \u3002"),(0,a.kt)("h2",{id:"\u63a7\u5236\u5bcc\u6587\u672c"},"\u63a7\u5236\u5bcc\u6587\u672c"),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u5728React RTF\u573a\u666f\u4e2d\uff0c\u5b58\u5728\u4e24\u4e2a\u660e\u663e\u7684\u95ee\u9898\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7eaf\u6587\u672c\u5b57\u7b26\u4e32\u4e0d\u8db3\u4ee5\u8868\u793a\u5bcc\u7f16\u8f91\u5668\u7684\u590d\u6742\u72b6\u6001\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6ca1\u6709\u8fd9\u6837\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"onChange"),"\u4e8b\u4ef6\u53ef\u7528\u4e8e",(0,a.kt)("inlineCode",{parentName:"li"},"ContentEditable"),"\u5143\u7d20 ")),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u72b6\u6001\u8868\u793a\u4e3a\u5355\u4e2a\u4e0d\u53ef\u53d8\u7684",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference-editor-state"},"EditorState"),"\u5bf9\u8c61\uff0c\u5e76\u4e14",(0,a.kt)("inlineCode",{parentName:"p"},"onChange"),"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"Editor"),"\u6838\u5fc3\u5185\u5b9e\u73b0\uff0c\u4ee5\u5c06\u8be5\u72b6\u6001\u503c\u63d0\u4f9b\u7ed9\u9876\u5c42\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"EditorState"),"\u5bf9\u8c61\u662f\u7f16\u8f91\u5668\u72b6\u6001\u7684\u5b8c\u6574\u5feb\u7167\uff0c\u5305\u62ec\u5185\u5bb9\uff0c\u5149\u6807\u548c\u64a4\u6d88/\u91cd\u505a\u5386\u53f2\u3002 \u7f16\u8f91\u5668\u4e2d\u5bf9\u5185\u5bb9\u548c\u9009\u62e9\u7684\u6240\u6709\u66f4\u6539\u5c06\u521b\u5efa\u65b0\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"EditorState"),"\u5bf9\u8c61\u3002 \u6ce8\u610f\uff0c\u7531\u4e8e\u8de8\u4e0d\u53ef\u53d8\u5bf9\u8c61\u7684\u6570\u636e\u6301\u4e45\u6027\uff0c\u8fd9\u4ecd\u7136\u6709\u6548\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {Editor, EditorState} from 'draft-js';\n\nclass MyEditor extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {editorState: EditorState.createEmpty()};\n    this.onChange = editorState => this.setState({editorState});\n  }\n\n  render() {\n    return (\n      <Editor editorState={this.state.editorState} onChange={this.onChange} />\n    );\n  }\n}\n")),(0,a.kt)("p",null,"\u5bf9\u4e8e\u7f16\u8f91\u5668DOM\u4e2d\u53d1\u751f\u7684\u4efb\u4f55\u7f16\u8f91\u6216\u9009\u62e9\u66f4\u6539\uff0c\u60a8\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"onChange"),"\u5904\u7406\u7a0b\u5e8f\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"EditorState"),"\u6839\u636e\u8fd9\u4e9b\u66f4\u6539\u5bf9\u6700\u65b0\u5bf9\u8c61\u6267\u884c\u3002"))}u.isMDXComponent=!0}}]);