"use strict";(self.webpackChunkkakarot=self.webpackChunkkakarot||[]).push([[766],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,k=u["".concat(c,".").concat(m)]||u[m]||p[m]||l;return r?a.createElement(k,i(i({ref:t},d),{},{components:r})):a.createElement(k,i({ref:t},d))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8754:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const l={},i="Library",o={unversionedId:"Kakarot/Accounts/Eoa/library",id:"Kakarot/Accounts/Eoa/library",title:"Library",description:"Storage",source:"@site/docs/Kakarot/Accounts/Eoa/library.md",sourceDirName:"Kakarot/Accounts/Eoa",slug:"/Kakarot/Accounts/Eoa/library",permalink:"/docs/Kakarot/Accounts/Eoa/library",draft:!1,editUrl:"https://github.com/sayajin-labs/kakarot/docs/Kakarot/Accounts/Eoa/library.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Externally owned account",permalink:"/docs/Kakarot/Accounts/Eoa/externally_owned_account"},next:{title:"Proxy",permalink:"/docs/Kakarot/Accounts/Proxy/"}},c={},s=[{value:"Storage",id:"storage",level:2},{value:"<code>evm_address</code>",id:"evm_address",level:3},{value:"Returns",id:"returns",level:4},{value:"<code>kakarot_address</code>",id:"kakarot_address",level:3},{value:"Returns",id:"returns-1",level:4},{value:"<code>is_initialized_</code>",id:"is_initialized_",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Internal",id:"internal",level:2},{value:"<code>initialize</code>",id:"initialize",level:3},{value:"Implicit arguments",id:"implicit-arguments",level:4},{value:"Explicit arguments",id:"explicit-arguments",level:4},{value:"<code>get_evm_address</code>",id:"get_evm_address",level:3},{value:"Implicit arguments",id:"implicit-arguments-1",level:4},{value:"Returns",id:"returns-3",level:4},{value:"<code>validate</code>",id:"validate",level:3},{value:"Implicit arguments",id:"implicit-arguments-2",level:4},{value:"Explicit arguments",id:"explicit-arguments-1",level:4},{value:"<code>execute</code>",id:"execute",level:3},{value:"Implicit arguments",id:"implicit-arguments-3",level:4},{value:"Explicit arguments",id:"explicit-arguments-2",level:4},{value:"Returns",id:"returns-4",level:4}],d={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"library"},"Library"),(0,n.kt)("h2",{id:"storage"},"Storage"),(0,n.kt)("h3",{id:"evm_address"},(0,n.kt)("inlineCode",{parentName:"h3"},"evm_address")),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"evm_address (felt)  \n")),(0,n.kt)("h3",{id:"kakarot_address"},(0,n.kt)("inlineCode",{parentName:"h3"},"kakarot_address")),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kakarot_address (felt)  \n")),(0,n.kt)("h3",{id:"is_initialized_"},(0,n.kt)("inlineCode",{parentName:"h3"},"is_initialized_")),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"res (felt)  \n")),(0,n.kt)("h2",{id:"internal"},"Internal"),(0,n.kt)("h3",{id:"initialize"},(0,n.kt)("inlineCode",{parentName:"h3"},"initialize")),(0,n.kt)("p",null,"This function is used to initialize the externally owned account."),(0,n.kt)("h4",{id:"implicit-arguments"},"Implicit arguments"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \nbitwise_ptr (BitwiseBuiltin*)  \n")),(0,n.kt)("h4",{id:"explicit-arguments"},"Explicit arguments"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"_kakarot_address (felt): Address of kakarot to store  \n_evm_address: Address of the EVM to store  \n")),(0,n.kt)("h3",{id:"get_evm_address"},(0,n.kt)("inlineCode",{parentName:"h3"},"get_evm_address")),(0,n.kt)("p",null,"Read stored EVM address."),(0,n.kt)("h4",{id:"implicit-arguments-1"},"Implicit arguments"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"evm_address (felt): The stored address.  \n")),(0,n.kt)("h3",{id:"validate"},(0,n.kt)("inlineCode",{parentName:"h3"},"validate")),(0,n.kt)("p",null,"Check if tx is signed and valid for each call."),(0,n.kt)("h4",{id:"implicit-arguments-2"},"Implicit arguments"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nbitwise_ptr (BitwiseBuiltin*)  \nrange_check_ptr  \n")),(0,n.kt)("h4",{id:"explicit-arguments-1"},"Explicit arguments"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"call_array_len (felt): The length of the call array.  \ncall_array (CallArray*): The call array.  \ncalldata_len (felt): The length of the calldata.  \ncalldata (felt*): The calldata.  \n")),(0,n.kt)("h3",{id:"execute"},(0,n.kt)("inlineCode",{parentName:"h3"},"execute")),(0,n.kt)("p",null,"Executes the tx for each call."),(0,n.kt)("h4",{id:"implicit-arguments-3"},"Implicit arguments"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nbitwise_ptr (BitwiseBuiltin*)  \nrange_check_ptr  \n")),(0,n.kt)("h4",{id:"explicit-arguments-2"},"Explicit arguments"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"call_array_len (felt): The length of the call_array  \ncall_array (CallArray*): An array containing all the calls of the transaction see: https://docs.openzeppelin.com/contracts-cairo/0.6.0/accounts#call_and_accountcallarray_format  \ncalldata_len (felt): The length of the Calldata array  \ncalldata (felt*): The calldata  \nresponse (felt*): The returned bytes array see /kakaort/library.cairo  \n")),(0,n.kt)("h4",{id:"returns-4"},"Returns"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"response_len (felt): The length of the returned bytes  \n")))}u.isMDXComponent=!0}}]);