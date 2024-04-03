"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[231],{551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>d,toc:()=>h});var r=n(4848),o=n(8453),i=n(5977),s=n(8335),c=n(5496);const a={id:"concepts",title:"Concepts",sidebar_position:4},l="Concepts Overview",d={id:"concepts/concepts",title:"Concepts",description:"Dive deep into some foundational concepts of the Nervos network and read through a glossary to enrich your understanding of key blockchain terminologies.",source:"@site/docs/concepts/Concepts.mdx",sourceDirName:"concepts",slug:"/concepts/",permalink:"/docs/concepts/",draft:!1,unlisted:!1,editUrl:"https://github.com/nervosnetwork/docs-new/tree/develop-v2/website/docs/concepts/Concepts.mdx",tags:[],version:"current",lastUpdatedAt:1712118446,formattedLastUpdatedAt:"Apr 3, 2024",sidebarPosition:4,frontMatter:{id:"concepts",title:"Concepts",sidebar_position:4},sidebar:"tutorial",previous:{title:"RPCs",permalink:"/docs/rpcs"},next:{title:"Nervos Blockchain",permalink:"/docs/concepts/nervos-blockchain"}},p={},h=[{value:"Glossary",id:"glossary",level:2}];function u(e){const t={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"concepts-overview",children:"Concepts Overview"}),"\n",(0,r.jsx)(t.p,{children:"Dive deep into some foundational concepts of the Nervos network and read through a glossary to enrich your understanding of key blockchain terminologies."}),"\n",(0,r.jsx)(s.A,{topMargin:56,children:c.p.map((({index:e,title:t,description:n,href:o,type:s})=>(0,r.jsx)(i.A,{title:t,description:n,href:o,type:s},e)))}),"\n",(0,r.jsx)(t.h2,{id:"glossary",children:"Glossary"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"glossary/#general-glossary",children:"General Glossary"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"glossary/#economics-glossary",children:"Economics Glossary"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"glossary/#technical-glossary",children:"Technical Glossary"})}),"\n"]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},5496:(e,t,n)=>{n.d(t,{Y:()=>o,p:()=>r});var r=[{title:"Nervos Blockchain",description:"A scalable, interoperable blockchain for diverse dApp development",href:"./nervos-blockchain",type:"concept"},{title:"Cell Model",description:"Flexible on-chain asset and data management structure",href:"./cell-model",type:"concept"},{title:"CKB-VM",description:"Adaptable virtual machine for secure smart contract execution",href:"./ckb-vm",type:"concept"},{title:"Consensus",description:"Secure algorithm ensuring network integrity",href:"./consensus",type:"concept"},{title:"Tokenomics",description:"Adaptive token utility and economic mechanisms",href:"./economics",type:"concept"},{title:"Address and Wallet",description:"Versatile address system and wallet integration",href:"./cryptowallet",type:"concept"}],o=[{title:"Neuron",href:"https://neuron.magickbase.com/",description:"Window, MacOS, Linux"},{title:"JoyID",href:"https://joy.id/",description:"Web-based"},{title:"Portal Wallet",href:"https://ckb.pw/#/",description:"Web-based"},{title:"imToken",href:"https://token.im/ckb-wallet",description:"Android, IOS"},{title:"CKBull",href:"https://ckbull.app/#download",description:"Android, IOS"},{title:"Opera Wallet",href:"https://www.opera.com/download",description:"Android"},{title:"SafePal",href:"https://blog.safepal.com/ckb/",description:"Android, IOS, Hardware"},{title:"Ledger",href:"https://www.ledger.com/",description:"Hardware"},{title:"OneKey",href:"https://onekey.so/",description:"Hardware"}]},5977:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(53),o=n(8774);const i={cardContainer:"cardContainer__ccT",iconContainer:"iconContainer_RJI0",rightContainer:"rightContainer_HZnY",title:"title_aezp",description:"description_jBtF",links:"links_KO_M"};var s=n(1122),c=n(4848);function a(e){var t=e.title,n=e.description,a=e.href,l=e.type,d=e.links,p=e.className;return(0,c.jsxs)(o.A,{href:a,className:(0,r.A)(i.cardContainer,p),children:[(0,c.jsx)("div",{className:i.iconContainer,children:(0,c.jsx)(s.A,{alt:l,sources:{light:"/svg/icon-"+l+"-light.svg",dark:"/svg/icon-"+l+"-dark.svg"}})}),(0,c.jsxs)("div",{className:i.rightContainer,children:[(0,c.jsx)("h4",{className:i.title,children:t}),d&&d.length>0&&(0,c.jsx)("div",{className:i.links,children:d.map((function(e,t){return(0,c.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",children:e.label},t)}))}),(0,c.jsx)("p",{className:i.description,children:n})]})]})}},8335:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);const r="layoutContainer_TJ5m";var o=n(4848);const i=function(e){var t=e.children,n=e.topMargin,i=void 0===n?16:n,s=e.colNum,c=void 0===s?2:s;return(0,o.jsx)("div",{style:{marginTop:i,gridTemplateColumns:"repeat("+c+", 1fr)"},className:r,children:t})}},53:(e,t,n)=>{function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{A:()=>o})},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(6540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);