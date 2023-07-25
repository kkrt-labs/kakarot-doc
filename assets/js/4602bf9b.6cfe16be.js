"use strict";(self.webpackChunkkakarot=self.webpackChunkkakarot||[]).push([[927],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7510:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const l={},o="Library",c={unversionedId:"Kakarot/Accounts/library",id:"Kakarot/Accounts/library",title:"Library",description:"Event",source:"@site/docs/Kakarot/Accounts/library.md",sourceDirName:"Kakarot/Accounts",slug:"/Kakarot/Accounts/library",permalink:"/docs/Kakarot/Accounts/library",draft:!1,editUrl:"https://github.com/sayajin-labs/kakarot/docs/Kakarot/Accounts/library.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Upgradable",permalink:"/docs/Kakarot/Accounts/Proxy/upgradable"},next:{title:"Stop and arithmetic operations",permalink:"/docs/Kakarot/Instructions/stop_and_arithmetic_operations"}},i={},s=[{value:"Event",id:"event",level:2},{value:"<code>evm_contract_deployed</code>",id:"evm_contract_deployed",level:3},{value:"Explicit arguments",id:"explicit-arguments",level:4},{value:"Storage",id:"storage",level:2},{value:"<code>nonce</code>",id:"nonce",level:3},{value:"Returns",id:"returns",level:4},{value:"Internal",id:"internal",level:2},{value:"<code>compute_starknet_address</code>",id:"compute_starknet_address",level:3},{value:"Implicit arguments",id:"implicit-arguments",level:4},{value:"Explicit arguments",id:"explicit-arguments-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"<code>create</code>",id:"create",level:3},{value:"Implicit arguments",id:"implicit-arguments-1",level:4},{value:"Explicit arguments",id:"explicit-arguments-2",level:4},{value:"Returns",id:"returns-2",level:4}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"library"},"Library"),(0,a.kt)("h2",{id:"event"},"Event"),(0,a.kt)("h3",{id:"evm_contract_deployed"},(0,a.kt)("inlineCode",{parentName:"h3"},"evm_contract_deployed")),(0,a.kt)("h4",{id:"explicit-arguments"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"evm_contract_address (felt)  \nstarknet_contract_address (felt)  \n")),(0,a.kt)("h2",{id:"storage"},"Storage"),(0,a.kt)("h3",{id:"nonce"},(0,a.kt)("inlineCode",{parentName:"h3"},"nonce")),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nonce (felt)  \n")),(0,a.kt)("h2",{id:"internal"},"Internal"),(0,a.kt)("h3",{id:"compute_starknet_address"},(0,a.kt)("inlineCode",{parentName:"h3"},"compute_starknet_address")),(0,a.kt)("h4",{id:"implicit-arguments"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-1"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"evm_address (felt): The EVM address to transform to a starknet address  \n")),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"contract_address (felt): The Starknet Account Contract address (not necessarily deployed)  \n")),(0,a.kt)("h3",{id:"create"},(0,a.kt)("inlineCode",{parentName:"h3"},"create")),(0,a.kt)("p",null,"Deploy a new account proxy"),(0,a.kt)("h4",{id:"implicit-arguments-1"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-2"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"class_hash (felt): The hash of the implemented account (eoa/contract)  \nevm_address (felt): The Ethereum address which will be controlling the account  \n")),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"account_address (felt): The Starknet Account Proxy address  \n")))}u.isMDXComponent=!0}}]);