"use strict";(self.webpackChunkdraftjs_cn=self.webpackChunkdraftjs_cn||[]).push([[933],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,f=m["".concat(l,".").concat(u)]||m[u]||s[u]||i;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4563:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={id:"advanced-topics-key-bindings",title:"\u952e\u7ed1\u5b9a"},o=void 0,d={unversionedId:"advanced-topics-key-bindings",id:"advanced-topics-key-bindings",title:"\u952e\u7ed1\u5b9a",description:"Editor\u7ec4\u4ef6\u53ef\u901a\u8fc7keyBindingFn\u5c5e\u6027\u7075\u6d3b\u5730\u4e3a\u60a8\u7684\u7f16\u8f91\u5668\u5b9a\u4e49\u81ea\u5b9a\u4e49\u952e\u7ed1\u5b9a\u3002",source:"@site/docs/Advanced-Topics-Key-Bindings.md",sourceDirName:".",slug:"/advanced-topics-key-bindings",permalink:"/docs/advanced-topics-key-bindings",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Advanced-Topics-Key-Bindings.md",tags:[],version:"current",frontMatter:{id:"advanced-topics-key-bindings",title:"\u952e\u7ed1\u5b9a"},sidebar:"docs",previous:{title:"\u88c5\u9970\u5668",permalink:"/docs/advanced-topics-decorators"},next:{title:"\u7ba1\u7406\u7126\u70b9",permalink:"/docs/advanced-topics-managing-focus"}},l={},p=[{value:"Defaults",id:"defaults",level:2},{value:"\u5b9a\u5236\u5316",id:"\u5b9a\u5236\u5316",level:2},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:2}],c={toc:p};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Editor"),"\u7ec4\u4ef6\u53ef\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"keyBindingFn"),"\u5c5e\u6027\u7075\u6d3b\u5730\u4e3a\u60a8\u7684\u7f16\u8f91\u5668\u5b9a\u4e49\u81ea\u5b9a\u4e49\u952e\u7ed1\u5b9a\u3002\n\u8fd9\u4f7f\u60a8\u53ef\u4ee5\u5c06\u5173\u952e\u547d\u4ee4\u4e0e\u7f16\u8f91\u5668\u7ec4\u4ef6\u4e2d\u7684\u884c\u4e3a\u8fdb\u884c\u5339\u914d\u3002"),(0,a.kt)("h2",{id:"defaults"},"Defaults"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u7684\u952e\u7ed1\u5b9a\u51fd\u6570\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"getDefaultKeyBinding"),"\u3002"),(0,a.kt)("p",null,"\u7531\u4e8eDraft\u6846\u67b6\u4fdd\u6301\u5bf9DOM\u6e32\u67d3\u548c\u884c\u4e3a\u7684\u4e25\u683c\u63a7\u5236\uff0c\u56e0\u6b64\u5fc5\u987b\u6355\u83b7\u57fa\u672c\u7684\u7f16\u8f91\u547d\u4ee4\u5e76\u901a\u8fc7\u952e\u7ed1\u5b9a\u7cfb\u7edf\u8fdb\u884c\u8def\u7531\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getDefaultKeyBinding"),"\u5c06\u5df2\u77e5\u7684OS\u7ea7\u7f16\u8f91\u5668\u547d\u4ee4\u6620\u5c04\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"DraftEditorCommand"),"\u5b57\u7b26\u4e32\uff0c\u7136\u540e\u8fd9\u4e9b\u5b57\u7b26\u4e32\u4e0e\u7ec4\u4ef6\u5904\u7406\u7a0b\u5e8f\u4e2d\u7684\u884c\u4e3a\u76f8\u5bf9\u5e94\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl + Z\uff08Win\uff09"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"Cmd + Z\uff08OSX\uff09"),"\u6620\u5c04\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"'undo'"),"\u547d\u4ee4\uff0c\u8be5\u547d\u4ee4\u968f\u540e\u8def\u7531\u6211\u4eec\u7684\u5904\u7406\u7a0b\u5e8f\u4ee5\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"EditorState.undo()"),"\u3002"),(0,a.kt)("h2",{id:"\u5b9a\u5236\u5316"},"\u5b9a\u5236\u5316"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u63d0\u4f9b\u81ea\u5df1\u7684\u952e\u7ed1\u5b9a\u51fd\u6570\u4ee5\u63d0\u4f9b\u81ea\u5b9a\u4e49\u547d\u4ee4\u5b57\u7b26\u4e32\u3002"),(0,a.kt)("p",null,"\u5efa\u8bae\u60a8\u5c06\u51fd\u6570\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"getDefaultKeyBinding"),"\u4f5c\u4e3a\u66ff\u4ee3\u60c5\u51b5\uff0c\u4ee5\u4fbf\u60a8\u7684\u7f16\u8f91\u5668\u53ef\u4ee5\u4ece\u9ed8\u8ba4\u547d\u4ee4\u4e2d\u53d7\u76ca\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528\u81ea\u5b9a\u4e49\u547d\u4ee4\u5b57\u7b26\u4e32\uff0c\u7136\u540e\u53ef\u4ee5\u5b9e\u73b0",(0,a.kt)("inlineCode",{parentName:"p"},"handleKeyCommand")," prop\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u5141\u8bb8\u60a8\u5c06\u8be5\u547d\u4ee4\u5b57\u7b26\u4e32\u6620\u5c04\u5230\u6240\u9700\u7684\u884c\u4e3a\u3002\n\u5982\u679c",(0,a.kt)("inlineCode",{parentName:"p"},"handleKeyCommand"),"\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"\u201chandled\u201d"),"\uff0c\u5219\u8be5\u547d\u4ee4\u88ab\u89c6\u4e3a\u5df2\u5904\u7406\u3002\n\u5982\u679c\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"'not-handled'"),"\uff0c\u8be5\u547d\u4ee4\u88ab\u89c6\u4e3a\u672a\u5904\u7406\u3002"),(0,a.kt)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,a.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u6709\u4e00\u4e2a\u7f16\u8f91\u5668\uff0c\u8be5\u7f16\u8f91\u5668\u5e94\u5177\u6709\u201c\u4fdd\u5b58\u201d\u673a\u5236\uff0c\u4ee5\u5c06\u60a8\u7684\u5185\u5bb9\u4f5c\u4e3adraft\u526f\u672c\u5b9a\u671f\u5199\u5165\u670d\u52a1\u5668\uff0c\u7c7b\u4f3c\u4e8e",(0,a.kt)("a",{parentName:"p",href:"https://medium.com"},"medium"),"\u7684\u7f16\u8f91\u5668\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u8ba9\u6211\u4eec\u5b9a\u4e49\u952e\u7ed1\u5b9a\u51fd\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {getDefaultKeyBinding, KeyBindingUtil} from 'draft-js';\nconst {hasCommandModifier} = KeyBindingUtil;\n\nfunction myKeyBindingFn(e: SyntheticKeyboardEvent): string {\n  if (e.keyCode === 83 /* `S` key */ && hasCommandModifier(e)) {\n    return 'myeditor-save';\n  }\n  return getDefaultKeyBinding(e);\n}\n")),(0,a.kt)("p",null,"\u6211\u4eec\u7684\u51fd\u6570\u6536\u5230\u4e00\u4e2a\u952e\u4e8b\u4ef6\uff0c\u7136\u540e\u68c0\u67e5\u5b83\u662f\u5426\u7b26\u5408\u6211\u4eec\u7684\u6761\u4ef6\uff1a\u5b83\u5fc5\u987b\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"S"),"\u952e\uff0c\u5e76\u4e14\u5fc5\u987b\u5177\u6709\u547d\u4ee4\u4fee\u9970\u7b26\uff0c\u5373OSX\u7684\u547d\u4ee4\u952e\uff0c\u5426\u5219\u4e3a\u63a7\u5236\u952e\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u547d\u4ee4\u5339\u914d\uff0c\u5219\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u547d\u540d\u8be5\u547d\u4ee4\u3002\n\u5426\u5219\uff0c\u8bf7\u4f7f\u7528\u9ed8\u8ba4\u7684\u952e\u7ed1\u5b9a\u3002"),(0,a.kt)("p",null,"\u7136\u540e\uff0c\u5728\u6211\u4eec\u7684\u7f16\u8f91\u5668\u7ec4\u4ef6\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"handleKeyCommand"),"\u5c5e\u6027\u4f7f\u7528\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {Editor} from 'draft-js';\nclass MyEditor extends React.Component {\n\n  constructor(props) {\n    super(props);\n    this.handleKeyCommand = this.handleKeyCommand.bind(this);\n  }\n  // ...\n\n  handleKeyCommand(command: string): DraftHandleValue {\n    if (command === 'myeditor-save') {\n      // \u6267\u884c\u8bf7\u6c42\u4ee5\u4fdd\u5b58\u60a8\u7684\u5185\u5bb9\uff0c\u8bbe\u7f6e\n      //\u4e00\u4e2a\u65b0\u7684`editorState`\u7b49\u3002\n      return 'handled';\n    }\n    return 'not-handled';\n  }\n\n  render() {\n    return (\n      <Editor\n        editorState={this.state.editorState}\n        handleKeyCommand={this.handleKeyCommand}\n        keyBindingFn={myKeyBindingFn}\n        ...\n      />\n    );\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"myeditor-save"),"\u547d\u4ee4\u53ef\u7528\u4e8e\u6211\u4eec\u7684\u81ea\u5b9a\u4e49\u884c\u4e3a\uff0c\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"\u201chandled\u201d"),"\u5c06\u6307\u793a\u7f16\u8f91\u5668\u8be5\u547d\u4ee4\u5df2\u88ab\u5904\u7406\uff0c\u65e0\u9700\u8fdb\u884c\u5176\u4ed6\u5de5\u4f5c\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7\u5728\u6240\u6709\u5176\u4ed6\u60c5\u51b5\u4e0b\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"'not-handled'"),"\uff0c\u9ed8\u8ba4\u547d\u4ee4\u53ef\u4ee5\u8fdb\u5165\u9ed8\u8ba4\u5904\u7406\u7a0b\u5e8f\u884c\u4e3a\u3002"))}s.isMDXComponent=!0}}]);