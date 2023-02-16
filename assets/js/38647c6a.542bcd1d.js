"use strict";(self.webpackChunkkakarot=self.webpackChunkkakarot||[]).push([[92],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,k=u["".concat(o,".").concat(m)]||u[m]||p[m]||l;return n?r.createElement(k,a(a({ref:t},s),{},{components:n})):r.createElement(k,a({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var d=2;d<l;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(7462),i=(n(7294),n(3905));const l={},a="Library",c={unversionedId:"Kakarot/Accounts/Contract/library",id:"Kakarot/Accounts/Contract/library",title:"Library",description:"Storage",source:"@site/docs/Kakarot/Accounts/Contract/library.md",sourceDirName:"Kakarot/Accounts/Contract",slug:"/Kakarot/Accounts/Contract/library",permalink:"/kakarot-doc/docs/Kakarot/Accounts/Contract/library",draft:!1,editUrl:"https://github.com/sayajin-labs/kakarot/docs/Kakarot/Accounts/Contract/library.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Contract account",permalink:"/kakarot-doc/docs/Kakarot/Accounts/Contract/contract_account"},next:{title:"Externally owned account",permalink:"/kakarot-doc/docs/Kakarot/Accounts/Eoa/externally_owned_account"}},o={},d=[{value:"Storage",id:"storage",level:2},{value:"<code>bytecode_</code>",id:"bytecode_",level:3},{value:"Explicit arguments",id:"explicit-arguments",level:4},{value:"Returns",id:"returns",level:4},{value:"<code>bytecode_len_</code>",id:"bytecode_len_",level:3},{value:"Returns",id:"returns-1",level:4},{value:"<code>storage_</code>",id:"storage_",level:3},{value:"Explicit arguments",id:"explicit-arguments-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"<code>is_initialized_</code>",id:"is_initialized_",level:3},{value:"Returns",id:"returns-3",level:4},{value:"<code>evm_address</code>",id:"evm_address",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Internal",id:"internal",level:2},{value:"<code>initialize</code>",id:"initialize",level:3},{value:"Implicit arguments",id:"implicit-arguments",level:4},{value:"Explicit arguments",id:"explicit-arguments-2",level:4},{value:"<code>get_evm_address</code>",id:"get_evm_address",level:3},{value:"Implicit arguments",id:"implicit-arguments-1",level:4},{value:"Returns",id:"returns-5",level:4},{value:"<code>write_bytecode</code>",id:"write_bytecode",level:3},{value:"Implicit arguments",id:"implicit-arguments-2",level:4},{value:"Explicit arguments",id:"explicit-arguments-3",level:4},{value:"<code>bytecode_len</code>",id:"bytecode_len",level:3},{value:"Implicit arguments",id:"implicit-arguments-3",level:4},{value:"Returns",id:"returns-6",level:4},{value:"<code>bytecode</code>",id:"bytecode",level:3},{value:"Implicit arguments",id:"implicit-arguments-4",level:4},{value:"Returns",id:"returns-7",level:4},{value:"<code>storage</code>",id:"storage-1",level:3},{value:"Implicit arguments",id:"implicit-arguments-5",level:4},{value:"Explicit arguments",id:"explicit-arguments-4",level:4},{value:"Returns",id:"returns-8",level:4},{value:"<code>write_storage</code>",id:"write_storage",level:3},{value:"Implicit arguments",id:"implicit-arguments-6",level:4},{value:"Explicit arguments",id:"explicit-arguments-5",level:4},{value:"<code>is_initialized</code>",id:"is_initialized",level:3},{value:"Implicit arguments",id:"implicit-arguments-7",level:4},{value:"Returns",id:"returns-9",level:4},{value:"<code>write_bytecode</code>",id:"write_bytecode-1",level:3},{value:"Implicit arguments",id:"implicit-arguments-8",level:4},{value:"Explicit arguments",id:"explicit-arguments-6",level:4},{value:"<code>load_bytecode</code>",id:"load_bytecode",level:3},{value:"Implicit arguments",id:"implicit-arguments-9",level:4},{value:"Explicit arguments",id:"explicit-arguments-7",level:4}],s={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"library"},"Library"),(0,i.kt)("h2",{id:"storage"},"Storage"),(0,i.kt)("h3",{id:"bytecode_"},(0,i.kt)("inlineCode",{parentName:"h3"},"bytecode_")),(0,i.kt)("h4",{id:"explicit-arguments"},"Explicit arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"index (felt)  \n")),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"res (felt)  \n")),(0,i.kt)("h3",{id:"bytecode_len_"},(0,i.kt)("inlineCode",{parentName:"h3"},"bytecode_len_")),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"res (felt)  \n")),(0,i.kt)("h3",{id:"storage_"},(0,i.kt)("inlineCode",{parentName:"h3"},"storage_")),(0,i.kt)("h4",{id:"explicit-arguments-1"},"Explicit arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"key (Uint256)  \n")),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"value (Uint256)  \n")),(0,i.kt)("h3",{id:"is_initialized_"},(0,i.kt)("inlineCode",{parentName:"h3"},"is_initialized_")),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"res (felt)  \n")),(0,i.kt)("h3",{id:"evm_address"},(0,i.kt)("inlineCode",{parentName:"h3"},"evm_address")),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"evm_address (felt)  \n")),(0,i.kt)("h2",{id:"internal"},"Internal"),(0,i.kt)("h3",{id:"initialize"},(0,i.kt)("inlineCode",{parentName:"h3"},"initialize")),(0,i.kt)("p",null,"This function is used to initialize the smart contract account."),(0,i.kt)("h4",{id:"implicit-arguments"},"Implicit arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \nbitwise_ptr (BitwiseBuiltin*)  \n")),(0,i.kt)("h4",{id:"explicit-arguments-2"},"Explicit arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kakarot_address (felt)  \n_evm_address  \n")),(0,i.kt)("h3",{id:"get_evm_address"},(0,i.kt)("inlineCode",{parentName:"h3"},"get_evm_address")),(0,i.kt)("h4",{id:"implicit-arguments-1"},"Implicit arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"address (felt)  \n")),(0,i.kt)("h3",{id:"write_bytecode"},(0,i.kt)("inlineCode",{parentName:"h3"},"write_bytecode")),(0,i.kt)("p",null,"Store the bytecode of the contract."),(0,i.kt)("h4",{id:"implicit-arguments-2"},"Implicit arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \nbitwise_ptr (BitwiseBuiltin*)  \n")),(0,i.kt)("h4",{id:"explicit-arguments-3"},"Explicit arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bytecode_len (felt): : The length of the bytecode.  \nbytecode (felt*): : The bytecode of the contract.  \n")),(0,i.kt)("h3",{id:"bytecode_len"},(0,i.kt)("inlineCode",{parentName:"h3"},"bytecode_len")),(0,i.kt)("p",null,"This function is used to get the bytecode_len of the smart contract."),(0,i.kt)("h4",{id:"implicit-arguments-3"},"Implicit arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \nbitwise_ptr (BitwiseBuiltin*)  \n")),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"felt  \n")),(0,i.kt)("h3",{id:"bytecode"},(0,i.kt)("inlineCode",{parentName:"h3"},"bytecode")),(0,i.kt)("p",null,"This function is used to get the bytecode of the smart contract."),(0,i.kt)("h4",{id:"implicit-arguments-4"},"Implicit arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \nbitwise_ptr (BitwiseBuiltin*)  \n")),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bytecode_len (felt): : The length of the bytecode.  \nbytecode (felt*): : The bytecode of the smart contract.  \n")),(0,i.kt)("h3",{id:"storage-1"},(0,i.kt)("inlineCode",{parentName:"h3"},"storage")),(0,i.kt)("p",null,"This function is used to read the storage at a key."),(0,i.kt)("h4",{id:"implicit-arguments-5"},"Implicit arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \nbitwise_ptr (BitwiseBuiltin*)  \n")),(0,i.kt)("h4",{id:"explicit-arguments-4"},"Explicit arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"key (Uint256): : The key to the stored value .  \n")),(0,i.kt)("h4",{id:"returns-8"},"Returns"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"value (Uint256): : The store value.  \n")),(0,i.kt)("h3",{id:"write_storage"},(0,i.kt)("inlineCode",{parentName:"h3"},"write_storage")),(0,i.kt)("p",null,"This function is used to write to the storage of the account."),(0,i.kt)("h4",{id:"implicit-arguments-6"},"Implicit arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \nbitwise_ptr (BitwiseBuiltin*)  \n")),(0,i.kt)("h4",{id:"explicit-arguments-5"},"Explicit arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"key (Uint256): : The key to the value to store.  \nvalue (Uint256): : The value to store.  \n")),(0,i.kt)("h3",{id:"is_initialized"},(0,i.kt)("inlineCode",{parentName:"h3"},"is_initialized")),(0,i.kt)("p",null,"This function checks if the account was initialized."),(0,i.kt)("h4",{id:"implicit-arguments-7"},"Implicit arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \nbitwise_ptr (BitwiseBuiltin*)  \n")),(0,i.kt)("h4",{id:"returns-9"},"Returns"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"is_initialized (felt): : 1 if the account has been initialized 0 otherwise.  \n")),(0,i.kt)("h3",{id:"write_bytecode-1"},(0,i.kt)("inlineCode",{parentName:"h3"},"write_bytecode")),(0,i.kt)("p",null,"Store the bytecode of the contract."),(0,i.kt)("h4",{id:"implicit-arguments-8"},"Implicit arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,i.kt)("h4",{id:"explicit-arguments-6"},"Explicit arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"index (felt): : The current free index in the bytecode_ storage.  \nbytecode_len (felt): : The length of the bytecode.  \nbytecode (felt*): : The bytecode of the contract.  \ncurrent_felt (felt)  \nremaining_shift (felt)  \n")),(0,i.kt)("h3",{id:"load_bytecode"},(0,i.kt)("inlineCode",{parentName:"h3"},"load_bytecode")),(0,i.kt)("p",null,"Load the bytecode of the contract in the specified array."),(0,i.kt)("h4",{id:"implicit-arguments-9"},"Implicit arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \nbitwise_ptr (BitwiseBuiltin*)  \n")),(0,i.kt)("h4",{id:"explicit-arguments-7"},"Explicit arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"index (felt): : The index in the bytecode.  \nbytecode_len (felt): : The length of the bytecode.  \nbytecode (felt*): : The bytecode of the contract.  \ncurrent_felt (felt)  \nremaining_shift (felt)  \n")))}u.isMDXComponent=!0}}]);