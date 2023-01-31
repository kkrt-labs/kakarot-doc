"use strict";(self.webpackChunkkakarot=self.webpackChunkkakarot||[]).push([[59],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),o=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=o(r),k=a,m=p["".concat(c,".").concat(k)]||p[k]||h[k]||l;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=k;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var o=2;o<l;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},1473:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var n=r(7462),a=(r(7294),r(3905));const l={},i="Library",s={unversionedId:"kakarot/accounts/registry/blockhash/library",id:"kakarot/accounts/registry/blockhash/library",title:"Library",description:"Storage",source:"@site/docs/kakarot/accounts/registry/blockhash/library.md",sourceDirName:"kakarot/accounts/registry/blockhash",slug:"/kakarot/accounts/registry/blockhash/library",permalink:"/kinto-un/docs/kakarot/accounts/registry/blockhash/library",draft:!1,editUrl:"https://github.com/sayajin-labs/kakarot/docs/kakarot/accounts/registry/blockhash/library.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Blockhash registry",permalink:"/kinto-un/docs/kakarot/accounts/registry/blockhash/blockhash_registry"},next:{title:"Constants",permalink:"/kinto-un/docs/kakarot/constants"}},c={},o=[{value:"Storage",id:"storage",level:2},{value:"<code>blockhash_</code>",id:"blockhash_",level:3},{value:"Implicit arguments",id:"implicit-arguments",level:4},{value:"Explicit arguments",id:"explicit-arguments",level:4},{value:"Returns",id:"returns",level:4},{value:"Internal",id:"internal",level:2},{value:"<code>constructor</code>",id:"constructor",level:3},{value:"Implicit arguments",id:"implicit-arguments-1",level:4},{value:"Explicit arguments",id:"explicit-arguments-1",level:4},{value:"<code>transfer_ownership</code>",id:"transfer_ownership",level:3},{value:"Implicit arguments",id:"implicit-arguments-2",level:4},{value:"Explicit arguments",id:"explicit-arguments-2",level:4},{value:"<code>set_blockhashes</code>",id:"set_blockhashes",level:3},{value:"Implicit arguments",id:"implicit-arguments-3",level:4},{value:"Explicit arguments",id:"explicit-arguments-3",level:4},{value:"<code>get_blockhash</code>",id:"get_blockhash",level:3},{value:"Implicit arguments",id:"implicit-arguments-4",level:4},{value:"Explicit arguments",id:"explicit-arguments-4",level:4},{value:"Returns",id:"returns-1",level:4}],u={toc:o};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"library"},"Library"),(0,a.kt)("h2",{id:"storage"},"Storage"),(0,a.kt)("h3",{id:"blockhash_"},(0,a.kt)("inlineCode",{parentName:"h3"},"blockhash_")),(0,a.kt)("h4",{id:"implicit-arguments"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"")),(0,a.kt)("h4",{id:"explicit-arguments"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"block_number (Uint256)  \n")),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"blockhash (felt)  \n")),(0,a.kt)("h2",{id:"internal"},"Internal"),(0,a.kt)("h3",{id:"constructor"},(0,a.kt)("inlineCode",{parentName:"h3"},"constructor")),(0,a.kt)("p",null,"This function is used to initialize the registry."),(0,a.kt)("h4",{id:"implicit-arguments-1"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-1"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"kakarot_address (felt): : The address of the Kakarot smart contract.  \n")),(0,a.kt)("h3",{id:"transfer_ownership"},(0,a.kt)("inlineCode",{parentName:"h3"},"transfer_ownership")),(0,a.kt)("p",null,"Transfer ownership of the registry to a new starknet address"),(0,a.kt)("h4",{id:"implicit-arguments-2"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-2"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"new_owner (felt): The new owner of the blockhash registry  \n")),(0,a.kt)("h3",{id:"set_blockhashes"},(0,a.kt)("inlineCode",{parentName:"h3"},"set_blockhashes")),(0,a.kt)("p",null,"Update or create an entry in the registry."),(0,a.kt)("h4",{id:"implicit-arguments-3"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-3"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"block_number_len (felt): : the length of block numbers  \nblock_number (Uint256*): : the block numbers  \nblock_hash_len (felt): : the length of block hashes  \nblock_hash (felt*): : the block hashes  \n")),(0,a.kt)("h3",{id:"get_blockhash"},(0,a.kt)("inlineCode",{parentName:"h3"},"get_blockhash")),(0,a.kt)("p",null,"Get the blockhash of a certain block number."),(0,a.kt)("h4",{id:"implicit-arguments-4"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-4"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"block_number (Uint256): : the block number  \n")),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"blockhash (felt)  \n")))}p.isMDXComponent=!0}}]);