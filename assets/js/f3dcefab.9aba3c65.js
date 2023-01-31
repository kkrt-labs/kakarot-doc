"use strict";(self.webpackChunkkakarot=self.webpackChunkkakarot||[]).push([[680],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=l.createContext({}),p=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},o="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),o=p(n),d=a,g=o["".concat(u,".").concat(d)]||o[d]||m[d]||i;return n?l.createElement(g,r(r({ref:t},c),{},{components:n})):l.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[o]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2373:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var l=n(7462),a=(n(7294),n(3905));const i={},r="Utils",s={unversionedId:"utils/utils",id:"utils/utils",title:"Utils",description:"Internal",source:"@site/docs/utils/utils.md",sourceDirName:"utils",slug:"/utils/",permalink:"/kinto-un/docs/utils/",draft:!1,editUrl:"https://github.com/sayajin-labs/kakarot/docs/utils/utils.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Stack",permalink:"/kinto-un/docs/kakarot/stack"},next:{title:"Alt bn128 g1",permalink:"/kinto-un/docs/utils/alt_bn128/alt_bn128_g1"}},u={},p=[{value:"Internal",id:"internal",level:2},{value:"<code>to_uint256</code>",id:"to_uint256",level:3},{value:"Implicit arguments",id:"implicit-arguments",level:4},{value:"Explicit arguments",id:"explicit-arguments",level:4},{value:"Returns",id:"returns",level:4},{value:"<code>to_bigint</code>",id:"to_bigint",level:3},{value:"Implicit arguments",id:"implicit-arguments-1",level:4},{value:"Explicit arguments",id:"explicit-arguments-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"<code>bigint_to_felt</code>",id:"bigint_to_felt",level:3},{value:"Implicit arguments",id:"implicit-arguments-2",level:4},{value:"Explicit arguments",id:"explicit-arguments-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"<code>bytes_i_to_uint256</code>",id:"bytes_i_to_uint256",level:3},{value:"Implicit arguments",id:"implicit-arguments-3",level:4},{value:"Explicit arguments",id:"explicit-arguments-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"<code>bytes32_to_bigint</code>",id:"bytes32_to_bigint",level:3},{value:"Implicit arguments",id:"implicit-arguments-4",level:4},{value:"Explicit arguments",id:"explicit-arguments-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"<code>bigint_to_bytes_array</code>",id:"bigint_to_bytes_array",level:3},{value:"Implicit arguments",id:"implicit-arguments-5",level:4},{value:"Explicit arguments",id:"explicit-arguments-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"<code>minimum_word_count</code>",id:"minimum_word_count",level:3},{value:"Implicit arguments",id:"implicit-arguments-6",level:4},{value:"Explicit arguments",id:"explicit-arguments-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"<code>compute_half_uint256</code>",id:"compute_half_uint256",level:3},{value:"Implicit arguments",id:"implicit-arguments-7",level:4},{value:"Explicit arguments",id:"explicit-arguments-7",level:4},{value:"Returns",id:"returns-7",level:4},{value:"<code>slice_data</code>",id:"slice_data",level:3},{value:"Implicit arguments",id:"implicit-arguments-8",level:4},{value:"Explicit arguments",id:"explicit-arguments-8",level:4},{value:"Returns",id:"returns-8",level:4},{value:"<code>uint256_to_felt</code>",id:"uint256_to_felt",level:3},{value:"Implicit arguments",id:"implicit-arguments-9",level:4},{value:"Explicit arguments",id:"explicit-arguments-9",level:4},{value:"Returns",id:"returns-9",level:4},{value:"<code>uint256_to_bytes_array</code>",id:"uint256_to_bytes_array",level:3},{value:"Implicit arguments",id:"implicit-arguments-10",level:4},{value:"Explicit arguments",id:"explicit-arguments-10",level:4},{value:"Returns",id:"returns-10",level:4},{value:"<code>uint256_to_bytes_no_padding</code>",id:"uint256_to_bytes_no_padding",level:3},{value:"Implicit arguments",id:"implicit-arguments-11",level:4},{value:"Explicit arguments",id:"explicit-arguments-11",level:4},{value:"Returns",id:"returns-11",level:4},{value:"<code>uint256_to_dest_bytes_array</code>",id:"uint256_to_dest_bytes_array",level:3},{value:"Implicit arguments",id:"implicit-arguments-12",level:4},{value:"Explicit arguments",id:"explicit-arguments-12",level:4},{value:"Returns",id:"returns-12",level:4},{value:"<code>div_rem</code>",id:"div_rem",level:3},{value:"Implicit arguments",id:"implicit-arguments-13",level:4},{value:"Explicit arguments",id:"explicit-arguments-13",level:4},{value:"Returns",id:"returns-13",level:4},{value:"<code>split_word</code>",id:"split_word",level:3},{value:"Implicit arguments",id:"implicit-arguments-14",level:4},{value:"Explicit arguments",id:"explicit-arguments-14",level:4},{value:"<code>split_word_little</code>",id:"split_word_little",level:3},{value:"Implicit arguments",id:"implicit-arguments-15",level:4},{value:"Explicit arguments",id:"explicit-arguments-15",level:4},{value:"<code>split_word_128</code>",id:"split_word_128",level:3},{value:"Implicit arguments",id:"implicit-arguments-16",level:4},{value:"Explicit arguments",id:"explicit-arguments-16",level:4},{value:"<code>ceil_bytes_len_to_next_32_bytes_word</code>",id:"ceil_bytes_len_to_next_32_bytes_word",level:3},{value:"Implicit arguments",id:"implicit-arguments-17",level:4},{value:"Explicit arguments",id:"explicit-arguments-17",level:4},{value:"Returns",id:"returns-14",level:4},{value:"<code>min</code>",id:"min",level:3},{value:"Implicit arguments",id:"implicit-arguments-18",level:4},{value:"Explicit arguments",id:"explicit-arguments-18",level:4},{value:"Returns",id:"returns-15",level:4},{value:"<code>bytes_to_bytes8_little_endian</code>",id:"bytes_to_bytes8_little_endian",level:3},{value:"Implicit arguments",id:"implicit-arguments-19",level:4},{value:"Explicit arguments",id:"explicit-arguments-19",level:4},{value:"<code>felt_to_bytes</code>",id:"felt_to_bytes",level:3},{value:"Implicit arguments",id:"implicit-arguments-20",level:4},{value:"Explicit arguments",id:"explicit-arguments-20",level:4},{value:"Returns",id:"returns-16",level:4},{value:"<code>bytes_to_felt</code>",id:"bytes_to_felt",level:3},{value:"Implicit arguments",id:"implicit-arguments-21",level:4},{value:"Explicit arguments",id:"explicit-arguments-21",level:4},{value:"Returns",id:"returns-17",level:4},{value:"<code>keccak_hash_to_evm_contract_address</code>",id:"keccak_hash_to_evm_contract_address",level:3},{value:"Implicit arguments",id:"implicit-arguments-22",level:4},{value:"Explicit arguments",id:"explicit-arguments-22",level:4},{value:"Returns",id:"returns-18",level:4},{value:"<code>bytes_to_bytes4_array</code>",id:"bytes_to_bytes4_array",level:3},{value:"Implicit arguments",id:"implicit-arguments-23",level:4},{value:"Explicit arguments",id:"explicit-arguments-23",level:4},{value:"Returns",id:"returns-19",level:4},{value:"<code>bytes4_array_to_bytes</code>",id:"bytes4_array_to_bytes",level:3},{value:"Implicit arguments",id:"implicit-arguments-24",level:4},{value:"Explicit arguments",id:"explicit-arguments-24",level:4},{value:"Returns",id:"returns-20",level:4}],c={toc:p};function o(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"utils"},"Utils"),(0,a.kt)("h2",{id:"internal"},"Internal"),(0,a.kt)("h3",{id:"to_uint256"},(0,a.kt)("inlineCode",{parentName:"h3"},"to_uint256")),(0,a.kt)("h4",{id:"implicit-arguments"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"range_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"val (felt)  \n")),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"Uint256  \n")),(0,a.kt)("h3",{id:"to_bigint"},(0,a.kt)("inlineCode",{parentName:"h3"},"to_bigint")),(0,a.kt)("p",null,"This helper converts a felt straight to BigInt3"),(0,a.kt)("h4",{id:"implicit-arguments-1"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"range_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-1"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"val (felt): : felt value to be converted  \n")),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"BigInt3  \n")),(0,a.kt)("h3",{id:"bigint_to_felt"},(0,a.kt)("inlineCode",{parentName:"h3"},"bigint_to_felt")),(0,a.kt)("p",null,"This helper converts a BigInt3 straight to felt"),(0,a.kt)("h4",{id:"implicit-arguments-2"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"range_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-2"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"val (BigInt3): : BigInt3 value to be converted  \n")),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"felt  \n")),(0,a.kt)("h3",{id:"bytes_i_to_uint256"},(0,a.kt)("inlineCode",{parentName:"h3"},"bytes_i_to_uint256")),(0,a.kt)("p",null,"This function is used to convert a sequence of i bytes to Uint256."),(0,a.kt)("h4",{id:"implicit-arguments-3"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"range_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-3"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"val (felt*): : pointer to the first byte.  \ni (felt): : sequence size.  \n")),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"Uint256  \n")),(0,a.kt)("h3",{id:"bytes32_to_bigint"},(0,a.kt)("inlineCode",{parentName:"h3"},"bytes32_to_bigint")),(0,a.kt)("p",null,"This helper is used to convert a sequence of 32 bytes straight to BigInt3."),(0,a.kt)("h4",{id:"implicit-arguments-4"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"range_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-4"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"val (felt*): : pointer to the first byte of the 32.  \n")),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"BigInt3  \n")),(0,a.kt)("h3",{id:"bigint_to_bytes_array"},(0,a.kt)("inlineCode",{parentName:"h3"},"bigint_to_bytes_array")),(0,a.kt)("p",null,"This function is used to convert a BigInt3 to straight to a bytes array represented by an array of felts (1 felt represents 1 byte)."),(0,a.kt)("h4",{id:"implicit-arguments-5"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"range_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-5"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"val (BigInt3)  \n")),(0,a.kt)("h4",{id:"returns-5"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"bytes_array_len (felt)  \nbytes_array (felt*)  \n")),(0,a.kt)("h3",{id:"minimum_word_count"},(0,a.kt)("inlineCode",{parentName:"h3"},"minimum_word_count")),(0,a.kt)("p",null,": This helper returns the minimal number of EVM words for a given bytes length"),(0,a.kt)("h4",{id:"implicit-arguments-6"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"range_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-6"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"length (felt): : a given bytes length  \n")),(0,a.kt)("h4",{id:"returns-6"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"res (felt)  \n")),(0,a.kt)("h3",{id:"compute_half_uint256"},(0,a.kt)("inlineCode",{parentName:"h3"},"compute_half_uint256")),(0,a.kt)("h4",{id:"implicit-arguments-7"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"range_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-7"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"val (felt*)  \ni (felt)  \nres (felt)  \n")),(0,a.kt)("h4",{id:"returns-7"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"res (felt)  \n")),(0,a.kt)("h3",{id:"slice_data"},(0,a.kt)("inlineCode",{parentName:"h3"},"slice_data")),(0,a.kt)("h4",{id:"implicit-arguments-8"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"range_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-8"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"data_len (felt)  \ndata (felt*)  \ndata_offset (felt)  \nslice_len (felt)  \n")),(0,a.kt)("h4",{id:"returns-8"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"felt*  \n")),(0,a.kt)("h3",{id:"uint256_to_felt"},(0,a.kt)("inlineCode",{parentName:"h3"},"uint256_to_felt")),(0,a.kt)("p",null,"This function is used to convert a uint256 to a felt."),(0,a.kt)("h4",{id:"implicit-arguments-9"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"range_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-9"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"val (Uint256): : value to convert.  \n")),(0,a.kt)("h4",{id:"returns-9"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"felt  \n")),(0,a.kt)("h3",{id:"uint256_to_bytes_array"},(0,a.kt)("inlineCode",{parentName:"h3"},"uint256_to_bytes_array")),(0,a.kt)("p",null,"This function is used to convert a uint256 to a bytes array represented by an array of felts (1 felt represents 1 byte)."),(0,a.kt)("h4",{id:"implicit-arguments-10"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"range_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-10"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"value (Uint256): : value to convert.  \n")),(0,a.kt)("h4",{id:"returns-10"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"bytes_array_len (felt)  \nbytes_array (felt*)  \n")),(0,a.kt)("h3",{id:"uint256_to_bytes_no_padding"},(0,a.kt)("inlineCode",{parentName:"h3"},"uint256_to_bytes_no_padding")),(0,a.kt)("p",null,"This function is a variant of ",(0,a.kt)("inlineCode",{parentName:"p"},"uint256_to_bytes_array")," that encodes the uint256 with no padding"),(0,a.kt)("h4",{id:"implicit-arguments-11"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"bitwise_ptr (BitwiseBuiltin*)  \nrange_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-11"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"value (Uint256): : value to convert.  \nidx (felt): : index of res array  \nres (felt*): : resultant encoded bytearray, but in reverse order  \ndest (felt*): : reversed res, putting byte array in right order  \n")),(0,a.kt)("h4",{id:"returns-11"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"bytes_len (felt)  \n")),(0,a.kt)("h3",{id:"uint256_to_dest_bytes_array"},(0,a.kt)("inlineCode",{parentName:"h3"},"uint256_to_dest_bytes_array")),(0,a.kt)("p",null,"This function is like ",(0,a.kt)("inlineCode",{parentName:"p"},"uint256_to_bytes_array")," except it writes the byte array to a given destination with the given offset and length"),(0,a.kt)("h4",{id:"implicit-arguments-12"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"range_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-12"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"value (Uint256): : value to convert.  \nbyte_array_offset (felt): : The starting offset of byte array that is copied to the destination array.  \nbyte_array_len (felt): : The length of byte array that is copied to the destination array.  \ndest_offset (felt): : The offset of the destination array that the byte array is copied.  \ndest_len (felt): : The length of the destination array.  \ndest (felt*): : The destination array  \n")),(0,a.kt)("h4",{id:"returns-12"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"updated_dest_len (felt)  \n")),(0,a.kt)("h3",{id:"div_rem"},(0,a.kt)("inlineCode",{parentName:"h3"},"div_rem")),(0,a.kt)("p",null,"Divides a 128-bit number with remainder."),(0,a.kt)("h4",{id:"implicit-arguments-13"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"range_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-13"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"value: : 128bit value to divide.  \ndiv: : divisor.  \n")),(0,a.kt)("h4",{id:"returns-13"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"q (felt)  \nr (felt)  \n")),(0,a.kt)("h3",{id:"split_word"},(0,a.kt)("inlineCode",{parentName:"h3"},"split_word")),(0,a.kt)("p",null,"Splits a felt into ",(0,a.kt)("inlineCode",{parentName:"p"},"len")," bytes, big-endian, and outputs to ",(0,a.kt)("inlineCode",{parentName:"p"},"dst"),"."),(0,a.kt)("h4",{id:"implicit-arguments-14"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"range_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-14"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"value (felt)  \nlen (felt)  \ndst (felt*)  \n")),(0,a.kt)("h3",{id:"split_word_little"},(0,a.kt)("inlineCode",{parentName:"h3"},"split_word_little")),(0,a.kt)("p",null,"Splits a felt into ",(0,a.kt)("inlineCode",{parentName:"p"},"len")," bytes, little-endian, and outputs to ",(0,a.kt)("inlineCode",{parentName:"p"},"dst"),"."),(0,a.kt)("h4",{id:"implicit-arguments-15"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"range_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-15"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"value (felt)  \nlen (felt)  \ndst (felt*)  \n")),(0,a.kt)("h3",{id:"split_word_128"},(0,a.kt)("inlineCode",{parentName:"h3"},"split_word_128")),(0,a.kt)("p",null,"Splits a felt into 16 bytes, big-endien, and outputs to ",(0,a.kt)("inlineCode",{parentName:"p"},"dst"),"."),(0,a.kt)("h4",{id:"implicit-arguments-16"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"range_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-16"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"start_value (felt)  \ndst (felt*)  \n")),(0,a.kt)("h3",{id:"ceil_bytes_len_to_next_32_bytes_word"},(0,a.kt)("inlineCode",{parentName:"h3"},"ceil_bytes_len_to_next_32_bytes_word")),(0,a.kt)("p",null,"Ceil a number of bits to the next word (32 bytes)\nex: ceil_bytes_len_to_next_32_bytes_word(2) = 32\nex: ceil_bytes_len_to_next_32_bytes_word(34) = 64"),(0,a.kt)("h4",{id:"implicit-arguments-17"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"range_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-17"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"bytes_len (felt)  \n")),(0,a.kt)("h4",{id:"returns-14"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"felt  \n")),(0,a.kt)("h3",{id:"min"},(0,a.kt)("inlineCode",{parentName:"h3"},"min")),(0,a.kt)("p",null,"Returns the min value between a and b"),(0,a.kt)("h4",{id:"implicit-arguments-18"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"range_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-18"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"a (felt)  \nb (felt)  \n")),(0,a.kt)("h4",{id:"returns-15"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"felt  \n")),(0,a.kt)("h3",{id:"bytes_to_bytes8_little_endian"},(0,a.kt)("inlineCode",{parentName:"h3"},"bytes_to_bytes8_little_endian")),(0,a.kt)("p",null,"convert bytes to little endian"),(0,a.kt)("h4",{id:"implicit-arguments-19"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"range_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-19"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"bytes_len (felt)  \nbytes (felt*)  \nindex (felt)  \nsize (felt)  \nbytes8 (felt)  \nbytes8_shift (felt)  \ndest (felt*)  \ndest_index (felt)  \n")),(0,a.kt)("h3",{id:"felt_to_bytes"},(0,a.kt)("inlineCode",{parentName:"h3"},"felt_to_bytes")),(0,a.kt)("p",null,"transform a felt to big endian bytes"),(0,a.kt)("h4",{id:"implicit-arguments-20"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"range_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-20"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"value (felt): The initial felt  \nbytes_len (felt): The number of bytes (used for recursion, set to 0)  \nbytes (felt*): The pointer to the bytes  \n")),(0,a.kt)("h4",{id:"returns-16"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"bytes_len (felt)  \n")),(0,a.kt)("h3",{id:"bytes_to_felt"},(0,a.kt)("inlineCode",{parentName:"h3"},"bytes_to_felt")),(0,a.kt)("p",null,"transform muliple bytes into a single felt"),(0,a.kt)("h4",{id:"implicit-arguments-21"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"range_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-21"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"data_len (felt): The length of the bytes  \ndata (felt*): The pointer to the bytes array  \nn (felt): used for recursion, set to 0  \n")),(0,a.kt)("h4",{id:"returns-17"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"n (felt)  \n")),(0,a.kt)("h3",{id:"keccak_hash_to_evm_contract_address"},(0,a.kt)("inlineCode",{parentName:"h3"},"keccak_hash_to_evm_contract_address")),(0,a.kt)("p",null,"Transforms a keccak hash to an ethereum address by taking last 20 bytes"),(0,a.kt)("h4",{id:"implicit-arguments-22"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"range_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-22"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"hash (Uint256): - The keccak hash.  \n")),(0,a.kt)("h4",{id:"returns-18"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"felt  \n")),(0,a.kt)("h3",{id:"bytes_to_bytes4_array"},(0,a.kt)("inlineCode",{parentName:"h3"},"bytes_to_bytes4_array")),(0,a.kt)("p",null,"transform muliple bytes into words of 32 bits (big endian)"),(0,a.kt)("h4",{id:"implicit-arguments-23"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"range_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-23"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"data_len (felt): The length of the bytes  \ndata (felt*): The pointer to the bytes array  \nn_len (felt): used for recursion, set to 0  \nn (felt*): used for recursion, set to pointer  \n")),(0,a.kt)("h4",{id:"returns-19"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"n_len (felt)  \nn (felt*)  \n")),(0,a.kt)("h3",{id:"bytes4_array_to_bytes"},(0,a.kt)("inlineCode",{parentName:"h3"},"bytes4_array_to_bytes")),(0,a.kt)("p",null,"transform array of 32-bit words (big endian) into a bytes array"),(0,a.kt)("h4",{id:"implicit-arguments-24"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"range_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-24"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"data_len (felt): The length of the 32-bit array  \ndata (felt*): The pointer to the 32-bit array  \nbytes_len (felt): used for recursion, set to 0  \nbytes (felt*): used for recursion, set to pointer  \n")),(0,a.kt)("h4",{id:"returns-20"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"bytes_len (felt)  \nbytes (felt*)  \n")))}o.isMDXComponent=!0}}]);