"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[580],{238:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var t=s(4848),a=s(8453),r=s(9489),c=s(7227);const o={id:"rpcs",title:"RPCs",sidebar_position:3},i="RPCs",d={id:"rpcs",title:"RPCs",description:"CKB RPCs are a set of programming interfaces provided by the Nervos CKB blockchain, enabling developers to interact with the network for querying data, managing transactions, and deploying smart contracts directly.",source:"@site/docs/rpcs.mdx",sourceDirName:".",slug:"/rpcs",permalink:"/docs/rpcs",draft:!1,unlisted:!1,editUrl:"https://github.com/nervosnetwork/docs-new/tree/develop-v2/website/docs/rpcs.mdx",tags:[],version:"current",lastUpdatedAt:1712119922,formattedLastUpdatedAt:"Apr 3, 2024",sidebarPosition:3,frontMatter:{id:"rpcs",title:"RPCs",sidebar_position:3},sidebar:"tutorial",previous:{title:"Dev Environment",permalink:"/docs/dev-environment"},next:{title:"Concepts",permalink:"/docs/concepts/"}},l={},u=[{value:"Public JSON RPC Nodes",id:"public-json-rpc-nodes",level:2},{value:"RPC Provider: Ankr",id:"rpc-provider-ankr",level:2},{value:"CKB JSON-RPC Protocols",id:"ckb-json-rpc-protocols",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Subscription",id:"subscription",level:2},{value:"TCP Based RPC",id:"tcp-based-rpc",level:2},{value:"WebSocket Based RPC",id:"websocket-based-rpc",level:2},{value:"Serialization",id:"serialization",level:2},{value:"Numbers",id:"numbers",level:3},{value:"Binary Data",id:"binary-data",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"rpcs",children:"RPCs"}),"\n",(0,t.jsx)(n.p,{children:"CKB RPCs are a set of programming interfaces provided by the Nervos CKB blockchain, enabling developers to interact with the network for querying data, managing transactions, and deploying smart contracts directly."}),"\n",(0,t.jsx)(n.h2,{id:"public-json-rpc-nodes",children:"Public JSON RPC Nodes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"These nodes are provided by community members, they may be unstable, incomplete or not work at all, use at your own risk."}),"\n",(0,t.jsx)(n.li,{children:"You may use these nodes to try out or test some features, but you should not use them for production."}),"\n",(0,t.jsx)(n.li,{children:"Since ckb v0.105.0, ckb already included indexer service, just use ckb jsonrpc url for indexer service."}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Link"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Mainnet"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://mainnet.ckbapp.dev/",children:"https://mainnet.ckbapp.dev/"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Mainnet"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://mainnet.ckb.dev/",children:"https://mainnet.ckb.dev/"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Testnet"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://testnet.ckbapp.dev/",children:"https://testnet.ckbapp.dev/"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Testnet"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://testnet.ckb.dev/",children:"https://testnet.ckb.dev/"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"rpc-provider-ankr",children:"RPC Provider: Ankr"}),"\n",(0,t.jsxs)(n.p,{children:["Ankr is an RPC provider that wors as intermediary to help you interact with the Nervos Network. You might experience some levels of latency depending on the provider\u2019s location.\nAnkr\u2019s endpoint root: ",(0,t.jsx)(n.a,{href:"https://rpc.ankr.com/nervos",children:"https://rpc.ankr.com/nervos"})]}),"\n",(0,t.jsx)(n.h2,{id:"ckb-json-rpc-protocols",children:"CKB JSON-RPC Protocols"}),"\n",(0,t.jsxs)(n.p,{children:["CKB exposes a set of RPCs in ",(0,t.jsx)(n.a,{href:"https://www.jsonrpc.org/specification",children:"JSON-RPC 2.0"})," protocols for interactions. For more details, please refer to ",(0,t.jsx)(n.a,{href:"https://github.com/nervosnetwork/ckb/blob/master/rpc/README.md",children:"CKB JSON RPC Protocols Documentation"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The RPCs exposed by CKB are only designed for internal usage. Please limit the access to the CKB RPCs strictly to trusted machines (by using rpc.listen_address configuration option). Exposing CKB RPCs to the public Internet is dangerous and strongly discouraged."}),"\n",(0,t.jsx)(n.li,{children:"CKB JSON-RPC only supports HTTP now. If you need SSL support, please setup a reverse proxy via nginx or other HTTPS servers."}),"\n",(0,t.jsx)(n.li,{children:"Subscriptions require a full duplex connection. CKB offers such connections in the form of tcp (enable with rpc.tcp_listen_address configuration option) and websockets (enable with rpc.ws_listen_address), plain HTTP connection does not support subscriptions. See below for examples on this."}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,t.jsxs)(n.p,{children:["The following commands uses ",(0,t.jsx)(n.a,{href:"https://github.com/nervosnetwork/ckb/blob/master/rpc/README.md#get_tip_block_number",children:"get_tip_block_number"})," RPC to fetch the ",(0,t.jsx)(n.code,{children:"tip"})," block number, of the latest block number in the longest blockchain:"]}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(c.A,{value:"get-tip-block-number",label:"Command",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'echo \'{\n    "id": 2,\n    "jsonrpc": "2.0",\n    "method": "get_tip_block_number",\n    "params": []\n}\' \\\n| tr -d \'\\n\' \\\n| curl -H \'content-type: application/json\' -d @- \\\nhttp://localhost:8114\n'})})}),(0,t.jsx)(c.A,{value:"tip-block-number",label:"Response",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'{"jsonrpc":"2.0","result":"0x2cb4","id":2}\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["The following commands uses ",(0,t.jsx)(n.code,{children:"send_transaction"})," RPC to send transactions to the CKB network:"]}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(c.A,{value:"send-transaction",label:"Command",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'echo \'{\n  "id": 3,\n  "jsonrpc": "2.0",\n  "method": "send_transaction",\n  "params": [\n    {\n      "cell_deps": [\n        {\n          "dep_type": "code",\n          "out_point": {\n            "index": "0x0",\n            "tx_hash": "0xa4037a893eb48e18ed4ef61034ce26eba9c585f15c9cee102ae58505565eccc3"\n          }\n        }\n      ],\n      "header_deps": [\n        "0x7978ec7ce5b507cfb52e149e36b1a23f6062ed150503c85bbf825da3599095ed"\n      ],\n      "inputs": [\n        {\n          "previous_output": {\n            "index": "0x0",\n            "tx_hash": "0x365698b50ca0da75dca2c87f9e7b563811d3b5813736b8cc62cc3b106faceb17"\n          },\n          "since": "0x0"\n        }\n      ],\n      "outputs": [\n        {\n          "capacity": "0x2540be400",\n          "lock": {\n            "code_hash": "0x28e83a1277d48add8e72fadaa9248559e1b632bab2bd60b27955ebc4c03800a5",\n            "hash_type": "data",\n            "args": "0x"\n          },\n          "type": null\n        }\n      ],\n      "outputs_data": [\n        "0x"\n      ],\n      "version": "0x0",\n      "witnesses": []\n    }\n  ]\n}\'\\\n| tr -d \'\\n\' \\\n| curl -H \'content-type: application/json\' -d @- \\\nhttp://localhost:8114\n'})})}),(0,t.jsx)(c.A,{value:"transaction",label:"Response",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "id": 3,\n  "jsonrpc": "2.0",\n  "result": "0xa0ef4eb5f4ceeb08a4c8524d84c5da95dce2f608e0ca2ec8091191b0f330c6e3"\n}\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["It should be noted that ",(0,t.jsx)(n.code,{children:"send_transaction"})," is asynchronous, that is, the return of the transaction hash, does not mean that the transaction is fully verified, if you need to follow up on the status of the transaction, it is recommended to use the following get_transaction rpc\uff1a"]}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(c.A,{value:"send-transaction",label:"Command",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'echo \'{\n    "id": 4,\n    "jsonrpc": "2.0",\n    "method": "get_transaction",\n    "params": ["0xa0ef4eb5f4ceeb08a4c8524d84c5da95dce2f608e0ca2ec8091191b0f330c6e3"]\n}\' \\\n| tr -d \'\\n\' \\\n| curl -H \'content-type: application/json\' -d @- \\\nhttp://localhost:8114\n'})})}),(0,t.jsx)(c.A,{value:"transaction",label:"Response",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "id": 4,\n  "jsonrpc": "2.0",\n  "result": {\n    "transaction": {\n      "cell_deps": [\n        {\n          "dep_type": "code",\n          "out_point": {\n            "index": "0x0",\n            "tx_hash": "0xa4037a893eb48e18ed4ef61034ce26eba9c585f15c9cee102ae58505565eccc3"\n          }\n        }\n      ],\n      "hash": "0xa0ef4eb5f4ceeb08a4c8524d84c5da95dce2f608e0ca2ec8091191b0f330c6e3",\n      "header_deps": [\n        "0x7978ec7ce5b507cfb52e149e36b1a23f6062ed150503c85bbf825da3599095ed"\n      ],\n      "inputs": [\n        {\n          "previous_output": {\n            "index": "0x0",\n            "tx_hash": "0x365698b50ca0da75dca2c87f9e7b563811d3b5813736b8cc62cc3b106faceb17"\n          },\n          "since": "0x0"\n        }\n      ],\n      "outputs": [\n        {\n          "capacity": "0x2540be400",\n          "lock": {\n            "code_hash": "0x28e83a1277d48add8e72fadaa9248559e1b632bab2bd60b27955ebc4c03800a5",\n            "hash_type": "data",\n            "args": "0x"\n          },\n          "type": null\n        }\n      ],\n      "outputs_data": [\n        "0x"\n      ],\n      "version": "0x0",\n      "witnesses": []\n    },\n    "cycles": "0x219",\n    "time_added_to_pool" : "0x187b3d137a1",\n    "tx_status": {\n      "block_hash": null,\n      "status": "pending",\n      "reason": null\n    }\n  }\n}\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"subscription",children:"Subscription"}),"\n",(0,t.jsxs)(n.p,{children:["To use ",(0,t.jsx)(n.code,{children:"subscription"})," feature, you need to configure CKB to enable such features. In this section, we assume you use the following configuration in ",(0,t.jsx)(n.code,{children:"CKB.toml"}),"section:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'[rpc]\nlisten_address = "127.0.0.1:8114"\ntcp_listen_address = "127.0.0.1:18114"\nws_listen_address = "127.0.0.1:18115"\n\n# ... more configs\n'})}),"\n",(0,t.jsx)(n.p,{children:"This above config ensures CKB listens at 8114 port for normal HTTP connections, 18114 port for TCP duplex connections, and 18115 port for WebSocket duplex connections."}),"\n",(0,t.jsx)(n.h2,{id:"tcp-based-rpc",children:"TCP Based RPC"}),"\n",(0,t.jsxs)(n.p,{children:["The following command uses ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Netcat",children:"netcat"})," to connect via TCP to CKB, then fire the same ",(0,t.jsx)(n.code,{children:"get_tip_block_number"})," RPC as shown above to fetch the block number in the longest chain:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'echo \'{\n    "id": 2,\n    "jsonrpc": "2.0",\n    "method": "get_tip_block_number",\n    "params": []\n}\' \\\n| tr -d \'\\n\' \\\n| sed -e "s/$/\\n/"\n| nc localhost 18114 -q 1\n{"jsonrpc":"2.0","result":"0xdc90","id":2}\n'})}),"\n",(0,t.jsx)(n.p,{children:"The following command uses netcat to connect to CKB, make a subscription request to monitor the latest committed block:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'cat <(echo \'{\n    "id": 2,\n    "jsonrpc": "2.0",\n    "method": "get_tip_block_number",\n    "params": []\n}\' \\\n| tr -d \'\\n\' \\\n| sed -e "s/$/\\n/") -\n| nc localhost 18114\n{"jsonrpc":"2.0","result":"0xa","id":2}\n{"jsonrpc":"2.0","method":"subscribe","params":{"result":"{\\"version\\":\\"0x0\\",\\"compact_target\\":\\"0x1a2810cf\\",\\"timestamp\\":\\"0x16ee81d0d5f\\",\\"number\\":\\"0x30673\\",\\"epoch\\":\\"0x5f102b400007a\\",\\"parent_hash\\":\\"0xc9020c79d4f19797022af3631eb9e76c57933bd608fe81a137b834975616c991\\",\\"transactions_root\\":\\"0x7d8e3c102a5c52598cdbe7d208deb986eb2f0af189bc4655e6dd1a71564c2b25\\",\\"proposals_hash\\":\\"0x0000000000000000000000000000000000000000000000000000000000000000\\",\\"uncles_hash\\":\\"0x0000000000000000000000000000000000000000000000000000000000000000\\",\\"dao\\":\\"0x15b9ae7648400f2fb61d57e0379b2300fc641b7e8db5160000060394d5580007\\",\\"nonce\\":\\"0x1f86f056000002460000000053170600\\",\\"hash\\":\\"0xa3c8feda83d7e184f09cb4f05e535bccd4c159e2cc0ac7a06ea7d457e0051a08\\"}","subscription":"0xa"}}\n{"jsonrpc":"2.0","method":"subscribe","params":{"result":"{\\"version\\":\\"0x0\\",\\"compact_target\\":\\"0x1a2810cf\\",\\"timestamp\\":\\"0x16ee81d1dfd\\",\\"number\\":\\"0x30674\\",\\"epoch\\":\\"0x5f102b500007a\\",\\"parent_hash\\":\\"0xa3c8feda83d7e184f09cb4f05e535bccd4c159e2cc0ac7a06ea7d457e0051a08\\",\\"transactions_root\\":\\"0x6d2dfc88bd8dda743b5bae14453f5f405a2a29a3cf6fff00c60f0f5c60a84fbe\\",\\"proposals_hash\\":\\"0x0000000000000000000000000000000000000000000000000000000000000000\\",\\"uncles_hash\\":\\"0x0000000000000000000000000000000000000000000000000000000000000000\\",\\"dao\\":\\"0xb4e019376f400f2f34c172e7379b230031d1417d95b5160000a399ffd6580007\\",\\"nonce\\":\\"0xded8ffa1000000000000040a90000000\\",\\"hash\\":\\"0x7d10fd1fb459630aa2f87ee4de699b7466a5da6efc0aee6ff459ff17b6cc5904\\"}","subscription":"0xa"}}\n// ... more data\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"Ctrl-C"})," to exit netcat here."]}),"\n",(0,t.jsx)(n.h2,{id:"websocket-based-rpc",children:"WebSocket Based RPC"}),"\n",(0,t.jsxs)(n.p,{children:["To play with WebSocket based RPC, please make sure to install ",(0,t.jsx)(n.a,{href:"https://github.com/websockets/wscat",children:"wscat"})," first:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npm install -g wscat\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can use the following command to start wscat and connect to CKB:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"wscat -c ws://localhost:18115\nConnected (press CTRL+C to quit)\n>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now we can run the same ",(0,t.jsx)(n.code,{children:"get_tip_block_number"})," request as above:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'> {"id": 2, "jsonrpc": "2.0", "method": "get_tip_block_number", "params": []}\n< {"jsonrpc":"2.0","result":"0x76887","id":2}\n'})}),"\n",(0,t.jsx)(n.p,{children:"You can also create subscriptions for new blocks:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'> {"id": 2, "jsonrpc": "2.0", "method": "subscribe", "params": ["new_tip_header"]}                                                                                                        < {"jsonrpc":"2.0","result":"0x2","id":2}                                                                                                                                                 < {"jsonrpc":"2.0","method":"subscribe","params":{"result":"{\\"version\\":\\"0x0\\",\\"compact_target\\":\\"0x1a216e17\\",\\"timestamp\\":\\"0x16f886b2223\\",\\"number\\":\\"0x77e2a\\",\\"epoch\\":\\"0x6c$01a9000135\\",\\"parent_hash\\":\\"0x2662c8056c638408d8f018a53785d68f633bd1edfa06b82d7c29ddcac1d98927\\",\\"transactions_root\\":\\"0xa6488b15373521ec0b1bc9dff1f117cc1cad7d3579e8a6c38cc6e35166dad9bd\\",\\"proposals_hash\\":\\"0x0000000000000000000000000000000000000000000000000000000000000000\\",\\"uncles_hash\\":\\"0x0000000000000000000000000000000000000000000000000000000000000000\\",\\"dao\\":\\"0x1a1aab41ad3eb72fa260f4eedeb9230092c4510af45b390000547d684fc40007\\",\\"nonce\\":\\"0xce1aaca681000089001d0003cb2d0500\\",\\"hash\\":\\"0x993e593921024167c1779146348fe2d82864ecd3f657b3bd2b14fbdfa87c4f06\\"}","subscription":"0x2"}}\n< {"jsonrpc":"2.0","method":"subscribe","params":{"result":"{\\"version\\":\\"0x0\\",\\"compact_target\\":\\"0x1a216e17\\",\\"timestamp\\":\\"0x16f886b29e3\\",\\"number\\":\\"0x77e2b\\",\\"epoch\\":\\"0x6c601aa000135\\",\\"parent_hash\\":\\"0x993e593921024167c1779146348fe2d82864ecd3f657b3bd2b14fbdfa87c4f06\\",\\"transactions_root\\":\\"0xe64cb6afb57e92a2af1da34d8a1d547fcd8b833e187697ae28a9dfadaaeba247\\",\\"proposals_hash\\":\\"0x0000000000000000000000000000000000000000000000000000000000000000\\",\\"uncles_hash\\":\\"0xa807c9cbb16a5af7cf36fd5c20b29535f6db4de52062138ad21ea6790ba9529c\\",\\"dao\\":\\"0xba227d3fcf3eb72fc8d61ff5deb92300402b3f12fb5b390000f113d450c40007\\",\\"nonce\\":\\"0xfb68521601000000000000503c9e2338\\",\\"hash\\":\\"0xf55d0f7ae1d9b106eee96139d86313e46b109ec8fa0d92f9eb6eb8bc81c294ec\\"}","subscription":"0x2"}}\n< {"jsonrpc":"2.0","method":"subscribe","params":{"result":"{\\"version\\":\\"0x0\\",\\"compact_target\\":\\"0x1a216e17\\",\\"timestamp\\":\\"0x16f886b40a3\\",\\"number\\":\\"0x77e2c\\",\\"epoch\\":\\"0x6c601ab000135\\",\\"parent_hash\\":\\"0xf55d0f7ae1d9b106eee96139d86313e46b109ec8fa0d92f9eb6eb8bc81c294ec\\",\\"transactions_root\\":\\"0xad2c9e1eabc586c8e38cc1eaca61eba5e320bbf4655c510c5be5de9eaafea96f\\",\\"proposals_hash\\":\\"0x0000000000000000000000000000000000000000000000000000000000000000\\",\\"uncles_hash\\":\\"0x0000000000000000000000000000000000000000000000000000000000000000\\",\\"dao\\":\\"0x5a2b4f3df13eb72feb4c4bfbdeb923008c922c1a025c3900008eaa3f52c40007\\",\\"nonce\\":\\"0x7b5ad85601000000000000005b340000\\",\\"hash\\":\\"0x2077e0c022514fe07844411436cfbf50e413694858a3d4775e0c836e787ce7ab\\"}","subscription":"0x2"}}\n<< // ... more data.\n'})}),"\n",(0,t.jsx)(n.h2,{id:"serialization",children:"Serialization"}),"\n",(0,t.jsx)(n.p,{children:"CKB's RPCs returns data in JSON format. While most fields are self-explanatory, CKB has special handling for numbers and binary data:"}),"\n",(0,t.jsx)(n.h3,{id:"numbers",children:"Numbers"}),"\n",(0,t.jsxs)(n.p,{children:["All numbers used in CKB's RPCs, including request parameters and return values, use hex encoding, the number is encoded first in hexadecimal in the most compact format(meaning useless leading zeros should be striped), and then prefixed with ",(0,t.jsx)(n.code,{children:"0x"}),". Here are some examples:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"0"})," is encoded as ",(0,t.jsx)(n.code,{children:"0x0"}),", we cannot remove the remaining ",(0,t.jsx)(n.code,{children:"0"})," since otherwise it won't be a proper number"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"4"})," is encoded as ",(0,t.jsx)(n.code,{children:"0x4"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"15"})," is encoded as ",(0,t.jsx)(n.code,{children:"0xf"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"42"})," is encoded as ",(0,t.jsx)(n.code,{children:"0x2a"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"291"})," is encoded as ",(0,t.jsx)(n.code,{children:"0x123"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"3984"})," is encoded as ",(0,t.jsx)(n.code,{children:"0xf90"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"binary-data",children:"Binary Data"}),"\n",(0,t.jsxs)(n.p,{children:["All binary data, including all the hashes, ",(0,t.jsx)(n.code,{children:"args"})," in script, ",(0,t.jsx)(n.code,{children:"outputs_data"})," items, are represented as hex string with ",(0,t.jsx)(n.code,{children:"0x"})," prefix. Some examples include:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"0x65b253cdcb6226e7f8cffec5c47c959b3d74af2caf7970a1eb1500e9b92aa200"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"0x927f3e74dceb87c81ba65a19da4f098b4de75a0d"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"0x40420f00000000000000000000000000"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"0x"})," (empty data)"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Unlike numbers, binary data should always have a even numbered length."})]})}function b(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},7227:(e,n,s)=>{s.d(n,{A:()=>c});s(6540);var t=s(8215);const a={tabItem:"tabItem_Ymn6"};var r=s(4848);function c(e){var n=e.children,s=e.hidden,c=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,c),hidden:s,children:n})}},9489:(e,n,s)=>{s.d(n,{A:()=>y});var t=s(6540),a=s(8215),r=s(4245),c=s(6347),o=s(6494),i=s(2814),d=s(5167),l=s(1269);function u(e){var n,s;return null!=(n=null==(s=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:s.filter(Boolean))?n:[]}function h(e){var n=e.values,s=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(s);return function(e){var n=(0,d.X)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,s])}function b(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,s=void 0!==n&&n,a=e.groupId,r=(0,c.W6)(),o=function(e){var n=e.queryString,s=void 0!==n&&n,t=e.groupId;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:s,groupId:a});return[(0,i.aZ)(o),(0,t.useCallback)((function(e){if(o){var n=new URLSearchParams(r.location.search);n.set(o,e),r.replace(Object.assign({},r.location,{search:n.toString()}))}}),[o,r])]}function x(e){var n,s,a,r,c=e.defaultValue,i=e.queryString,d=void 0!==i&&i,u=e.groupId,x=h(e),f=(0,t.useState)((function(){return function(e){var n,s=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!b({value:s,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+s+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return s}var a=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:c,tabValues:x})})),m=f[0],j=f[1],v=p({queryString:d,groupId:u}),g=v[0],_=v[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),s=(0,l.Dv)(n),a=s[0],r=s[1],[a,(0,t.useCallback)((function(e){n&&r.set(e)}),[n,r])]),k=y[0],w=y[1],C=function(){var e=null!=g?g:k;return b({value:e,tabValues:x})?e:null}();return(0,o.A)((function(){C&&j(C)}),[C]),{selectedValue:m,selectValue:(0,t.useCallback)((function(e){if(!b({value:e,tabValues:x}))throw new Error("Can't select invalid tab value="+e);j(e),_(e),w(e)}),[_,w,x]),tabValues:x}}var f=s(1062);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=s(4848);function v(e){var n=e.className,s=e.block,t=e.selectedValue,c=e.selectValue,o=e.tabValues,i=[],d=(0,r.a_)().blockElementScrollPositionUntilNextRender,l=function(e){var n=e.currentTarget,s=i.indexOf(n),a=o[s].value;a!==t&&(d(n),c(a))},u=function(e){var n,s=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":var t,a=i.indexOf(e.currentTarget)+1;s=null!=(t=i[a])?t:i[0];break;case"ArrowLeft":var r,c=i.indexOf(e.currentTarget)-1;s=null!=(r=i[c])?r:i[i.length-1]}null==(n=s)||n.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":s},n),children:o.map((function(e){var n=e.value,s=e.label,r=e.attributes;return(0,j.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return i.push(e)},onKeyDown:u,onClick:l},r,{className:(0,a.A)("tabs__item",m.tabItem,null==r?void 0:r.className,{"tabs__item--active":t===n}),children:null!=s?s:n}),n)}))})}function g(e){var n=e.lazy,s=e.children,a=e.selectedValue,r=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){var c=r.find((function(e){return e.props.value===a}));return c?(0,t.cloneElement)(c,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function _(e){var n=x(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,j.jsx)(v,Object.assign({},e,n)),(0,j.jsx)(g,Object.assign({},e,n))]})}function y(e){var n=(0,f.A)();return(0,j.jsx)(_,Object.assign({},e,{children:u(e.children)}),String(n))}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var t=s(6540);const a={},r=t.createContext(a);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);